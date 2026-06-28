# Clearing — landing page

A single, self-contained static landing page for **Clearing**, a small two-day
thinking retreat. Built from a Claude Design prototype, recreated faithfully in
plain HTML/CSS/JS — no framework, no build step, no dependencies.

- **Palette:** paper `#F7F4EE`, deep petrol `#1E4E4A`, warm near-black text `#211E1B`
- **Type:** Lora (serif headlines) + Source Sans 3 (humanist sans body), via Google Fonts
- **Look baked in:** *balanced* petrol depth + *rich* imagery (the two design-exploration
  knobs from the prototype were resolved to their chosen defaults)

## Files

```
site/
├── index.html            the whole page (markup + styles + form script inline)
├── 404.html              on-palette not-found page
├── _headers              Cloudflare Pages caching + security headers
└── assets/img/           optimised WebP imagery (+ paper-grain PNG texture)
```

## Run it locally

It's static — open `index.html` in a browser, or serve the folder:

```bash
cd site
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Editing the copy (interim)

Until the CMS layer is added, **all text lives in `index.html`** in plain,
readable blocks — search for the words you want to change and edit them in place.
The structured "shape" facts are the `<dl>` list; the host name is in the
"Your host" section.

> **Next phase (planned):** move every editable string/image into Astro content
> collections with a Keystatic CMS so copy can be edited in the browser. See
> `../DEPLOY.md` → "Roadmap". This page was deliberately shipped static first.

## Notes

- The invitation form validates name / email / "why now" and shows a personal
  confirmation **client-side only** — it does not yet send the submission
  anywhere. Wiring real delivery is a one-line `action=` change to a form service
  (e.g. Formspree) or a Cloudflare Worker. See `../DEPLOY.md` → "Make the form deliver".
- Imagery is on-palette mood placeholder art from the prototype — swap the files
  in `assets/img/` for real photographs anytime (keep the same filenames, or
  update the `src=` references).
- Accessibility: semantic landmarks, labelled inputs, `role="alert"` errors,
  alt text, reduced-motion honoured, strong contrast. No analytics or trackers.
