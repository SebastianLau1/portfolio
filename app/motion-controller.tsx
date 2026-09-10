"use client";

import { useLayoutEffect } from "react";

export default function MotionController() {
  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return null;
}
