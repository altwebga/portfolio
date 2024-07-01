"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Icosahedron } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

const IcosahedronComponent = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 0]}>
      <meshStandardMaterial color="orange" />
    </Icosahedron>
  );
};

export const RotatingIcosahedron = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <IcosahedronComponent />
      <OrbitControls />
    </Canvas>
  );
};
