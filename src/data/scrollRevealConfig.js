export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

const getOrigin = () => {
  if (typeof window !== "undefined" && window.innerWidth > 768) {
    return "left";
  } else {
    return "bottom";
  }
};

export const targetElements = [
  {
    element: ".section-title",
    animation: {
      delay: 300,
      distance: "0px",
      origin: "bottom",
    },
  },
  {
    element: ".hero-title",
    animation: {
      delay: 500,
      origin: getOrigin(),
    },
  },
  {
    element: ".hero-cta",
    animation: {
      delay: 1000,
      origin: getOrigin(),
    },
  },
  {
    element: ".about-wrapper__image",
    animation: {
      delay: 600,
      origin: "bottom",
    },
  },
  {
    element: ".about-wrapper__info",
    animation: {
      delay: 1000,
      origin: getOrigin(),
    },
  },
  {
    element: ".project-wrapper__text",
    animation: {
      delay: 500,
      origin: getOrigin(),
    },
  },
  {
    element: ".project-wrapper__image",
    animation: {
      delay: 1000,
      origin: getOrigin(),
    },
  },
  {
    element: ".contact-wrapper",
    animation: {
      delay: 800,
      origin: "bottom",
    },
  },
];
