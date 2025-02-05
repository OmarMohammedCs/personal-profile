"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const VantaComponent: React.FC = () => {
  const myRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<ReturnType<typeof NET> | null>(null);

  useEffect(() => {
    if (!vantaEffect.current && myRef.current) {
      vantaEffect.current = NET({
        el: myRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x9333ea,
        backgroundColor: 0x93c5fd,
        points: 10,
        maxDistance: 15.0,
        spacing: 18.0,
        speed: 2.0,
      });

      const handleResize = () => {
        vantaEffect.current?.resize?.();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        vantaEffect.current?.destroy?.();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <div ref={myRef} className="w-full h-screen transition-all duration-500" />;
};

export default VantaComponent;
