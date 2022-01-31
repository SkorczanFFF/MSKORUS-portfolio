import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import mobileScene from '../../../assets/models/mobile.gltf'
export default function MobileScene(props) {
  const whiteColor = 0xCAB2B8;
  const orangerColor = 0x993838;
  const raspberryColor = 0x801834;
  const primaryBlue = 0x11172b;
  const whiterColor = 0xe4e4e4;

  const group = useRef()
  const { nodes, materials } = useGLTF(mobileScene)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.heading.geometry}
            material={nodes.heading.material}
            position={[0.05, 0.87, 0.12]}
            rotation={[1.75, 0, 0.09]}
            scale={[0.82, 0.79, 0.82]}>
          <meshStandardMaterial attach="material" color={whiterColor} roughness={.7} metalness={.5}/>          
      </mesh>
      <mesh geometry={nodes.linesHeader.geometry}
            material={nodes.linesHeader.material}
            position={[-0.82, 0.99, -0.2]}
            rotation={[1.75, 0, -0.09]}
            scale={[0.74, 0.79, 0.05]}>
          <meshStandardMaterial attach="material" color={raspberryColor} roughness={.7} metalness={.5}/>
      </mesh>
      <mesh geometry={nodes.cubeHeader.geometry}
            material={nodes.cubeHeader.material}
            position={[1.23, 2.06, 0.34]}
            rotation={[1.83, 0.02, 0.17]}
            scale={[0.25, 0.46, 0.27]}>
          <meshStandardMaterial attach="material" color={primaryBlue} roughness={.7} metalness={.2}/>    
      </mesh>
      <mesh geometry={nodes.fedep.geometry}
            material={nodes.fedep.material}
            position={[-1.48, 0.06, 0.34]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.65}>
          <meshStandardMaterial attach="material" color={orangerColor} roughness={.5} metalness={.5}/>
      </mesh>
      <mesh geometry={nodes.frontend.geometry}
            material={nodes.frontend.material}
            position={[-1.55, 0, 0.39]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.65}>
          <meshStandardMaterial attach="material" color={whiterColor} roughness={1} metalness={0}/>      
      </mesh>
      <mesh geometry={nodes.dev.geometry}
            material={nodes.dev.material}
            position={[0.26, -0.92, -0.23]}
            rotation={[-0.09, -0.09, 0]}
            scale={[0.33, 0.11, 0.6]}>
          <meshStandardMaterial attach="material" color={whiteColor} roughness={1} metalness={0}/>    
      </mesh>
      <mesh geometry={nodes.elo.geometry}
            material={nodes.elo.material}
            position={[-0.01, -1.76, 0.1]}
            rotation={[-0.09, -0.09, -0.01]}
            scale={[0.91, 0.03, 0.42]}>
          <meshStandardMaterial attach="material" color={primaryBlue} roughness={.7} metalness={.5}/>
      </mesh>
      <mesh geometry={nodes.per.geometry}
            material={nodes.per.material}
            position={[-0.68, -2.15, 0.1]}
            rotation={[-0.17, 0, 0]}
            scale={[0.78, 0.22, 0.42]}>
          <meshStandardMaterial attach="material" color={orangerColor} roughness={.4} metalness={.5}/>    
      </mesh>
    </group>
  )
}

useGLTF.preload(mobileScene)
