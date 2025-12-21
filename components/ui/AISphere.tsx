"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Rotation for life
        meshRef.current.rotation.y = time * 0.3;
        meshRef.current.rotation.x = time * 0.1;
    });

    return (
        <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.4}>
            <MeshDistortMaterial
                color="#00C2FF" // Vibrant Cyan
                attach="material"
                distort={0.4} // Distort amount
                speed={1.5} // Animation speed
                roughness={0.2}
                metalness={0.9} // Metallic look
                wireframe={true} // Wireframe for that "digital/AI" look
            />
        </Sphere>
    );
};

const AISphere = () => {
    return (
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#00C2FF" />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#8000FF" />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
};

export default AISphere;
