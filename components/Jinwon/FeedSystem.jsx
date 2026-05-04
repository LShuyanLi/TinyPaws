"use client";

import { useEffect } from "react";

// Controls whether the selected feed option is dry food, wet food, or water.

export default function FeedSystem({ onSelect }) {
  useEffect(() => {
    function onDocumentClick(event) {
      const target = event.target;
      if (!(target instanceof HTMLImageElement)) return;

      const src = target.getAttribute("src") || "";

      if (src.includes("/dryfood.svg")) {
        if (onSelect) onSelect("dry");
      }

      if (src.includes("/wetfood.svg")) {
        if (onSelect) onSelect("wet");
      }

      if (src.includes("/water.svg")) {
        if (onSelect) onSelect("water");
      }
    }

    document.addEventListener("click", onDocumentClick);

    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, [onSelect]);

  return null;
}