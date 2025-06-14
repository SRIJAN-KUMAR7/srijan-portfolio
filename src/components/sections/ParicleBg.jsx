import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // Make sure this is from tsparticles, not tsparticles-engine

export const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Load the full bundle of features
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000000" },
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
};
