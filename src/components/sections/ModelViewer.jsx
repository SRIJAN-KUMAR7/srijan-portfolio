import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/models/space_station.glb"); 
  return <primitive object={gltf.scene} scale={0.5} />;
};

export const ModelViewer = () => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <Canvas camera={{ position: [2, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={true} autoRotate />
      </Canvas>
    </div>
  );
};
