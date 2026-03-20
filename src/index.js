import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

// 1. Initialize core effects
initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const sr = ScrollReveal({
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: false
});

// 2. Define Reveal Animations
sr.reveal('.hero-title', { delay: 500, origin: 'top' });
sr.reveal('.hero-cta', { delay: 1000, origin: 'bottom' });
sr.reveal('.section-title', { delay: 300, origin: 'left' });
sr.reveal('.about-wrapper__image', { delay: 400, origin: 'left' });
sr.reveal('.about-wrapper__info', { delay: 400, origin: 'right' });
sr.reveal('.project-wrapper__text', { delay: 400, origin: 'left' });
sr.reveal('.project-wrapper__image', { delay: 400, origin: 'right' });

// Contact section with low viewFactor to ensure it triggers
sr.reveal('.contact-wrapper', { 
  delay: 300, 
  origin: 'bottom',
  viewFactor: 0.01 
});

// 3. Fail-safe for Contact Section (Intersection Observer)
const contactSection = document.querySelector('.contact-wrapper');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.visibility = 'visible';
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    }
  });
}, { threshold: 0.1 });

if (contactSection) {
  observer.observe(contactSection);
}

// 4. Click to Enlarge Image Logic (using Bootstrap Modal)
document.addEventListener('click', function (e) {
  // Triggers if you click an image inside a project or about wrapper
  if (e.target.tagName === 'IMG' && (e.target.closest('.project-wrapper__image') || e.target.closest('.about-wrapper__image'))) {
    const modalImage = document.getElementById('modalImage');
    const imageModalElement = document.getElementById('imageModal');
    
    if (modalImage && imageModalElement) {
      modalImage.src = e.target.src;
      const myModal = new bootstrap.Modal(imageModalElement);
      myModal.show();
    }
  }
});

// 5. Sync ScrollReveal after assets load
window.addEventListener('load', () => {
  // Small timeout to ensure dynamic content (videos/carousels) is rendered
  setTimeout(() => {
    sr.sync();
  }, 100);
});