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
