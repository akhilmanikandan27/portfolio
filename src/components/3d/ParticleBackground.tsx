"use client";

import React, { useRef, useMemo, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error - No types available for this specific path
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "next-themes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StarBackground = memo(function StarBackground(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  
  // Create a sphere of random points once, preventing regeneration on re-renders
  const sphere = useMemo(() => {
    return random.inSphere(new Float32Array(5001), { radius: 1.5 });
  }, []);

  // Rotate the starfield extremely slowly to create a calm, almost-stationary drift
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.03;
      ref.current.rotation.y -= delta * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={props.color}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

StarBackground.displayName = "StarBackground";

export const ParticleBackground = memo(function ParticleBackground() {
  const { theme } = useTheme();
  // Use a bright cyan/blue for dark mode and a subtle dark blue for light mode
  const particleColor = theme === "light" ? "#3b82f6" : "#00f0ff";

  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground color={particleColor} />
      </Canvas>
    </div>
  );
});

ParticleBackground.displayName = "ParticleBackground";

