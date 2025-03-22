import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
import { sliderAutoplayPlugin } from './slider-autoplay-plugin';

new KeenSlider(
  '.keen-slider',
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
