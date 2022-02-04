import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import desktopScene from '../../../assets/models/desktop.gltf'

export default function DesktopScene(props) {
  const whiteColor = 0xCAB2B8;
  const orangerColor = 0x993838;
  const raspberryColor = 0x801834;
  const primaryBlue = 0x11172b;
  const whiterColor = 0xe4e4e4;

  const [state, setState] = useState({ isActive: true })
  const group = useRef()
  const { nodes, materials } = useGLTF(desktopScene)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.owner.geometry}
            material={nodes.owner.material}
            position={[-3.82, 2.16, 0.81]}
            rotation={[1.7, 0, -0.17]}
            scale={0.7}>
          <meshStandardMaterial attach="material" color={whiteColor} roughness={.7} metalness={.5}/>     
      </mesh>
      <mesh geometry={nodes.dev.geometry}
            material={nodes.dev.material}
            position={[0.95, -1.06, 0.08]}
            rotation={[-0.09, -0.09, 0]}
            scale={[0.38, 0.13, 0.49]}>
          <meshStandardMaterial attach="material" color={whiteColor} roughness={1} metalness={0}/>    
      </mesh>
      <mesh geometry={nodes.elo.geometry}
            material={nodes.elo.material}
            position={[0.64, -2.04, 0.34]}
            rotation={[-0.09, -0.09, -0.01]}
            scale={[1.06, 0.04, 0.34]}>
          <meshStandardMaterial attach="material" color={primaryBlue} roughness={.7} metalness={.5}/>
      </mesh>
      <mesh geometry={nodes.per.geometry}
            material={nodes.per.material}
            position={[-0.15, -2.5, 0.34]}
            rotation={[-0.17, 0, 0]}
            scale={[0.91, 0.26, 0.34]}>
          <meshStandardMaterial attach="material" color={orangerColor} roughness={.4} metalness={.6}/>    
      </mesh>
      <mesh geometry={nodes.ownerCubes.geometry}
            material={nodes.ownerCubes.material}
            position={[-2.7, 0.86, -0.1]}
            rotation={[1.66, -0.01, -0.09]}
            scale={[1.12, 0.8, 0.1]}>
              <meshStandardMaterial attach="material" color={raspberryColor} roughness={.7} metalness={.5}/>
      </mesh>
      <mesh geometry={nodes.fede.geometry}
            material={nodes.fede.material}
            position={[-0.49, -1.9, 0.23]}
            rotation={[1.48, 0.01, -0.09]}
            scale={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial attach="material" color={orangerColor} roughness={.7} metalness={.5}/>
      </mesh>
      <mesh geometry={nodes.Text.geometry}
            material={nodes.Text.material}
            position={[1.68, -0.39, 0.06]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.9}>
          <meshStandardMaterial attach="material" color={whiterColor} roughness={.5} metalness={.5}/>
      </mesh>
    </group>
  )
}

useGLTF.preload(desktopScene)
