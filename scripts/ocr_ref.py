"""Recover the reference design's real text + geometry via Tesseract."""
import glob
import os
import sys

import pytesseract
from PIL import Image, ImageOps

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

FRAMES = r"C:\Users\Dell\AppData\Local\Temp\opencode\frames"
CONFIG = "--psm 11 -c preserve_interword_spaces=1"


def upscale(path, factor=3):
    img = Image.open(path).convert("L")
    w, h = img.size
    return img.resize((w * factor, h * factor), Image.LANCZOS)


def main():
    files = sorted(glob.glob(os.path.join(FRAMES, "f_*.jpg")))
    for f in files:
        name = os.path.basename(f)
        big = upscale(f)
        data = pytesseract.image_to_data(
            big, config=CONFIG, output_type=pytesseract.Output.DICT
        )
        rows = []
        n, conf = data["text"], data["conf"]
        for i in range(len(n)):
            txt = n[i].strip()
            if not txt or int(float(conf[i])) < 40:
                continue
            w = data["width"][i] / 3.0
            h = data["height"][i] / 3.0
            if w < 6 or h < 5:  # drop speckle
                continue
            rows.append(
                (
                    data["top"][i] / 3.0,
                    (data["left"][i] + data["width"][i] / 2) / 3.0,
                    w,
                    h,
                    int(float(conf[i])),
                    txt,
                )
            )
        print(f"==== {name}  (frame {Image.open(f).size[0]}x{Image.open(f).size[1]}) ====")
        if not rows:
            print("  (no text)")
        for top, cx, w, h, c, txt in sorted(rows, key=lambda r: (r[0], r[1])):
            print(f"  y={top:>6.1f} x={cx:>6.1f} w={w:>6.1f} h={h:>5.1f} c={c:>3} {txt!r}")
        print()


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
