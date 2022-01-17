import React, { Suspense, forwardRef } from "react";
import { Canvas, useFrame, useThree} from '@react-three/fiber';
import * as THREE from 'three';
import { EffectComposer, DepthOfField, Bloom, Noise, GodRays } from '@react-three/postprocessing';
import { OrbitControls, CameraShake, Stars, Environment, Html, useProgress, Cloud } from '@react-three/drei';
import { BlendFunction, Resizer, KernelSize }  from 'postprocessing';
import './Home.scss';
//import Loader from './indegredients/Loader';
import Box from "./Box";
import MS from "./indegredients/MS";
import Planet from "./indegredients/Planet";
//import msFull from '../../assets/models/full.gltf';

const orangeColor = 0x8a2d1f;

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
    return useFrame(() => camera.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.5, camera.position.z), 0.02));
}

function Loader() {
  const { progress } = useProgress()
  return <Html center >{progress} % loaded</Html>
}

const Sphere = forwardRef(function Sphere(props, forwardRef) {
  useFrame(({ clock }) => {});
  return (    
    <mesh ref={forwardRef} position={[1, 0, -15]} castShadow >      
      <sphereGeometry attach="geometry" args={[8, 26, 26]} />      
      <meshStandardMaterial attach="material" color={orangeColor} transparent roughness={.7} metalness={0.5} />
    </mesh>  
  );
});

export default function Home() { 
    return (
      <>
      <div className="container-home" id="home">
        <div className="three-renderer" >
          <Canvas colorManagement gl={{ antialias: true }}>
            <Suspense fallback={<Loader/>}>
              <OrbitControls enableZoom={true} enablePan={true} enableRotate={false} />
              <ambientLight intensity={1} />
                <EffectComposer>

                  <Noise opacity={.05} />
                  {/*
                  <Bloom kernelSize={1} luminanceThreshold={3} luminanceSmoothing={0.4} intensity={1.6} />
                  
                  <ScbrollButton position={[-1.2, 0, 0]} />
              */}
              <Cloud position={[0,0,-30]}
  opacity={.2}
  speed={0.2} // Rotation speed
  width={40} // Width of the full cloud
  depth={1.5} // Z-dir depth
  segments={50} // Number of particles
  color={orangeColor}
/>
              <Planet />
              <MS />
    
              <Environment preset="city" />
                  <Stars
                    radius={50} // Radius of the inner sphere (default=100)
                    depth={300} // Depth of area where stars should fit (default=50)
                    count={1000} // Amount of stars (default=5000)
                    factor={5} // Size factor (default=4)
                    saturation={.1} // Saturation 0-1 (default=0)
                    fade // Faded dots (default=false)
                  />
                  <spotLight intensity={.5} position={[600, -700, 700]} />
                  <spotLight intensity={.5} position={[-600, 700, -700]} />
                </EffectComposer>
              <CameraShake yawFrequency={0.02} pitchFrequency={0.03} rollFrequency={0.02} />
              <Rig />
            </Suspense>
          </Canvas>
        </div>
      </div>
      </>
    )
}