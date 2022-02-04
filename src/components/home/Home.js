import React, { Suspense, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useInView } from 'react-intersection-observer'
import * as THREE from 'three'
import { EffectComposer } from '@react-three/postprocessing'
import { OrbitControls, CameraShake, Stars, Environment, Html, useProgress } from '@react-three/drei'
import DesktopBackground from './indegredients/DesktopBackground'
import DesktopScene from './indegredients/DesktopScene'
import MobileBackground from './indegredients/MobileBackground'
import MobileScene from './indegredients/MobileScene'
import ScrollButton from '../atoms/ScrollButton/ScrollButton'
import './Home.scss'

const DisableRender = () => useFrame(() => null, 1000)
function ViewportWidth() {
  const [viewportSize, setViewportSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => setViewportSize([ window.innerWidth]);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return viewportSize;
}
function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
    return useFrame(() => camera.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.5, camera.position.z), 0.02));
}
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <b style={{ color: "#801834", fontSize: "3em", margin: "auto", borderBottom: "2em" }}>{Math.round(progress)}%</b>
    </Html>
  )
}
export default function Home() { 
  const [width] = ViewportWidth();
  const { ref, inView } = useInView();
    return (
      <>
        <section className="container-home" id="home">
          <div ref={ref} className="three-renderer" >
            <Canvas colorManagement gl={{antialias: false}}>
            {!inView && <DisableRender />}
              <Suspense fallback={<Loader/>}>
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
                <CameraShake yawFrequency={.01} pitchFrequency={.03} rollFrequency={.02} />
                <Rig />
                <spotLight intensity={.5} position={[600, -700, 700]} />
                <spotLight intensity={.5} position={[-600, 700, -700]} />
                  <EffectComposer>
                    {width < 1100 
                      ? <><MobileBackground /><MobileScene /></> 
                      : <><DesktopBackground /><DesktopScene /></>
                    }
                    <Environment preset="city" />
                    <Stars radius={.2} depth={150} count={1000} factor={3} fade />
                  </EffectComposer>
              </Suspense>
            </Canvas>
            <ScrollButton />
          </div>
        </section>
      </>
    )
}