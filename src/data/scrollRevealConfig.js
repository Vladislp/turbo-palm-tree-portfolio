export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

const getOrigin = () => (typeof window !== "undefined" && window.innerWidth > 768) ? "left" : "bottom";

const createAnimation = (element, delay = 0, distance = "0px", origin = getOrigin()) => ({
  element,
  animation: { delay, distance, origin },
});

export const targetElements = [
  createAnimation(".section-title", 300, "0px", "bottom"),
  createAnimation(".hero-title", 500, undefined, getOrigin()),
  createAnimation(".hero-cta", 1000, undefined, getOrigin()),
  createAnimation(".about-wrapper__image", 600, "0px", "bottom"),
  createAnimation(".about-wrapper__info", 1000, undefined, getOrigin()),
  createAnimation(".project-wrapper__text", 500, undefined, getOrigin()),
  createAnimation(".project-wrapper__image", 1000, undefined, getOrigin()),
  createAnimation(".contact-wrapper", 800, "0px", "bottom"),
];
