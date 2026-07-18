document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('storiesCarousel');
  if (carousel) {
    new bootstrap.Carousel(carousel, { interval: 5000, ride: 'carousel' });
  }
});
