"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { CanvasLoader } from "../Loader";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Model } from "../Scene";

const ComputerCanvas = () => {
  // const computer = useLoader(GLTFLoader, "./desktop_pc/scene.gltf");
  // const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <Suspense fallback={<CanvasLoader />}> */}
      <Suspense>
        {/* <Suspense fallback={"Loading!!!"}> */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
