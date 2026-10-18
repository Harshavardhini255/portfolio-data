/* Headless smoke test: console errors, horizontal overflow, section geometry. */
import { chromium } from 'playwright'

const URL = process.argv[2] || 'http://localhost:4173/'
const WIDTH = Number(process.argv[3] || 1512)
const HEIGHT = Number(process.argv[4] || 950)

const browser = await chromium.launch({
  channel: 'chromium',
  args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
})
const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT } })

const errors = []
page.on('console', (m) => {
  if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text()}`)
})
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))
page.on('requestfailed', (r) => errors.push(`[requestfailed] ${r.url()} ${r.failure()?.errorText}`))

await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)

const report = await page.evaluate(() => {
  const de = document.documentElement
  const sections = [...document.querySelectorAll('section[id]')].map((s) => {
    const r = s.getBoundingClientRect()
    return {
      id: s.id,
      top: Math.round(r.top + window.scrollY),
      h: Math.round(r.height),
      w: Math.round(r.width),
    }
  })

  // any element sticking out past the viewport horizontally
  const overflow = [...document.querySelectorAll('body *')]
    .map((el) => {
      const r = el.getBoundingClientRect()
      return { el, r }
    })
    .filter(({ r }) => r.width > 0 && (r.right > de.clientWidth + 1 || r.left < -1))
    .slice(0, 8)
    .map(({ el, r }) => `${el.tagName.toLowerCase()}.${String(el.className).slice(0, 40)} [${Math.round(r.left)}→${Math.round(r.right)}]`)

  const h1 = document.querySelector('h1')
  return {
    title: document.title,
    scrollW: de.scrollWidth,
    clientW: de.clientWidth,
    scrollH: de.scrollHeight,
    horizontalOverflow: de.scrollWidth > de.clientWidth,
    overflowEls: overflow,
    h1: h1 ? h1.innerText.replace(/\n/g, ' / ') : null,
    h1Size: h1 ? getComputedStyle(h1).fontSize : null,
    imgOk: (() => {
      const i = document.querySelector('img')
      return i ? { complete: i.complete, w: i.naturalWidth, h: i.naturalHeight, src: i.currentSrc.split('/').pop() } : null
    })(),
    links: [...document.querySelectorAll('a[href]')].length,
    externalLinks: [...document.querySelectorAll('a[target="_blank"]')].length,
    sections,
  }
})

console.log(JSON.stringify(report, null, 2))

// scroll through the page to trigger reveals, then re-check for errors
await page.evaluate(async () => {
  const step = window.innerHeight * 0.7
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 120))
  }
  window.scrollTo(0, 0)
})
await page.waitForTimeout(800)

const hidden = await page.evaluate(() => {
  const els = [...document.querySelectorAll('[data-reveal], main h1, main h3')]
  return {
    stillInvisible: els.filter((e) => Number(getComputedStyle(e).opacity) < 0.05).length,
    checked: els.length,
  }
})

console.log('\nreveal check:', JSON.stringify(hidden))
console.log('\nconsole issues:', errors.length ? '\n  ' + errors.join('\n  ') : 'none')

await browser.close()
