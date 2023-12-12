import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import '../styles/myThreeJsComponent.css';
const MyThreeJSComponent = () => {
  let scene, camera, renderer, controls;
  const sceneWidth = 500;
const sceneHeight = 500;

  useEffect(() => {
    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(100, sceneWidth  / sceneHeight, 1, 5000);
      renderer = new THREE.WebGLRenderer({ antialias: true });
      controls = new OrbitControls(camera, renderer.domElement);

      renderer.setSize(sceneWidth, sceneHeight);
      document.getElementById('three-container').appendChild(renderer.domElement);

      const loader = new GLTFLoader();
      loader.load('/images/model/scene.gltf', (gltf) => {
        const car = gltf.scene.children[0];
        car.scale.set(2, 2, 2);
        scene.add(gltf.scene);
        animate();
      });

      camera.position.set(-800, -100, -1000);

      const hlight = new THREE.AmbientLight(0x404040, 100);
      scene.add(hlight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
      directionalLight.position.set(0, 1, 0);
      directionalLight.castShadow = true;
      scene.add(directionalLight);
    };

    init();

    return () => {
      scene = null;
      camera = null;
      controls.dispose();
    };
  }, []);

  const animate = () => {
    requestAnimationFrame(animate);

    if (renderer) {
      controls.update();
      renderer.render(scene, camera);
    }
  };

  return <div id="three-container" />;
};

export default MyThreeJSComponent;
