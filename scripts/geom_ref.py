"""Measure the reference layout: page box, rail edges, nav bar, type scale."""
import glob
import os
import sys

import numpy as np
from PIL import Image

FRAMES = r"C:\Users\Dell\AppData\Local\Temp\opencode\frames"


def lum(a):
    return a[..., 0] * 0.2126 + a[..., 1] * 0.7152 + a[..., 2] * 0.0722


def report(name):
    g = np.asarray(Image.open(name).convert("L"), dtype=float) / 255
    a = np.dstack([g, g, g])
    h, w = g.shape
    print(f"\n########## {os.path.basename(name)}  {w}x{h} ##########")

    # column ink profile -> finds vertical rails / borders
    col = lum(a).mean(0)
    edges = [i for i in range(1, w) if abs(col[i] - col[i - 1]) > 0.06]
    # collapse runs
    runs = []
    for e in edges:
        if runs and e - runs[-1][-1] <= 2:
            runs[-1].append(e)
        else:
            runs.append([e])
    print("vertical transitions (x, strength):")
    for r in runs:
        mid = r[len(r) // 2]
        print(f"   x={mid:>4}  d={abs(col[mid]-col[mid-1]):.2f}")

    # row ink profile -> finds header bar / horizontal rules
    row = lum(a).mean(1)
    redges = [i for i in range(1, h) if abs(row[i] - row[i - 1]) > 0.05]
    rruns = []
    for e in redges:
        if rruns and e - rruns[-1][-1] <= 2:
            rruns[-1].append(e)
        else:
            rruns.append([e])
    print("horizontal transitions (y, strength):")
    for r in rruns:
        mid = r[len(r) // 2]
        print(f"   y={mid:>4}  d={abs(row[mid]-row[mid-1]):.2f}")


def main():
    for f in sorted(glob.glob(os.path.join(FRAMES, "f_*.jpg"))):
        report(f)
    sys.stdout.reconfigure(encoding="utf-8")


main()
