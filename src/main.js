// Mobile menu

// toggles mobile menu open/close
document.querySelector('.burger-menu').addEventListener('click', function () {
  document
    .querySelector('.mobile-header-nav-sidebar-overlay')
    .classList.toggle('is-open');
  document.querySelector('.burger-menu').classList.toggle('is-active');
});

//hides mobile menu on window resize if it is open
window.addEventListener('resize', function () {
  if (window.innerWidth >= 1280) {
    document
      .querySelector('.mobile-header-nav-sidebar-overlay')
      .classList.remove('is-open');
    document.querySelector('.burger-menu').classList.remove('is-active');
  }
});

// makes clicked nav link active
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".header-nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      // Remove active class from all links
      navLinks.forEach(nav => nav.classList.remove("header-nav-link-active"));

      // Add active class to the clicked link
      this.classList.add("header-nav-link-active");
    });
  });

  // Remove active class when scrolling to the top
  window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
      navLinks.forEach(link => link.classList.remove("header-nav-link-active"));
    }
  });
});

// Slider
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';

const sliderElement = document.querySelector('.keen-slider');

const sliderAutoplayPlugin = ms => slider => {
  let timeout;
  let mouseOver = false;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, ms);
  }
  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on('dragStarted', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
};

new KeenSlider(
  sliderElement,
  {
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 32,
        },
      },
      '(min-width: 1280px)': {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
    },
  },
  [sliderAutoplayPlugin(2800)]
);