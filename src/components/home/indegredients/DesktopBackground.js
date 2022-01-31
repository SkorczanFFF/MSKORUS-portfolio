import React from 'react'
import { MeshDistortMaterial } from '@react-three/drei';

export default function DesktopBackground() {
    const raspberryColor = 0x801834;
    const orangeColor = 0x972b1a;
    return (
        <group>
            <mesh position={[0, 5, -10]} rotation={[9.4, -.4, 0]}>
                <sphereBufferGeometry args={[20, 100, 100, 0, 4]} phiLength={[4.42455]}/>
                <MeshDistortMaterial attach="material" color={orangeColor} factor={1} speed={.15} metalness={1} roughness={.7} />
            </mesh>
            <mesh position={[0, 1, -16]}>
                <sphereGeometry args={[13, 100, 100, 0, 2.6]} />
                <MeshDistortMaterial attach="material" color={raspberryColor} factor={.5} speed={.3} metalness={.6} roughness={.7} />
            </mesh>
        </group>
    );
  }