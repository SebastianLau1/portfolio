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
  assert.match(html, /<title>sebastianlau portfolio<\/title>/i);
  assert.match(html, /AI systems for/);
  assert.match(html, /Real model output/);
  assert.match(html, /YOLO11n \+ BYTE TRACK/);
  assert.match(html, /traffic-yolo-demo\.mp4/);
  assert.match(html, /Pause footage/);
  assert.match(html, /Real YOLO\. Real tracks\./);
  assert.match(html, />sebastianlau<\/a>/);
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
  assert.match(controller, /--scroll-progress/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(renderer, /YOLO\("yolo11n\.pt"\)/);
  assert.match(renderer, /bytetrack\.yaml/);
});
