import portraitSrc from '../assets/portrait.jpg'

export const meta = {
  firstName: 'Harsha',
  lastName: 'Vardhini',
  name: 'Harsha Vardhini S',
  monogram: 'HV',
  role: 'Data Analyst',
  roles: ['Python', 'SQL', 'Power BI', 'Business Intelligence'],
  location: 'Tirunelveli, India',
  email: 'harshabalan205@gmail.com',
  phone: '6383370780',
  phoneRaw: '+916383370780',
  github: 'https://github.com/Harshavardhini255',
  linkedin:
    'https://www.linkedin.com/in/harsha-vardhini-19373732a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  availability: 'Available for work',
}

export const headline = {
  // The reference sets the name as one huge display line, then splits the
  // role into a small prefix and a larger word. Mirrored here.
  name: ['Harsha', 'Vardhini'],
  rolePrefix: 'Data',
  roleWord: 'Analyst',
  intro: `I build the layer between messy datasets and clear answers — cleaning, modelling and visualising so that a number on a screen actually changes what someone does next.`,
  meta: [
    ['Focus', 'BI & Dashboard Development'],
    ['Method', 'Python · SQL · Power BI'],
    ['Also into', 'LLMs & Query Optimisation'],
  ],
}

/** Hero portrait sits in a soft organic mask in the reference. */
export const socials = [
  { label: 'GitHub', href: meta.github },
  { label: 'LinkedIn', href: meta.linkedin },
  { label: 'Email', href: `mailto:${meta.email}` },
  { label: 'Resume', href: '#credentials' },
]

export const status = {
  label: 'Available for New Project',
  href: '#contact',
}

export const stats = [
  { value: '03', label: 'Internships' },
  { value: '07', label: 'Projects' },
  { value: '50K+', label: 'Records analysed' },
  { value: '200+', label: 'Data issues resolved' },
]

export const ticker = [
  'Python',
  'SQL',
  'Power BI',
  'Pandas',
  'DAX',
  'Tableau',
  'Streamlit',
  'MySQL',
  'BigQuery',
  'LLMs',
  'Prompt Engineering',
  'A/B Testing',
  'Matplotlib',
  'Seaborn',
  'ETL',
  'Random Forest',
]

export const about = {
  label: 'Profile',
  title: 'A data analyst who cares about the answer, not just the chart.',
  paragraphs: [
    `I am a Data Analyst with hands-on internship experience across energy analytics, conversational AI-driven analytics, and business intelligence reporting. I work primarily in Python, SQL, Power BI and Excel, with additional exposure to Tableau, BigQuery, Streamlit and LLM-based analytics.`,
    `My work starts where spreadsheets stop: cleaning inconsistent tables, reshaping pipelines, and building the measures that make a dashboard trustworthy. At VOIS I delivered 15+ analytical reports through conversational analysis with Large Language Models; at IPCS Global I resolved 200+ data quality issues across multiple tables; at InGage Technologies I turned raw IoT energy readings into interactive dashboards that made consumption patterns visible.`,
    `What I enjoy most is the translation step — sitting between a stakeholder's question and the query that answers it, then designing the visual that closes the loop.`,
  ],
  portrait: { src: portraitSrc, alt: 'Portrait of Harsha Vardhini S' },
  aside: [
    ['Based in', 'Tirunelveli, Tamil Nadu'],
    ['Education', 'B.E. ECE · CGPA 8.1'],
    ['Graduating', '2027'],
    ['Languages', 'English, Tamil'],
  ],
}

export const skillGroups = [
  {
    n: '01',
    title: 'Data Analysis & Wrangling',
    text: 'Cleaning, reshaping and profiling messy tables into something a query can trust. Pandas, NumPy, Excel, ETL, A/B testing and statistical modelling.',
  },
  {
    n: '02',
    title: 'Dashboards & Visualisation',
    text: 'Power BI models built around DAX measures, Power Query pipelines, KPI cards and slicers — plus Tableau, Streamlit, Matplotlib and Seaborn for exploration.',
  },
  {
    n: '03',
    title: 'SQL & Data Engineering',
    text: 'Normalised relational schemas, joins, subqueries and query optimisation in MySQL, with BigQuery and pipeline design for repeatable reporting.',
  },
  {
    n: '04',
    title: 'AI & LLM Analytics',
    text: 'Conversational analytics over structured datasets using Large Language Models, prompt engineering and NLP, alongside predictive models in scikit-learn.',
  },
]

export const skillTags = [
  { group: 'Languages', items: ['Python', 'SQL', 'Java'] },
  { group: 'Analysis', items: ['Pandas', 'NumPy', 'Data Cleaning', 'ETL', 'A/B Testing'] },
  { group: 'BI & Viz', items: ['Power BI (DAX)', 'Power Query', 'Tableau', 'Streamlit'] },
  { group: 'Database', items: ['MySQL', 'Query Optimisation', 'Normalisation', 'BigQuery'] },
  { group: 'AI & NLP', items: ['LLMs', 'Prompt Engineering', 'NLP', 'Random Forest'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Google Colab', 'Jupyter', 'VS Code'] },
]

export const experience = [
  {
    period: 'Jun 2026 — Jul 2026',
    role: 'Data Analyst Intern',
    company: 'InGage Technologies Pvt Ltd',
    place: 'Chennai, India',
    highlight: 'Energy analytics',
    bullets: [
      'Collected and structured energy consumption data from an IoT-based setup (Wokwi, ThingSpeak) and performed data cleaning, preprocessing and exploratory data analysis using Python (Pandas, NumPy) in Google Colab to identify key KPIs and usage patterns.',
      'Built interactive Power BI dashboards to visualise energy consumption trends and usage variations, supporting data-driven energy management insights.',
    ],
  },
  {
    period: 'Sep 2025 — Oct 2025',
    role: 'Data Analyst Intern',
    company: 'VOIS — AICTE Program',
    place: 'Remote',
    highlight: 'Conversational AI analytics',
    bullets: [
      'Performed conversational data analysis using Large Language Models and prompt engineering to extract AI-driven business insights from structured datasets, delivering 15+ analytical reports to stakeholders.',
      'Analysed datasets using Python (Pandas, NumPy) and SQL across a data pipeline of 50,000+ records; designed data cleaning workflows that improved data accuracy by 25%.',
    ],
  },
  {
    period: 'Jul 2025 — Aug 2025',
    role: 'Data Analyst Intern',
    company: 'IPCS Global Pvt Ltd',
    place: 'Tirunelveli, India',
    highlight: 'Business intelligence reporting',
    bullets: [
      'Conducted end-to-end data cleaning, wrangling and exploratory data analysis on business datasets using Python, resolving 200+ data quality issues across multiple tables.',
      'Built interactive Power BI dashboards and visualisations using Matplotlib and Seaborn, applying statistical methods and A/B testing to uncover sales trends and support a 20% improvement in business performance reporting.',
    ],
  },
]

export const workIntro = 'Turning Raw Records Into Decisions That Matter'

export const workFilters = [
  { id: 'all', label: 'All' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'analysis', label: 'Analysis' },
  { id: 'ai', label: 'AI' },
  { id: 'database', label: 'Database' },
]

export const projects = [
  {
    n: '01',
    title: 'HR Analytics Dashboard',
    category: 'People Analytics',
    kind: 'dashboard',
    stack: 'Python · SQL · Power BI · Streamlit',
    year: '2026',
    desc: 'An end-to-end HR analytics application performing ETL and data cleaning on employee datasets to track attrition, performance and compensation KPIs — surfaced through interactive Power BI dashboards and a Streamlit interface.',
    tags: ['ETL', 'Power BI', 'Streamlit'],
    href: 'https://github.com/Harshavardhini255/hr-analytics-dashboard',
  },
  {
    n: '02',
    title: 'Customer Churn Analysis',
    category: 'Predictive Analytics',
    kind: 'analysis',
    stack: 'SQL · Python · Random Forest · Power BI',
    year: '2026',
    desc: 'Analysed customer data with SQL and Pandas to identify churn drivers and segment customers by risk, then built a Random Forest predictive model alongside Power BI visualisations to support retention strategy.',
    tags: ['Random Forest', 'Segmentation', 'Power BI'],
    href: 'https://github.com/Harshavardhini255/churn-analysis',
  },
  {
    n: '03',
    title: 'VOIS AICTE Major Project',
    category: 'Conversational AI',
    kind: 'ai',
    stack: 'LLM · NLP · Prompt Engineering',
    year: '2025',
    desc: 'An AI-driven conversational analytics solution that lets a user ask questions of structured data in natural language. NLP techniques process and interpret the dataset to generate automated business insights.',
    tags: ['LLM', 'NLP', 'Prompt Engineering'],
    href: 'https://github.com/Harshavardhini255/VOIS_AICTE_Oct2025_MajorProject_Harshavardini_S',
  },
  {
    n: '04',
    title: 'Blinkit Grocery Sales Dashboard',
    category: 'Retail Intelligence',
    kind: 'dashboard',
    stack: 'Power BI · DAX · Data Modeling',
    year: '2025',
    desc: 'An interactive dashboard analysing $1.20M in sales across 8,500+ SKUs with KPI cards, DAX measures and slicers for outlet type, size and item category — cutting manual reporting time by 40%.',
    tags: ['DAX', 'Slicers', 'KPI'],
    href: null,
  },
  {
    n: '05',
    title: 'Netflix Content Data Analysis',
    category: 'Exploratory Analysis',
    kind: 'analysis',
    stack: 'Python · Pandas · Seaborn',
    year: '2025',
    desc: 'EDA and statistical modelling on a real-world dataset of 8,800+ titles to identify content trends, genre distributions and release patterns, with 10+ pipeline transformations feeding the conclusions.',
    tags: ['EDA', 'Statistical Modelling', 'Viz'],
    href: null,
  },
  {
    n: '06',
    title: 'Flipkart Web Scraping & Market Analysis',
    category: 'Data Engineering',
    kind: 'analysis',
    stack: 'Python · Web Scraping · ETL',
    year: '2025',
    desc: 'Extracted product and pricing data from Flipkart with Python-based scraping, applied ETL and data cleaning, then analysed pricing and category performance trends in Power BI.',
    tags: ['Scraping', 'ETL', 'Pricing'],
    href: null,
  },
  {
    n: '07',
    title: 'Library Management System',
    category: 'Relational Design',
    kind: 'database',
    stack: 'SQL · MySQL',
    year: '2025',
    desc: 'A normalised relational schema with DDL/DML operations and key constraints across 5,000+ records, plus query optimisation that cut execution time by 30% and improved retrieval efficiency by 35%.',
    tags: ['Normalisation', 'Joins', 'Tuning'],
    href: null,
  },
]

export const education = [
  {
    degree: 'B.E. — Electronics & Communication Engineering',
    school: 'Government College of Engineering, Tirunelveli',
    period: '2023 — 2027',
    note: 'CGPA 8.1 / 10.0',
  },
  {
    degree: 'HSC — Higher Secondary Certificate',
    school: 'Mary Matha Matric Hr Sec School',
    period: 'March 2023',
    note: '90%',
  },
  {
    degree: 'SSLC — Secondary School Certificate',
    school: 'Mary Matha Matric Hr Sec School',
    period: 'March 2021',
    note: '90%',
  },
]

export const certifications = [
  { title: 'Google Cloud Data Analytics Certificate', issuer: 'Google', date: 'May 2026' },
  {
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'Tata Group / Forage',
    date: 'April 2026',
  },
  { title: 'Python for Data Visualization', issuer: 'Udemy', date: 'July 2025' },
  { title: 'Python for Data Analysis', issuer: 'Udemy', date: 'June 2025' },
  { title: 'SQL for Data Analytics', issuer: 'Udemy', date: 'May 2025' },
  { title: 'MS Excel', issuer: 'Microsoft', date: 'April 2025' },
]

export const interests = [
  'Data Analytics',
  'Dashboard Development',
  'AI-Driven Analysis',
  'Statistical Modeling',
  'Large Language Models',
  'Query Optimization',
  'Data Pipelines',
]

export const activities = [
  { role: 'Active Member', title: 'National Service Scheme (NSS)', org: 'Government College of Engineering, Tirunelveli' },
  { role: 'Coordinator', title: 'Symposium', org: 'Government College of Engineering, Tirunelveli' },
]

export const contact = {
  label: 'Contact',
  title: 'Have a dataset needing an answer?',
  body: `I am open to analyst and data science roles, and to freelance work involving dashboard development, data cleaning and BI reporting. If you have a question worth measuring, I would like to hear about it.`,
  actions: [
    { label: 'Email me', href: `mailto:${meta.email}`, primary: true },
    { label: 'LinkedIn', href: meta.linkedin, primary: false },
    { label: 'GitHub', href: meta.github, primary: false },
  ],
}

export const nav = [
  { id: 'work', label: 'Work', count: projects.length },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'credentials', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]
