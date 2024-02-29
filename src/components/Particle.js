import React from "react";
import Particles from "react-tsparticles";
 
function MovableStarParticles() {
  const particleParams = {
    particles: {
      number: {
        value: 40, // Adjust the number of particles as desired
        density: {
          enable: true,
          value_area: 800, // Control particle density within the viewport
        },
      },
      shape: {
        type: "star", // Set the particle shape to star
        stroke: {
          width: 0, // Remove the outline for a cleaner look
        },
        polygon: {
          nb_sides: 5, // Customize the number of star points
        },
      },
      color: {
        value: "cd5ff8", // Set the particle color to white
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false, // Create a twinkling effect
        },
      },
      size: {
        value: 3,
        random: true, // Introduce size variation for visual interest
      },
      line_linked: {
        enable: true,
        distance: 150, // Adjust the distance between linked stars
        color: "cd5ff8", // Set the trail color
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none", // Allow particles to move in random directions
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab", // Allow particles to be grabbed and moved
        },
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
      },
    },
    retina_detect: true,
  };
 
  return <Particles id="tsparticles" params={particleParams} />;
}
 
export default MovableStarParticles;