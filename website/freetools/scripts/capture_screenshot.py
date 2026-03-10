from playwright.sync_api import sync_playwright
import os
import json

SCREENSHOTS_DIR = "/Users/valerio/Piattafroma Avvocati/website/freetools/screenshots"

pages = [
    {"url": "http://localhost:3099/", "name": "landing"},
    {"url": "http://localhost:3099/contributo-unificato", "name": "contributo-unificato"},
]

viewports = [
    {"name": "desktop", "width": 1440, "height": 900},
    {"name": "mobile", "width": 375, "height": 812},
]

os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

def capture_all():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        for page_info in pages:
            for vp in viewports:
                context = browser.new_context(
                    viewport={"width": vp["width"], "height": vp["height"]},
                    device_scale_factor=2,
                )
                page = context.new_page()
                print(f"Navigating to {page_info['url']} at {vp['name']} ({vp['width']}x{vp['height']})...")

                try:
                    page.goto(page_info["url"], wait_until="networkidle", timeout=30000)
                except Exception as e:
                    print(f"  Warning during navigation: {e}")

                # Wait a bit for any animations / lazy loads
                page.wait_for_timeout(1500)

                # Above-the-fold screenshot (viewport only)
                atf_path = os.path.join(
                    SCREENSHOTS_DIR,
                    f"{page_info['name']}_{vp['name']}_above-fold.png",
                )
                page.screenshot(path=atf_path, full_page=False)
                print(f"  Saved above-the-fold: {atf_path}")

                # Full page screenshot
                full_path = os.path.join(
                    SCREENSHOTS_DIR,
                    f"{page_info['name']}_{vp['name']}_full.png",
                )
                page.screenshot(path=full_path, full_page=True)
                print(f"  Saved full page: {full_path}")

                # Gather diagnostic info
                diagnostics = page.evaluate("""() => {
                    const results = {};

                    // H1 check
                    const h1 = document.querySelector('h1');
                    results.h1Text = h1 ? h1.innerText : null;
                    results.h1Visible = false;
                    if (h1) {
                        const rect = h1.getBoundingClientRect();
                        results.h1Rect = {top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right};
                        results.h1Visible = rect.top < window.innerHeight && rect.bottom > 0;
                    }

                    // CTA buttons
                    const buttons = Array.from(document.querySelectorAll('button, a[href]'));
                    results.ctaButtons = buttons.slice(0, 20).map(b => {
                        const rect = b.getBoundingClientRect();
                        return {
                            tag: b.tagName,
                            text: b.innerText?.substring(0, 60),
                            href: b.href || null,
                            visibleAboveFold: rect.top < window.innerHeight && rect.bottom > 0,
                            rect: {top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right, width: rect.width, height: rect.height}
                        };
                    });

                    // Check for horizontal overflow
                    results.hasHorizontalScroll = document.documentElement.scrollWidth > document.documentElement.clientWidth;
                    results.scrollWidth = document.documentElement.scrollWidth;
                    results.clientWidth = document.documentElement.clientWidth;

                    // Font sizes
                    const body = document.querySelector('body');
                    const bodyStyle = window.getComputedStyle(body);
                    results.baseFontSize = bodyStyle.fontSize;

                    // Check smallest text
                    const allText = Array.from(document.querySelectorAll('p, span, li, td, th, label, a'));
                    const smallTexts = allText.filter(el => {
                        const fs = parseFloat(window.getComputedStyle(el).fontSize);
                        return fs < 14;
                    }).slice(0, 10).map(el => ({
                        tag: el.tagName,
                        text: el.innerText?.substring(0, 40),
                        fontSize: window.getComputedStyle(el).fontSize
                    }));
                    results.smallTexts = smallTexts;

                    // Images
                    const images = Array.from(document.querySelectorAll('img'));
                    results.images = images.map(img => ({
                        src: img.src?.substring(0, 100),
                        alt: img.alt,
                        naturalWidth: img.naturalWidth,
                        naturalHeight: img.naturalHeight,
                        displayWidth: img.clientWidth,
                        displayHeight: img.clientHeight,
                        loaded: img.complete && img.naturalWidth > 0
                    }));

                    // Touch target check (mobile)
                    const clickables = Array.from(document.querySelectorAll('button, a, input, select, textarea, [role="button"]'));
                    results.smallTouchTargets = clickables.filter(el => {
                        const rect = el.getBoundingClientRect();
                        return (rect.width < 44 || rect.height < 44) && rect.width > 0;
                    }).slice(0, 10).map(el => ({
                        tag: el.tagName,
                        text: el.innerText?.substring(0, 40),
                        width: el.getBoundingClientRect().width,
                        height: el.getBoundingClientRect().height,
                    }));

                    // Navigation elements
                    const nav = document.querySelector('nav');
                    results.hasNav = !!nav;
                    results.navVisible = false;
                    if (nav) {
                        const rect = nav.getBoundingClientRect();
                        results.navVisible = rect.top < window.innerHeight && rect.bottom > 0 && rect.height > 0;
                    }

                    // Check for drawer / floating button
                    results.hasDrawerButton = !!document.querySelector('[class*="floating"], [class*="drawer"], [class*="menu-button"], [class*="hamburger"], [aria-label*="menu"]');

                    // Check for fixed/sticky elements that might cause CLS
                    const allElements = Array.from(document.querySelectorAll('*'));
                    results.fixedElements = allElements.filter(el => {
                        const pos = window.getComputedStyle(el).position;
                        return pos === 'fixed' || pos === 'sticky';
                    }).slice(0, 10).map(el => ({
                        tag: el.tagName,
                        classes: el.className?.toString().substring(0, 80),
                        position: window.getComputedStyle(el).position,
                        rect: {
                            top: el.getBoundingClientRect().top,
                            height: el.getBoundingClientRect().height,
                            width: el.getBoundingClientRect().width
                        }
                    }));

                    return results;
                }""")

                diag_path = os.path.join(
                    SCREENSHOTS_DIR,
                    f"{page_info['name']}_{vp['name']}_diagnostics.json",
                )
                with open(diag_path, "w") as f:
                    json.dump(diagnostics, f, indent=2)
                print(f"  Saved diagnostics: {diag_path}")

                context.close()

        # Mobile-specific: test the floating button / drawer interaction on contributo-unificato
        print("\n--- Mobile drawer interaction test ---")
        context = browser.new_context(
            viewport={"width": 375, "height": 812},
            device_scale_factor=2,
        )
        page = context.new_page()
        page.goto("http://localhost:3099/contributo-unificato", wait_until="networkidle", timeout=30000)
        page.wait_for_timeout(1500)

        # Look for floating/drawer trigger buttons
        floating_buttons = page.query_selector_all('button[class*="fixed"], [class*="floating"], button[aria-label*="menu"], button[aria-label*="nav"]')
        print(f"  Found {len(floating_buttons)} potential floating/drawer buttons")

        # Try broader search
        all_fixed = page.evaluate("""() => {
            const allEls = Array.from(document.querySelectorAll('button'));
            return allEls.filter(el => {
                const pos = window.getComputedStyle(el).position;
                return pos === 'fixed' || pos === 'sticky';
            }).map(el => ({
                text: el.innerText?.substring(0, 60),
                classes: el.className?.toString().substring(0, 100),
                ariaLabel: el.getAttribute('aria-label'),
                rect: {
                    top: el.getBoundingClientRect().top,
                    left: el.getBoundingClientRect().left,
                    width: el.getBoundingClientRect().width,
                    height: el.getBoundingClientRect().height,
                }
            }));
        }""")
        print(f"  Fixed/sticky buttons: {json.dumps(all_fixed, indent=2)}")

        if all_fixed:
            # Click the first fixed button to test drawer
            btn = all_fixed[0]
            page.click(f'button >> text="{btn["text"]}"' if btn["text"] else 'button[class*="fixed"]')
            page.wait_for_timeout(800)
            drawer_path = os.path.join(SCREENSHOTS_DIR, "contributo-unificato_mobile_drawer-open.png")
            page.screenshot(path=drawer_path, full_page=False)
            print(f"  Saved drawer open screenshot: {drawer_path}")

        context.close()
        browser.close()
        print("\nDone!")

if __name__ == "__main__":
    capture_all()
