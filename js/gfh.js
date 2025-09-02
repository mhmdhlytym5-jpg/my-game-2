document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!toggle || !mobileMenu) {
      console.warn('menuBtn أو mobileMenu غير موجودين في DOM');
      return;
    }

    // تبديل الظهور
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('hidden');
    });

    // إغلاق عند النقر خارج
    document.addEventListener('click', (e) => {
      if (!mobileMenu.classList.contains('hidden')) {
        const clickInside = mobileMenu.contains(e.target) || toggle.contains(e.target);
        if (!clickInside) {
          mobileMenu.classList.add('hidden');
          toggle.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // إغلاق عند Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Force pointer-events on the button (debug safety)
    toggle.style.pointerEvents = 'auto';
  });
