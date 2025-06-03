document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".projects-scroll");

  if (scrollContainer) {
    scrollContainer.addEventListener("wheel", (e) => {
      const canScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
      if (canScroll && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  }
});
