// Register ScrollTrigger Plugin
// gsap.registerPlugin(ScrollTrigger);
// Basic GSAP animation to ensure GSAP is working
gsap.from('h1', { duration: 2, opacity: 0, y: -50 });

// Timeline for animations
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".steps", // Trigger animation when .steps section enters the viewport
    start: "top 75%",  // Animation starts when the top of the .steps section is 75% down the viewport
    toggleActions: "play none none none" // Play animation on scroll
  }
});

// Animate each .step box in sequence
timeline.from('.step', {
  opacity: 0,      // Start with invisible
  y: 100,          // Start off-screen (Y-axis)
  duration: 1,     // Duration of each animation (1 second)
  stagger: 0.3     // Delay between each .step animation (stagger)
});
