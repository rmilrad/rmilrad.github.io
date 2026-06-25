# Photos

Drop image files here and they appear automatically — no code changes needed.
Until a file exists, the site shows a styled, brand-tinted placeholder that names
the expected filename.

Each job renders its images as a **banner slideshow** above the job text: one
image is shown at a time, spanning the full page width, auto-advancing every 5s
(pause on hover) with clickable position dots. If a job has only one image, no
dots show and it's just a static banner.

## Sizing model

The banner height is sized to the **tallest** image in the set (the one with the
smallest width ÷ height ratio). Shorter/wider images are centered on a
transparent background via `object-fit: contain` — never cropped or stretched.
So mixing aspect ratios within a job is fine, but for the cleanest look keep a
job's images close to the same shape.

Each image's pixel dimensions are recorded in `src/data/profile.ts` as `w`/`h`
on the `images[]` entry — that's what drives the per-banner aspect ratio. If you
swap a file, update its `w`/`h` to match.

## Current files

**Coinbase** (brand: blue)
- `coinbase-metrics.webp`  — "Choose a partner you can count on" stat block (2000×762)
- `coinbase-stake.webp`    — "Solutions for every staker" (2000×762)
- `coinbase-etf.webp`      — Grayscale ETH Staking ETF (2000×997)

**Hemi** (brand: orange)
- `hemi-website.webp`  — "Activate compliant Bitcoin yield" landing (2000×997)
- `hemi-app.webp`      — the cross-chain Tunnel bridge UI (2000×997)
- `hemi-metrics.webp`  — DefiLlama TVL chart (2000×997)

**Bloq** (brand: light blue)
- `bloq-website.webp`  — "Built for Pros. Available for All." (2000×997)
- `bloq-stake.webp`    — BloqStake Ethereum page (2000×997)

**Weight Watchers** (brand: indigo)
- `ww-banner.webp`  — data-science / NLP banner (860×287, low-res)

## Quality notes

The site serves these files **byte-for-byte** — Vite does not recompress static
assets, so on-screen sharpness equals source sharpness. For a crisp full-width
banner on Retina (≈2× device pixels), source images should be ~2000px wide and
exported at high quality. `ww-banner.webp` is only 860px wide and looks soft
when scaled up; re-export at ~2000px to fix.
