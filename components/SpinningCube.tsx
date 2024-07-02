"use client";
import { motion } from "framer-motion";

export const SpinningCube = () => {
  const size = 200; // Размер куба
  const halfSize = size / 2;

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        perspective: 1000,
        margin: "50px auto",
      }}
    >
      <motion.div
        animate={{ rotateY: 360, rotateX: 360 }}
        style={{
          width: size,
          height: size,
          position: "absolute",
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        {/* Front face */}
        <div
          style={{
            width: size,
            height: size,
            backgroundColor: "rgba(255, 0, 0, 0.8)",
            position: "absolute",
            transform: `translateZ(${halfSize}px)`,
          }}
        />
        {/* Back face */}
        <div
          style={{
            width: size,
            height: size,
            backgroundColor: "rgba(0, 255, 0, 0.8)",
            position: "absolute",
            transform: `rotateY(180deg) translateZ(${halfSize}px)`,
          }}
        />
        {/* Left face */}
        <div
          style={{
            width: size,
            height: size,
            backgroundColor: "rgba(0, 0, 255, 0.8)",
            position: "absolute",
            transform: `rotateY(-90deg) translateZ(${halfSize}px)`,
          }}
        />
        {/* Right face */}
        <div
          style={{
            width: size,
            height: size,
            backgroundColor: "rgba(255, 255, 0, 0.8)",
            position: "absolute",
            transform: `rotateY(90deg) translateZ(${halfSize}px)`,
          }}
        />
        {/* Top face */}
        <div
          style={{
            width: size,
            height: size,
            backgroundColor: "rgba(0, 255, 255, 0.8)",
            position: "absolute",
            transform: `rotateX(90deg) translateZ(${halfSize}px)`,
          }}
        />
        {/* Bottom face */}
        <div
          style={{
            width: size,
            height: size,
            backgroundColor: "rgba(255, 0, 255, 0.8)",
            position: "absolute",
            transform: `rotateX(-90deg) translateZ(${halfSize}px)`,
          }}
        />
      </motion.div>
    </div>
  );
};
