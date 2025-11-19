document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.carousel-wrapper');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const slideCount = slides.length;
  let currentIndex = 0;
  let autoplayInterval;

  function updateCarousel() {
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateCarousel();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 3000); // Change image every 3 seconds
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Event listeners for manual control
  nextBtn.addEventListener('click', () => {
    stopAutoplay();
    nextSlide();
  });

  prevBtn.addEventListener('click', () => {
    stopAutoplay();
    prevSlide();
  });

  // Start autoplay on page load
  startAutoplay();

  // Stop autoplay on hover
  wrapper.addEventListener('mouseenter', stopAutoplay);
  wrapper.addEventListener('mouseleave', startAutoplay);
});
