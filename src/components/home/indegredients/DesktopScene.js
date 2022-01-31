import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import desktopScene from '../../../assets/models/desktop.gltf'

export default function DesktopScene(props) {
  const whiteColor = 0xCAB2B8;
  const orangerColor = 0x993838;
  const raspberryColor = 0x801834;
  const primaryBlue = 0x11172b;

  const [state, setState] = useState({ isActive: true })
  const group = useRef()
  const { nodes, materials } = useGLTF(desktopScene)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.name.geometry}
            material={nodes.name.material}
            position={[-2.37, -0.18, -0.04]}
            rotation={[1.6, 0, -0.17]}>
        <meshStandardMaterial attach="material" color={whiteColor} roughness={.7} metalness={.5}/>
      </mesh>
      <mesh geometry={nodes.surname.geometry}
            material={nodes.surname.material}
            position={[-4.16, 0.8, 0.2]}
            rotation={[1.6, 0, -0.17]}>
        <meshStandardMaterial attach="material" color={whiteColor} roughness={.7} metalness={.5}/>
      </mesh>
      <mesh geometry={nodes.wdep.geometry}
            material={nodes.wdep.material}
            position={[1.7, 1.18, -0.29]}
            rotation={[1.6, 0, 0.26]}>
        <meshStandardMaterial attach="material" color={orangerColor} roughness={.7} metalness={.5}/>
      </mesh>
      <mesh geometry={nodes.mscube.geometry}
            material={nodes.mscube.material}
            position={[0.96, 0.7, -0.71]}
            rotation={[1.6, 0, 0]}
            scale={[0.07, 1, 1.08]}>
        <meshStandardMaterial attach="material" color={whiteColor} roughness={.7} metalness={.5}/>
      </mesh>
      <mesh geometry={nodes.fullcube.geometry}
            material={nodes.fullcube.material}
            position={[1.24, 0.04, -1.61]}
            rotation={[1.6, 0, 0]}
            scale={[0.07, 1, 1.92]}>
        <meshStandardMaterial attach="material" color={raspberryColor} roughness={.5} metalness={.5}/>
      </mesh>
      <mesh geometry={nodes.wd.geometry}
            material={nodes.wd.material}
            position={[1.79, 1.06, -0.16]}
            rotation={[1.6, 0, 0.26]}>
        <meshStandardMaterial attach="material" color={whiteColor} roughness={1} metalness={0}/>
      </mesh>
      <mesh geometry={nodes.elo.geometry}
            material={nodes.elo.material}
            position={[1.83, 1.07, -0.35]}
            rotation={[1.6, 0, 0.26]}>
        <meshStandardMaterial attach="material" color={primaryBlue} roughness={.6} metalness={.4} />
      </mesh>
      <mesh geometry={nodes.wdcube.geometry}
            material={nodes.wdcube.material}
            position={[1.45, 0.92, -1.31]}
            rotation={[1.6, 0, 0]}
            scale={[0.07, 1, 0.84]}>
        <meshStandardMaterial attach="material" color={whiteColor} roughness={1} metalness={0}/>
        </mesh>
      <mesh geometry={nodes.elocube.geometry}
            material={nodes.elocube.material}
            position={[1.56, -0.45, -0.87]}
            rotation={[1.6, 0, 0]}
            scale={[0.07, 1, 0.34]}>
        <meshStandardMaterial attach="material" color={primaryBlue} roughness={.95} metalness={0} />
        </mesh>
    </group>
  )
}

useGLTF.preload(desktopScene)
