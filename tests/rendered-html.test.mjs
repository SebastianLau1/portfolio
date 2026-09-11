import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the portfolio and YOLO demo", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Sebastian Lau \| AI\/ML Software Engineer<\/title>/i);
  assert.match(html, /Systems that see, reason, and ship/);
  assert.match(html, /Sebastian Lau/);
  assert.match(html, /AI\/ML Software Engineer/);
  assert.match(html, /AWS.*Generative AI.*Computer Vision.*Data Analytics/i);
  assert.match(html, /Real model output/);
  assert.match(html, /YOLO11n \+ BYTE TRACK/);
  assert.match(html, /traffic-yolo-demo\.mp4/);
  assert.match(html, /Pause footage/);
  assert.doesNotMatch(html, /Real YOLO\. Real tracks\./);
  assert.doesNotMatch(html, /View selected work|href="#work"|href="#about"/i);
  assert.doesNotMatch(html, /<nav|Let&#x27;s talk|>sebastianlau<\/a>/i);
  for (const skill of [
    "JavaScript/TypeScript", "scikit-learn", "Time-series forecasting", "AWS Bedrock",
    "SAMURAI", "Flask", "Next.js", "Postman", "AWS SageMaker", "Cloudflare",
  ]) {
    assert.match(html, new RegExp(skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }
  assert.doesNotMatch(html, /Honolulu|Hawaii|\u2014/);
});

test("keeps motion interactive and accessible", async () => {
  const [simulator, controller, css, renderer] = await Promise.all([
    readFile(new URL("../app/vision-simulator.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/motion-controller.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../scripts/render_yolo_demo.py", import.meta.url), "utf8"),
  ]);

  assert.match(simulator, /playsInline/);
  assert.match(simulator, /aria-pressed/);
  assert.match(simulator, /onTimeUpdate/);
  assert.match(controller, /IntersectionObserver/);
  assert.doesNotMatch(controller, /scrollProgress|--scroll-progress|updateProgress/);
  assert.doesNotMatch(css, /\.scrollProgress|--scroll-progress/);
  assert.match(controller, /scrollRestoration = "manual"/);
  assert.match(controller, /window\.scrollTo/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(renderer, /YOLO\("yolo11n\.pt"\)/);
  assert.match(renderer, /bytetrack\.yaml/);
});
