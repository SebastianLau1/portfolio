# Sebastian Lau · Portfolio

[Live portfolio](https://sebastianlau.is-a.dev) · [GitHub](https://github.com/SebastianLau1)

AI/ML software engineering portfolio built with React, TypeScript, Vinext, and Cloudflare Workers. The site includes three deployed personal projects with separate source repositories:

| App | Demo | Source |
| --- | --- | --- |
| Research Desk | [Launch](https://sebastianlau1.github.io/ai-web-research-summarizer/) | [Repository](https://github.com/SebastianLau1/ai-web-research-summarizer) |
| Vision Lab | [Launch](https://sebastianlau1.github.io/vision-lab/) | [Repository](https://github.com/SebastianLau1/vision-lab) |
| Forecast Studio | [Launch](https://sebastianlau1.github.io/forecast-studio/) | [Repository](https://github.com/SebastianLau1/forecast-studio) |

## Development

Node.js 22.13+ is required.

```sh
npm ci
npm run dev
npm test
npm run lint
```

The portfolio contains links and project summaries only. Each app is built, versioned, and deployed independently from its own repository.

## Hosting

The `sites` Git remote and `.openai/hosting.json` identify the existing public Sites deployment. The GitHub `origin` is a source mirror. A GitHub push alone does not publish the Sites deployment. Deployment requires a verified Worker build, an exact source commit pushed to Sites, and a saved/published version.

Professional-experience descriptions are separate from the personal demos. Demonstrations do not expose employer source code or operational datasets.
