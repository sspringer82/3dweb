import * as THREE from 'three';

export function createWebGLRenderer(window: Window): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff);
  renderer.useLegacyLights = false;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  return renderer;
}
