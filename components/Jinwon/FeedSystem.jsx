"use client";

import { useEffect } from "react";

// Controls whether the selected feed option is dry food, wet food, or water.

export default function FeedSystem({ onSelect }) {
  useEffect(() => {
    function onDocumentClick(event) {
      const clickedElement = event.target;
      if (clickedElement.tagName === "IMG") {
        const imageSource = clickedElement.getAttribute("src") || "";
        if (imageSource.includes("/dryfood.svg")) {
          if (onSelect) onSelect("dry");
        } else if (imageSource.includes("/wetfood.svg")) {
          if (onSelect) onSelect("wet");
        } else if (imageSource.includes("/water.svg")) {
          if (onSelect) onSelect("water");
        }
      }
    }
    document.addEventListener("click", onDocumentClick);
    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, [onSelect]);
  return null;
}
