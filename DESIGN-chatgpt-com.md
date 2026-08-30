# Design System Inspired by Codex in ChatGPT

> Auto-extracted from `https://chatgpt.com/codex/?utm_source=google&utm_medium=paid_search&c_id=23277424063&c_agid=194565314845&c_crid=807823908142&c_kwid=kwd-2480737336070&c_ims=&c_pms=1007788&c_nw=g&c_dvc=c` on 2026-08-30

## 1. Visual Theme & Atmosphere

Refined dark mode with muted tones — cinematic and premium.

The hero section leads with "Choose a ChatGPT  plan to get started".

**Key Characteristics:**
- OpenAI Sans as the heading font (custom web font loaded via @font-face)
- -apple-system-body as the body font for all running text
- Dark background (#000000) as the primary canvas
- Primary accent `#888888` used for CTAs and brand highlights
- 3 shadow level(s) detected — tinted shadows
- Rounded corners (8px+) creating a friendly, approachable feel
- Tags: dark, rounded, monochrome, monospace, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#888888`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Secondary Accent** (`#aaaaaa`) · `--color-secondary`: Secondary brand, hover states, complementary highlights.
- **Background** (`#000000`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#212121`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#ffffff`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#999999`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#303030`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#303030` | `--palette-1` | block | large | text-light |
| 2 | `#212121` | `--palette-2` | button | large | text-light |
| 3 | `#f9f9f9` | `--palette-3` | button | medium | text-dark |
| 4 | `#0d0d0d` | `--palette-4` | button | small | text-light |

## 3. Typography Rules

- **Heading Font:** `OpenAI Sans` (web font)
- **Body Font:** `-apple-system-body`, sans-serif

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H2 | OpenAI Sans | 48px | 500 | 55.68px | -1.44px |
| H3 | OpenAI Sans | 30px | 500 | 39.6px | -0.3px |
| Body | OpenAI Sans | 22px | 500 | 27.72px | -0.22px |
| Code | ui-monospace | 14px | 500 | 20px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `64px` | headings |
| H1 | `48px` | headings |
| H2 | `40px` | headings |
| H3 | `30px` | headings |
| H4 | `22px` | headings |
| Body L | `17px` | body / supporting text |
| Body | `16px` | body / supporting text |
| Small | `14px` | body / supporting text |
| XS | `10px` | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: transparent;
  color: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

### Ghost Button

```css
.btn-ghost {
  background: transparent;
  color: #0d0d0d;
  border-radius: 0px;
  padding: 0px 32px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

### Ghost Button 2

```css
.btn-ghost-2 {
  background: transparent;
  color: #5d5d5d;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

### Ghost Button 3

```css
.btn-ghost-3 {
  background: transparent;
  color: #5d5d5d;
  border-radius: 0px;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

## 5. Layout Principles

- **Base spacing unit:** `8px` — use multiples (16px, 24px, 32px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `8px` | element |
| spacing-2 | `16px` | element |
| spacing-3 | `6px` | element |
| spacing-4 | `20px` | element |
| spacing-5 | `32px` | card |
| spacing-6 | `64px` | section |
| spacing-7 | `36px` | card |
| spacing-8 | `40px` | card |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|
| radius-button | `8px` | button |
| radius-button | `6px` | button |
| radius-card | `16px` | card |
| radius-card | `20px` | card |
| radius-button | `12px` | button |

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| Low | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation |
| Low | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation |
| Low | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation |


## 7. Do's and Don'ts

### Do
- Use `#000000` as the primary background color
- Use `OpenAI Sans` for all headings and `-apple-system-body` for body text
- Use `#888888` as the single dominant accent/CTA color
- Maintain `8px` as the base spacing unit — all gaps should be multiples
- Keep the overall feel dark — use dark surfaces throughout
- Use rounded corners (`8px`+) consistently for all interactive elements
- Stick to grayscale + `#888888` accent — avoid color overload
- Apply the shadow system for elevation — use the extracted shadow values

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute OpenAI Sans/-apple-system-body with generic alternatives
- Don't use irregular spacing — stick to 8px grid
- Don't introduce bright white surfaces — they break the dark palette
- Don't use sharp corners — they feel hostile in this rounded design language
- Don't add additional saturated colors beyond the primary accent
- Don't use pure black (#000000) for text — use `#ffffff` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 8px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #000000
Text:        #ffffff
Accent:      #888888
Secondary:   #aaaaaa
Border:      #303030
```

### Example Prompts

1. "Build a hero section with a `#000000` background, `OpenAI Sans` heading in `#ffffff`, and a `#888888` CTA button."
2. "Create a pricing card using background `#212121`, border `#303030`, `-apple-system-body` for text, and 24px padding."
3. "Design a navigation bar — `#000000` background, `#ffffff` links, `#888888` for active state."
4. "Build a feature grid with 3 columns, 24px gap, each card using the card component style."
5. "Create a footer with `#212121` background, `#ffffff` text, and 16px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct

## 10. CSS Custom Properties

> 19 custom properties extracted from `:root` / `html` stylesheets.

### Other Variables

| Variable | Value |
|---|---|
| `--spring-fast-duration` | `.667s` |
| `--spring-fast` | `linear(0, .01942 1.83%, .07956 4.02%, .47488 13.851%, .65981 19.572%, .79653 25.733%, .84834 29.083%, .89048 32.693%, .9246 36.734%, .95081 41.254%, .97012 46.425%, .98361 52.535%, .99665 68.277%, .99988)` |
| `--spring-common-duration` | `.667s` |
| `--spring-common` | `linear(0, .00506 1.18%, .02044 2.46%, .08322 5.391%, .46561 17.652%, .63901 24.342%, .76663 31.093%, .85981 38.454%, .89862 42.934%, .92965 47.845%, .95366 53.305%, .97154 59.516%, .99189 74.867%, .9991)` |
| `--spring-standard` | `var(--spring-common)` |
| `--spring-slow-bounce-duration` | `1.167s` |
| `--spring-slow-bounce` | `linear(0, .00172 0.51%, .00682 1.03%, .02721 2.12%, .06135 3.29%, .11043 4.58%, .21945 6.911%, .59552 14.171%, .70414 16.612%, .79359 18.962%, .86872 21.362%, .92924 23.822%, .97589 26.373%, 1.01 29.083%, 1.0264 31.043%, 1.03767 33.133%, 1.04411 35.404%, 1.04597 37.944%, 1.04058 42.454%, 1.01119 55.646%, 1.00137 63.716%, .99791 74.127%, .99988)` |
| `--spring-bounce-duration` | `.833s` |
| `--spring-bounce` | `linear(0, .00541 1.29%, .02175 2.68%, .04923 4.19%, .08852 5.861%, .17388 8.851%, .48317 18.732%, .57693 22.162%, .65685 25.503%, .72432 28.793%, .78235 32.163%, .83182 35.664%, .87356 39.354%, .91132 43.714%, .94105 48.455%, .96361 53.705%, .97991 59.676%, .9903 66.247%, .99664 74.237%, .99968 84.358%, 1.00048)` |
| `--spring-fast-bounce-duration` | `1s` |
| `--spring-fast-bounce` | `linear(0, .00683 1.14%, .02731 2.35%, .11137 5.091%, .59413 15.612%, .78996 20.792%, .92396 25.953%, .97109 28.653%, 1.00624 31.503%, 1.03801 36.154%, 1.0477 41.684%, 1.00242 68.787%, .99921)` |
| `--easing-spring-elegant-duration` | `.58171s` |
| `--easing-spring-elegant` | `linear(0 0%, .005927 1%, .022466 2%, .047872 3%, .080554 4%, .119068 5%, .162116 6%, .208536 7.0%, .2573 8%, .3075 9%, .358346 10%, .409157 11%, .45935 12%, .508438 13%, .556014 14.0%, .601751 15%, .645389 16%, .686733 17%, .72564 18%, .762019 19%, .795818 20%, .827026 21%, .855662 22%, .881772 23%, .905423 24%, .926704 25%, .945714 26%, .962568 27%, .977386 28.0%, .990295 29.0%, 1.00143 30%, 1.01091 31%, 1.01888 32%, 1.02547 33%, 1.03079 34%, 1.03498 35%, 1.03816 36%, 1.04042 37%, 1.04189 38%, 1.04266 39%, 1.04283 40%, 1.04247 41%, 1.04168 42%, 1.04052 43%, 1.03907 44%, 1.03737 45%, 1.03549 46%, 1.03348 47%, 1.03138 48%, 1.02922 49%, 1.02704 50%, 1.02486 51%, 1.02272 52%, 1.02063 53%, 1.01861 54%, 1.01667 55.0%, 1.01482 56.0%, 1.01307 57.0%, 1.01142 58.0%, 1.00989 59%, 1.00846 60%, 1.00715 61%, 1.00594 62%, 1.00485 63%, 1.00386 64%, 1.00296 65%, 1.00217 66%, 1.00147 67%, 1.00085 68%, 1.00031 69%, .999849 70%, .999457 71%, .999128 72%, .998858 73%, .99864 74%, .99847 75%, .998342 76%, .998253 77%, .998196 78%, .998169 79%, .998167 80%, .998186 81%, .998224 82%, .998276 83%, .998341 84%, .998415 85%, .998497 86%, .998584 87%, .998675 88%, .998768 89%, .998861 90%, .998954 91%, .999045 92%, .999134 93%, .99922 94%, .999303 95%, .999381 96%, .999455 97%, .999525 98%, .999589 99%, .99965 100%)` |
| `--easing-common` | `linear(0, 0, .0001, .0002, .0003, .0005, .0007, .001, .0013, .0016, .002, .0024, .0029, .0033, .0039, .0044, .005, .0057, .0063, .007, .0079, .0086, .0094, .0103, .0112, .0121, .0132 1.84%, .0153, .0175, .0201, .0226, .0253, .0283, .0313, .0345, .038, .0416, .0454, .0493, .0535, .0576, .0621, .0667, .0714, .0764, .0816 5.04%, .0897, .098 5.62%, .1071, .1165, .1263 6.56%, .137, .1481 7.25%, .1601 7.62%, .1706 7.94%, .1819 8.28%, .194, .2068 9.02%, .2331 9.79%, .2898 11.44%, .3151 12.18%, .3412 12.95%, .3533, .365 13.66%, .3786, .3918, .4045, .4167, .4288, .4405, .452, .4631 16.72%, .4759, .4884, .5005, .5124, .5242, .5354, .5467, .5576, .5686, .5791, .5894, .5995, .6094, .6194, .6289, .6385, .6477, .6569, .6659 24.45%, .6702, .6747, .6789, .6833, .6877, .6919, .696, .7002, .7043, .7084, .7125, .7165, .7205, .7244, .7283, .7321, .7358, .7396, .7433, .7471, .7507, .7544, .7579, .7615, .7649, .7685, .7718, .7752, .7786, .782, .7853, .7885, .7918, .7951, .7982, .8013, .8043, .8075, .8104, .8135, .8165, .8195, .8224, .8253, .8281, .8309, .8336, .8365, .8391, .8419, .8446, .8472, .8499, .8524, .855, .8575, .8599, .8625 37.27%, .8651, .8678, .8703, .8729, .8754, .8779, .8803, .8827, .8851, .8875, .8898, .892, .8942, .8965, .8987, .9009, .903, .9051, .9071, .9092, .9112, .9132, .9151, .9171, .919, .9209, .9227, .9245, .9262, .928, .9297, .9314, .9331, .9347, .9364, .9379, .9395, .941, .9425, .944, .9454, .9469, .9483, .9497, .951, .9524, .9537, .955, .9562, .9574, .9586, .9599, .961, .9622, .9633, .9644, .9655, .9665, .9676, .9686, .9696, .9705, .9715, .9724, .9733, .9742, .975, .9758, .9766, .9774, .9782, .9789, .9796, .9804, .9811, .9817, .9824, .9831, .9837, .9843, .9849, .9855, .986, .9866, .9871, .9877, .9882, .9887, .9892, .9896 70.56%, .9905 71.67%, .9914 72.82%, .9922, .9929 75.2%, .9936 76.43%, .9942 77.71%, .9948 79.03%, .9954 80.39%, .9959 81.81%, .9963 83.28%, .9968 84.82%, .9972 86.41%, .9975 88.07%, .9979 89.81%, .9982 91.64%, .9984 93.56%, .9987 95.58%, .9989 97.72%, .9991)` |
| `--sharp-edge-top-shadow` | `0 1px 0 var(--border-sharp)` |
| ... | *(4 more)* |
