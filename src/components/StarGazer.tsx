import Particles from 'react-particles-js';
import React from 'react';

export const StarGazer = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 300,
          density: {
            enable: true,
            value_area: 1700,
          },
        },
        line_linked: {
          enable: true,
          opacity: 0.02,
        },
        move: {
          direction: 'center',
          speed: 0.05,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.05,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          push: {
            particles_nb: 1,
          },
        },
      },
      retina_detect: true,
    }}
  />
);
