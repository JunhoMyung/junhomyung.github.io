#!/opt/homebrew/bin/python3.11
"""
Generate public/cv.pdf from the /cv page.
Requires: pip install playwright && playwright install chromium

Usage:
  1. Start dev server: npm run dev
  2. Run this script: python scripts/generate_cv.py

CV_URL / CV_OUTPUT env vars override the defaults (used by the deploy workflow).
"""

from playwright.sync_api import sync_playwright
from pathlib import Path
import os

OUTPUT = Path(os.environ.get("CV_OUTPUT", Path(__file__).parent.parent / "public" / "cv.pdf"))
URL = os.environ.get("CV_URL", "http://localhost:3000/cv")

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto(URL, wait_until="networkidle")
    page.pdf(
        path=str(OUTPUT),
        format="A4",
        margin={"top": "1cm", "bottom": "1cm", "left": "1.5cm", "right": "1.5cm"},
        print_background=False,
        display_header_footer=False,
    )
    browser.close()

print(f"Saved: {OUTPUT}")
