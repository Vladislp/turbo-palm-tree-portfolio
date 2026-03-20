import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const sr = ScrollReveal({
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: false
});

sr.reveal('.hero-title', { delay: 500, origin: 'top' });
sr.reveal('.hero-cta', { delay: 1000, origin: 'bottom' });
sr.reveal('.section-title', { delay: 300, origin: 'left' });
sr.reveal('.about-wrapper__image', { delay: 400, origin: 'left' });
sr.reveal('.about-wrapper__info', { delay: 400, origin: 'right' });
sr.reveal('.project-wrapper__text', { delay: 400, origin: 'left' });
sr.reveal('.project-wrapper__image', { delay: 400, origin: 'right' });

sr.reveal('.contact-wrapper', { 
  delay: 300, 
  origin: 'bottom',
  viewFactor: 0.1
});

window.addEventListener('load', () => {
  sr.sync();
});