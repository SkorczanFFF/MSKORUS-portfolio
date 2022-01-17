import React from 'react'

export default function Planet(props) {
    const raspberryColor = 0x79132e;
    return (
        <>
        <mesh position={[.5, 0, -10]}>
            <sphereGeometry args={[7, 36, 36]}  />
            <meshBasicMaterial color={raspberryColor} wireframe={false}/>
        </mesh>
        </>
    )
}

