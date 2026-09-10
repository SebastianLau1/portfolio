"use client";

import { useLayoutEffect } from "react";

export default function MotionController() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const previousScrollRestoration = window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", `${height > 0 ? window.scrollY / height : 0}`);
    };

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
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer.disconnect();
      window.history.scrollRestoration = previousScrollRestoration;
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <div className="scrollProgress" aria-hidden="true" />;
}
