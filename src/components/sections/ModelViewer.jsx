import React, { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
const Model = React.memo(() => {
  const gltf = useGLTF("/models/space_station_compressed.glb");
  return <primitive object={gltf.scene} scale={0.5} />;
});

useGLTF.preload("/models/space_station_compressed.glb");

export const ModelViewer = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileCheck = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);
    const timeout = setTimeout(() => {
      setShouldRender(true);
    }, 100); 

    return () => clearTimeout(timeout);
  }, []);

  if (!shouldRender || isMobile) return null; 
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
