import React, { useState,  useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import msModel from '../../../assets/models/ms.gltf';
import wdepModel from '../../../assets/models/wdep.gltf';
import wdModel from '../../../assets/models/wd.gltf';
import eloModel from '../../../assets/models/elo.gltf';
import msBarModel from '../../../assets/models/msbar.gltf';
import mainBarModel from '../../../assets/models/mainbar.gltf';
import wdBarModel from '../../../assets/models/wdbar.gltf';
import eloBarModel from '../../../assets/models/elobar.gltf';


export default function MS() {
    //color palette
    const orangeColor = 0x8a2d1f;
    const raspberryColor = 0x79132E;
    const whiteColor = 0xe4e4e4;
    const limeColor = 0xE4FF1A;
    const seledynColor = 0x29c69c;

    const ms = useLoader(GLTFLoader, msModel);
    const wdep = useLoader(GLTFLoader, wdepModel);
    const wd = useLoader(GLTFLoader, wdModel);
    const elo = useLoader(GLTFLoader, eloModel)
    const mainBar = useLoader(GLTFLoader, mainBarModel);
    const msBar = useLoader(GLTFLoader, msBarModel);
    const wdBar = useLoader(GLTFLoader, wdBarModel);
    const eloBar = useLoader(GLTFLoader, eloBarModel);

    return (
        <>  
            <mesh position={[ 0, 0 ,0 ]}>
                <primitive object={ms.scene} scale={1} >
                    <meshBasicMaterial color={raspberryColor} wireframe={false}/>
                </primitive>
            </mesh>    
                <primitive object={wdep.scene} scale={1}>

                </primitive>
                <primitive object={elo.scene} scale={1}>

                </primitive>
                <primitive object={wd.scene} scale={1}>

                </primitive>
                <primitive object={mainBar.scene} scale={1}>

                </primitive>
                <primitive object={msBar.scene} scale={1}>

                </primitive>
                <primitive object={wdBar.scene} scale={1}>

                </primitive>
                <primitive object={eloBar.scene} scale={1}>

                </primitive>
        </>
/*
        <group {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.surname.geometry} >
                <meshStandardMaterial
                    color={orangeColor}
            />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.name.geometry}>
                <meshStandardMaterial
                    color={raspberryColor}
                />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.wdep.geometry}>
                <meshStandardMaterial
                    color={limeColor}
                />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.wd.geometry}>
                <meshStandardMaterial
                    color={seledynColor}
                />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.elo.geometry}>
                <meshStandardMaterial
                    color={whiteColor}
                />
            </mesh>

            <mesh castShadow receiveShadow geometry={nodes.fullcube.geometry}>
                <meshStandardMaterial
                    color={whiteColor}
                />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.mscube.geometry}>
                <meshStandardMaterial
                    color={whiteColor}
                />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.wdcube.geometry}>
                <meshStandardMaterial
                    color={whiteColor}
                />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.elocube.geometry}>
                <meshStandardMaterial
                    color={whiteColor}
                />
            </mesh>
        </group>

    */
  )
}