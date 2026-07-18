document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('[data-search-input]');
  const searchTargets = Array.from(document.querySelectorAll('[data-search-item]'));

  if (!searchInput || !searchTargets.length) return;

  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase().trim();
    searchTargets.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? '' : 'none';
    });
  });
});
