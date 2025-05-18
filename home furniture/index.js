document.addEventListener("DOMContentLoaded", () => {
  // Select all carousel sections
  const carousels = document.querySelectorAll(".custom-carousel");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-slide");
    let currentIndex = 0;

    if (!track || slides.length === 0) return;

    // Position all slides in a row
    slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });

    const moveToSlide = (index) => {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;
      track.style.transform = `translateX(-${index * 200}%)`;
    };

    const prevBtn = carousel.querySelector(".carousel-btn.prev");
    const nextBtn = carousel.querySelector(".carousel-btn.next");

    prevBtn.addEventListener("click", () => moveToSlide(currentIndex - 1));
    nextBtn.addEventListener("click", () => moveToSlide(currentIndex + 1));
  });
});
