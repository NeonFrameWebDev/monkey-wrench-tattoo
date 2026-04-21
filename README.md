# Monkey Wrench Tattoo Co., Landing Page

A speculative single-page landing built by NeonFrame Web Design for Monkey Wrench Tattoo Co., an appointment-only tattoo and piercing shop at 913 Main Street, Stevens Point, Wisconsin.

## Stack

- Pure HTML, CSS, and JS, no build step
- Google Fonts, non-blocking load (Oswald, Cinzel, Inter, JetBrains Mono)
- WebP + JPG image pairs
- Google Maps embed for directions
- No frameworks, no dependencies

## Page sections

`index.html` is one page:

- Sticky nav with Call-to-Book button
- Hero: "Tattoos. Piercings. Good Times."
- Credibility strip (4.2 stars, 112 reviews, 6.3K IG, one wrench)
- Services (4 cards)
- Story section (bone background, contrasts with the dark sections)
- Artists (Shawn, Ren, Morgan Burke)
- Flash gallery (6-image asymmetric mosaic)
- Reviews (3 pulled quotes)
- Visit (address, hours, map, CTAs)
- Final CTA band
- Footer

## CTAs

Every action funnels to one of two channels:

- **Call to Book** (primary) &rarr; `tel:+17153444739`
- **DM on Instagram** (secondary) &rarr; `https://www.instagram.com/monkeywrenchtattoo/`

Placements: nav button, hero, services section, each artist card, visit section, final CTA band, footer.

## Local development

```bash
python3 -m http.server 8765
# open http://localhost:8765
```

## SEO

- Unique title, description, canonical
- Open Graph + Twitter Card meta with custom 1200x630 og-image.jpg
- JSON-LD TattooParlor + LocalBusiness + AggregateRating + employee Persons
- `sitemap.xml` + `robots.txt`
- `site.webmanifest`

## Copy rules

- No em-dashes, no en-dashes, no HTML entities like `&mdash;` or `&ndash;`
- Second-person, short sentences, casual-honest tone matching the shop's real voice

## Deployment

GitHub Pages at `https://neonframewebdev.github.io/monkey-wrench-tattoo/`.
