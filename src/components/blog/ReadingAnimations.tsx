"use client";

import { useEffect } from "react";

export default function ReadingAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -80px 0px", // Trigger slightly before element enters view
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Once animated, we can unobserve if we want it to stay permanent
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null; // Side-effect only component
}
