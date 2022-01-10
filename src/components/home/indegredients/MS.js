import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';

export default function MS() {
    const objMS = useLoader(OBJLoader, '../../../assets/models/ms.obj');
    return (
        <primitive object={objMS} />
    )
  }


  