import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import VANTA from 'vanta/dist/vanta.clouds.min';

const Animation = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) {
      VANTA.CLOUDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        backgroundColor: 0x0,
        skyColor: 0x0,
        cloudColor: 0x9b9b9b,
        cloudShadowColor: 0x41522,
        sunColor: 0xffffff,
        sunGlareColor: 0x787878,
        sunlightColor: 0x89837d,
        speed: 1.10
      });
    }
    return () => {
      if (vantaRef.current) {
        VANTA.CLOUDS.destroy();
      }
    };
  }, [vantaRef]);

  return (
    <div ref={vantaRef}>
      {/* Your content goes here */}
    </div>
  );
};

export default Animation;