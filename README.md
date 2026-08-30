# SatQuery AI — Remote-Sensing Intelligence

> **Agentic remote-sensing assistant ("ChatGPT for satellite imagery").** Ask natural-language questions over Earth observation data, analyze multi-temporal changes, fuse optical with SAR radar backscatter, and inspect evidence-grounded spatial reports.

---

## 🛰️ Overview

Earth observation data is among humanity's most valuable assets, but extracting actionable insights has traditionally required specialized GIS desktop software, manual coordinate reference system (CRS) projections, and custom scripting.

**SatQuery AI** transforms complex remote-sensing workflows into a fluid, conversational interface. The platform coordinates specialist Earth observation foundation models to provide deterministic, visually verifiable answers with sub-pixel alignment, metric quantification, and calibrated confidence intervals.

---

## ⚡ Core Product Experiences

### 1. Marketing & Research Platform (`/`, `/features`, `/models`, `/about`, `/contact`)
- **Editorial Monochrome Design**: Inspired by Swiss-style interface systems and high-end developer software. Built with zero generic AI tropes (no purple/cyan neon glows or sci-fi clichés).
- **Smooth Scrolling**: Integrated with Lenis smooth scroll for seamless editorial reading.
- **Interactive Showcases**:
  - **Temporal Change Detection**: Interactive before/after split slider with segmented difference masks and 12.4 ha area quantification.
  - **Optical + SAR Multimodal Fusion**: Side-by-side comparison demonstrating all-weather cloud penetration and calibrated radar backscatter (-22.4 dB specular water threshold).
  - **"How SatQuery Thinks" Pipeline**: 8-stage observable agent workflow explaining query parsing, CRS normalization, specialist dispatch, and uncertainty calibration.

### 2. SatQuery Application Workspace (`/app`, `/app/chat/[id]`)
- **ChatGPT-like Ergonomics**: 280px collapsible sidebar with grouped chat history (*Today*, *Yesterday*, *Previous 7 Days*, *Older*), rename, and delete actions.
- **Rich Multi-Block Responses**:
  - Technical natural-language explanations
  - Grounded bounding box reticles and raster overlays
  - Interactive Before/After comparison slider
  - Multimodal radar backscatter layer switcher
  - **"How was this analyzed?"**: Expandable execution trace detailing exact pipeline stages, models invoked, and durations.
  - **Confidence Badge**: Calibrated metric scoring (e.g. `87% High Tier`).
- **Multi-Image & Sensor Upload**: Drag & drop support for GeoTIFF, TIFF, PNG, and JPEG with sensor tagging (`Sentinel-2`, `Sentinel-1 SAR`, `Landsat-8/9`).
- **Temporary Chat Mode**: One-click toggle for isolated, ephemeral sessions that are excluded from saved history.
- **Share Modal**: Read-only conversation sharing dialog with link copying.

---

## 🧠 Foundation Model Stack

| Model | Category | Primary Application |
|---|---|---|
| **GeoChat** | Vision-Language Grounding | Zero-shot remote-sensing VQA, feature identification, and pixel bounding reticles. |
| **Prithvi-EO** | Multispectral Foundation | 13-band spectral representation learning across Landsat/Sentinel pipelines (NDVI, NDRE, EVI). |
| **TerraMind** | Cross-Modal Fusion | Joint embedding for active Sentinel-1 C-Band SAR and optical baselines for all-weather penetration. |
| **Change Detection Model** | Bi-Temporal Spatial Diff | Sub-pixel coregistered differential analysis separating permanent structures from seasonal crop phenology. |

---

## 📡 Supported Sensors

- **Sentinel-2 MSI** — 13 Spectral bands (10m / 20m / 60m GSD)
- **Sentinel-1 SAR** — C-Band Synthetic Aperture Radar (IW Mode, VV/VH Polarization)
- **Landsat-8/9 OLI/TIRS** — 11 Multispectral & Thermal bands (15m / 30m / 100m GSD)
- **PlanetScope** — 8-Band Daily High-Resolution Orthos (3m GSD)
- **Custom GeoTIFF** — User-ingested drone orthophotos, aerial rasters, and DEM files

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom monochrome design tokens
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

---

## 📁 Repository Structure

```
satquery_ai/
├── app/
│   ├── layout.tsx              # Root HTML shell with providers and metadata
│   ├── page.tsx                # Editorial Landing Page
│   ├── features/page.tsx       # System Specifications & Sensor Matrix
│   ├── models/page.tsx         # Foundation Model Stack Architecture
│   ├── about/page.tsx          # Project Overview & Mission
│   ├── contact/page.tsx        # Inquiry Dispatch Form
│   ├── app/
│   │   ├── layout.tsx          # Workspace Shell (Sidebar + TopBar)
│   │   ├── page.tsx            # Active / New Chat Workspace
│   │   └── chat/[id]/page.tsx  # Dynamic Conversation View
│   └── globals.css             # Design Tokens & Geospatial Coordinate Grids
├── components/
│   ├── chat/                   # Core application components (Composer, MessageList, etc.)
│   ├── marketing/              # Landing page sections (Hero, Showcase, Workflow, etc.)
│   └── providers/              # ChatContext and SmoothScroll providers
├── lib/
│   ├── mock-data.ts            # Realistic Earth observation scenarios & models
│   ├── satellite-assets.ts     # Raster & vector remote-sensing visuals
│   ├── types.ts                # TypeScript interfaces
│   └── utils.ts                # Formatting & utility helpers
├── public/                     # Static assets
├── tailwind.config.ts          # Monochrome palette configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18.0.0 or higher
- `npm` or `pnpm` or `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/shivammane2007/satquery_ai.git

# Navigate to project directory
cd satquery_ai

# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Compile optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 📄 License

This project is licensed under the MIT License.
