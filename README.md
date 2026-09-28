# Sebastian Lau · Portfolio

Portfolio of Sebastian Lau, AI/ML Software Engineer working across AWS, generative AI, computer vision, and data analytics.

**Live site:** [sebastianlau.is-a.dev](https://sebastianlau.is-a.dev)

## Live projects

Each project is its own repository, deployed to GitHub Pages and linked from the portfolio.

| Project | What it does | Demo | Code |
| --- | --- | --- | --- |
| Vision Lab | YOLO11n object detection on your webcam or any image, running in the browser with ONNX Runtime Web | [Open](https://sebastianlau1.github.io/vision-lab/) | [vision-lab](https://github.com/SebastianLau1/vision-lab) |
| Forecast Studio | Forecasts real NYC subway ridership, Wikipedia traffic, and Mauna Loa CO₂; three models compete on a chronological holdout | [Open](https://sebastianlau1.github.io/forecast-studio/) | [forecast-studio](https://github.com/SebastianLau1/forecast-studio) |
| .gov Website Scanner | Scans .gov sources for cancer research and builds a brief where every line cites its page | [Open](https://sebastianlau1.github.io/ai-web-research-summarizer/) | [ai-web-research-summarizer](https://github.com/SebastianLau1/ai-web-research-summarizer) |

## What's on the site

- **Real model output:** traffic footage processed with YOLO11n and ByteTrack (rendered with `scripts/render_yolo_demo.py`).
- **Live projects:** the three deployed demos above, right after the video; the hero button links straight to them.
- **Selected systems:** real-time object tracking, readiness forecasting, and legacy COBOL modernization work.
- **Readiness dashboard, vision stack, and skills:** an illustrative system view (demo data only) and the full technical stack.

## Stack

React 19 and the Next.js App Router on [vinext](https://github.com/cloudflare/vinext) (Vite), TypeScript, and Tailwind CSS 4, with motion handled by CSS and a small `IntersectionObserver` controller that respects `prefers-reduced-motion`.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
npm test   # builds the site and checks the server-rendered HTML
```
