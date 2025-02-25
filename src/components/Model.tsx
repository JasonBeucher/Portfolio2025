import { useGLTF } from '@react-three/drei';
import { Group } from 'three';
import { useRef } from 'react';

useGLTF.preload('/head.glb'); 

export default function Model(){
    const group = useRef<Group>(null);
    const { nodes, materials, animations, scene } = useGLTF('/head.glb');
    return (
        <group ref={group}>
            <primitive object={scene}/>
        </group>
    );
} 