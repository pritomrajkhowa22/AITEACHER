
"use client"
import { CameraControls, Environment, Gltf, OrbitControls } from "@react-three/drei";
import { Canvas} from "@react-three/fiber";
export const Experience = () => {
    return (
        <>    
        <Canvas camera={{position:[0, 0, 0.0001]}}>
            <CameraManager/>
            <Environment preset="sunset"/>
                <ambientLight intensity={0.8} color="pink"/>
               <Gltf src="/models/classroom_default.glb" position={[0.2, -1.7, -2]}/>
        </Canvas>
        </>
    );
};

const CameraManager = () => {
    return (
        <CameraControls />
      );
};