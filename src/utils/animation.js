// Framer Motion animation variants used across the app.
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = (direction = "up", stiffness = 200) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 18 : 0,
    x: direction === "left" ? 18 : direction === "right" ? -18 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness, damping: 22 },
  },
});

const animations = {
  staggerContainer,
  fadeInUp,
  fadeIn,
};

export default animations;
