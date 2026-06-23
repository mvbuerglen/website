document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll<HTMLDivElement>(".carousel").forEach((container) => {
    // Parse auto-rotation interval:
    const interval = Number.parseInt(container.dataset.interval ?? "5", 10) * 1000;
    // Store currently visible carousel item:
    let current = 0;
    // Flag to pause carousel auto-rotation:
    let pause = false;

    /**
     * Scrolls carousel by 0-based index.
     * Index can overflow and will loop over.
     */
    function scrollTo(index: number) {
      const items = container.querySelector<HTMLUListElement>(".items");
      if (!items) {
        return;
      }
      const count = items.childElementCount;
      current = index % count;
      const width = items.scrollWidth;
      const one = width / count;
      items.scroll({
        left: index * one,
        behavior: "smooth",
      });
    }

    // Trigger scrolling of the first element to update controls:
    scrollTo(current);

    // Setup auto-rotation:
    const timer = setInterval(() => {
      if (!pause) {
        scrollTo(current + 1);
      }
    }, interval);

    // Pause auto-rotation when user moves mouse inside carousel:
    container.addEventListener("mouseenter", () => {
      pause = true;
    });
    container.addEventListener("mouseleave", () => {
      pause = false;
    });

    // Stop auto-rotation when user manually scrolls:
    const stopTimer = () => {
      clearInterval(timer);
    };
    container.addEventListener("wheel", stopTimer);
    container.addEventListener("touchmove", stopTimer);
    // mousedown is touch workaround for Safari:
    container.addEventListener("mousedown", stopTimer);
  });
});
