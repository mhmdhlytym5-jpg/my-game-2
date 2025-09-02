document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('menu');

  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.classList.toggle('hidden');
  });

  // اختياري: اغلاق عند النقر خارج القائمة
  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('hidden')) {
      const isClickInside = mobileMenu.contains(e.target) || toggle.contains(e.target);
      if (!isClickInside) {
        mobileMenu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // اختياري: اغلاق عند Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});