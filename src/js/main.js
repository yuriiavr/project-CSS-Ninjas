{
  ('use strict');

  let mobileMenuLoaded = false;

  const tryInitMobileMenu = mobileMenuLoaded => {
    if (!mobileMenuLoaded && window.innerWidth <= 1280) {
      import('./mobile-menu');
      mobileMenuLoaded = true;
    }
  };

  window.addEventListener('resize', () => {
    tryInitMobileMenu(mobileMenuLoaded);
  });

  tryInitMobileMenu();
}

{
  ('use strict');

  const isIntersectionObserverSupported = 'IntersectionObserver' in window;

  if (isIntersectionObserverSupported) {
    const observerOptions = {
      rootMargin: '100px 0px 0px 0px', // load slider if user bottom border of screen 100px above slider
    };

    const initSlider = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          import('./slider');
        }
      });
    };

    const observer = new IntersectionObserver(initSlider, observerOptions);
    observer.observe(document.querySelector('.keen-slider'));
  } else {
    import('./slider');
  }
}
