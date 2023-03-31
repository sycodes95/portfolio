import React, { useRef, useEffect } from "react";
import * as THREE from "three";


const SmokeEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );

    // Add a point light to the scene
    const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Set up the smoke effect
    const smokeMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      transparent: true,
    });

    const smokeGeo = new THREE.PlaneBufferGeometry(300, 300);
    const smokeParticles = [];

    for (let i = 0; i < 150; i++) {
      const smokeParticle = new THREE.Mesh(smokeGeo, smokeMaterial);
      smokeParticle.position.set(
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100
      );
      smokeParticle.rotation.z = Math.random() * 360;
      smokeParticles.push(smokeParticle);
      scene.add(smokeParticle);
    }

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      smokeParticles.forEach((smokeParticle) => {
        smokeParticle.rotation.z += 0.01;
      });
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} style={{width:'100%', height:'100%'}} />;
};

export default SmokeEffect;