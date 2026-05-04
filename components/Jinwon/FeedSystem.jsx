"use client";

import { useEffect } from "react";

// Controls whether the selected feed option is dry food, wet food, or water.

export default function FeedSystem({ onSelect }) {
  function selectFeed(type) {
    if (onSelect) {
      onSelect(type);
    }
  }

  useEffect(() => {
    function onDocumentClick(event) {
      const clickedElement = event.target;
      if (clickedElement.tagName === "IMG") {
        const imageSource = clickedElement.getAttribute("src") || "";

        if (imageSource.includes("/dryfood.svg")) {
          selectFeed("dry");
        } else if (imageSource.includes("/wetfood.svg")) {
          selectFeed("wet");
        } else if (imageSource.includes("/water.svg")) {
          selectFeed("water");
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
