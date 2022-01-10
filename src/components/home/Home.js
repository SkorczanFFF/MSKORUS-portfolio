import React, { Suspense } from "react";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { EffectComposer, DepthOfField, Bloom, Noise } from '@react-three/postprocessing';
import { OrbitControls, CameraShake, Html, useProgress, Stars } from '@react-three/drei';
import './Home.scss';
import ScbrollButton from "../ScrollButton";
import Box from "./Box";
import MS from "./indegredients/MS";

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
    return useFrame(() => camera.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.5, camera.position.z), 0.02));
}

function Home() { 
 
    return (
      <div className="container-home" id="home">
        <div className="three-renderer" >
          <Canvas colorManagement gl={{ antialias: true }}>
            <Suspense fallback={<Loader/>}>
              <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
              <ambientLight intensity={.5} />
                <EffectComposer>
                  <Noise opacity={0.05} />
                  {/*
                  <Bloom kernelSize={1} luminanceThreshold={3} luminanceSmoothing={0.4} intensity={1.6} />
                  <DepthOfField focusDistance={-1} focalLength={0.5} bokehScale={.5} height={1000} />
                <ScbrollButton position={[-1.2, 0, 0]} />
                  <Box position={[-1.2, 0, 0]} />
                */}
                <Box position={[1.2, 0, 0]} />
                  <MS />
                  <Stars
                    radius={100} // Radius of the inner sphere (default=100)
                    depth={400} // Depth of area where stars should fit (default=50)
                    count={1000} // Amount of stars (default=5000)
                    factor={5} // Size factor (default=4)
                    saturation={1} // Saturation 0-1 (default=0)
                    fade // Faded dots (default=false) 
                  />
                  <spotLight intensity={0.5} position={[400, 400, 500]} />
                </EffectComposer>
              <CameraShake yawFrequency={0.01} pitchFrequency={0.02} rollFrequency={0.01} />
              <Rig />
            </Suspense>
          </Canvas>
        </div>
      </div>
    )

}

export default Home;