"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";
import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export const SparklesCore = ({
  id = 'sparkles-core',
  className,
  background = 'transparent',
  minSize = 0.5,
  maxSize = 1.5,
  particleDensity = 33,
  particleColor = '#22c55e',
}: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-50 pointer-events-none",
          className
        )}
      >
        <Particles
          id={id}
          className={className}
          options={{
            background: {
              color: {
                value: background,
              },
            },
            fullScreen: {
              enable: false,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: {
                  enable: true,
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: particleColor,
              },
              links: {
                color: particleColor,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: particleDensity,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { 
                  min: minSize, 
                  max: maxSize 
                },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    );
  }

  return null;
}; 