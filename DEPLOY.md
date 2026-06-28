# Ship & maintain the Clearing site

This repo contains a self-contained static site in [`site/`](./site). This guide
takes it live on **Cloudflare Pages** with **auto-deploy on every push to `main`**,
and points the domain **alexanderwiethoff.de** at it.

> I couldn't run these for you from the build environment (no GitHub/Cloudflare
> credentials and outbound network is locked down here), so each step below is a
> one-time action for you. They take ~15 minutes total.

---

## 1 · Put the repo on GitHub

From the project root:

```bash
git add -A
git commit -m "Clearing landing page (static)"      # already done if you see it in the log
gh repo create clearing-site --public --source=. --remote=origin --push
# …or without the gh CLI: create an empty repo on github.com, then:
#   git remote add origin git@github.com:<you>/clearing-site.git
#   git push -u origin main
```

The whole repo can go up — the marketing site lives in `site/`; the original
design bundle (`project/`, `chats/`) stays as reference history.

---

## 2 · Create the Cloudflare Pages project (auto-deploy)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git** → pick the `clearing-site` repo.
2. Build settings — **this is the only part that matters**:
   - **Framework preset:** `None`
   - **Build command:** *(leave empty)*
   - **Build output directory:** `site`
   - **Root directory:** `/` *(default)*
3. **Save and Deploy.** Cloudflare builds and gives you a preview URL like
   `https://clearing-site.pages.dev`.

From now on **every push to `main` auto-deploys** — no Action or token needed;
Pages' Git integration handles it.

---

## 3 · Point alexanderwiethoff.de at it (DNS @ united-domains)

You asked for the **nameserver switch** path (Cloudflare manages DNS). This is the
clean way to use the apex domain on Pages.

### 3a · Add the domain to Cloudflare
1. Cloudflare → **Add a site** → `alexanderwiethoff.de` → Free plan.
2. Cloudflare scans your current DNS and shows the records it imported.

### ⚠️ 3b · BEFORE switching — protect your email
Cloudflare's import can miss records. **Verify these still exist in Cloudflare's
DNS tab, and re-add any that are missing by copying them from your current
united-domains zone:**
- **MX** records (your mail server) — without these, **email stops**.
- Mail **TXT** records: SPF (`v=spf1 …`), DKIM, DMARC (`_dmarc`).
- Any `autoconfig` / `autodiscover` / `imap` / `smtp` / webmail subdomains.

Do not switch nameservers until your MX + mail TXT records are present in
Cloudflare. (If your mail is at united-domains, grab the values from their DNS
panel first.)

### 3c · Connect the domain to Pages
In **Workers & Pages → your project → Custom domains → Set up a domain**, add:
- `alexanderwiethoff.de`
- `www.alexanderwiethoff.de`

Because Cloudflare manages the zone, it creates the needed records automatically
(apex CNAME-flattened to the Pages project, and a `www` CNAME). SSL provisions on
its own. You don't add these by hand.

### 3d · Switch nameservers at united-domains
1. Cloudflare shows **two nameservers**, e.g. `xxx.ns.cloudflare.com` /
   `yyy.ns.cloudflare.com` (yours will be unique — use the exact ones shown).
2. united-domains → your domain → **Nameserver / DNS settings** → switch from
   "united-domains DNS" to **custom nameservers** → enter Cloudflare's two →
   **Save**.
3. Propagation is usually 30 min–a few hours. Cloudflare emails you when the zone
   goes **Active**, then the Pages custom domain flips to active and HTTPS works.

**Summary of what ends up where**

| Where | Setting |
|---|---|
| united-domains | Nameservers → the two `*.ns.cloudflare.com` Cloudflare gives you |
| Cloudflare DNS | apex + `www` → managed automatically by Pages; **MX + mail TXT preserved by you** |
| Cloudflare Pages | Custom domains: `alexanderwiethoff.de` + `www.alexanderwiethoff.de` |

---

## 4 · How I edit my site (interim — until the CMS)

The CMS layer (Keystatic) is the **next phase**. Right now you still edit in the
browser with auto-publish, just in raw files:

1. Open the repo on **github.com** → `site/index.html`.
2. Click the **pencil** (Edit). All copy is in plain, labelled blocks — find the
   words and change them.
3. **Commit to `main`** (green button).
4. Cloudflare auto-rebuilds and publishes in ~1 minute.
5. To swap a photo: upload your image into `site/assets/img/` (same filename) and
   commit.

---

## 5 · Make the form deliver (optional, recommended before launch)

The invitation form currently validates and shows a confirmation **client-side
only** — submissions aren't sent anywhere yet. Two lean options:

- **Formspree** (no backend): create a form, then in `site/index.html` set
  `<form … action="https://formspree.io/f/XXXX" method="POST">` and keep the JS
  for the inline confirmation, or let Formspree handle it. ~2 lines.
- **Cloudflare Worker / Pages Function**: a tiny `functions/submit.js` that emails
  you via MailChannels/Resend. Heavier; do it if you want zero third parties.

Tell me which you prefer and I'll wire it.

---

## Roadmap (the deferred CMS phase)

When the design is settled, phase two is your original full brief:
- **Astro** static build, move every editable string + image reference into
  **content collections** (Markdown/MDX + a small data file for the "shape" facts).
- **Keystatic** (GitHub mode) so you edit content in a browser and it commits back.
- A duplicable **content-collection → page** pattern for future retreat offerings.

The current static page is structured so this is a clean lift — each section is a
self-contained block that maps 1:1 to a content entry.
