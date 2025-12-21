"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MiniSphereProps {
    scale?: number;
    color?: string;
    particleSize?: number;
}

const MiniSphere: React.FC<MiniSphereProps> = ({
    scale = 1.4,
    color = "#ffffff",
    particleSize = 0.12
}) => {
    const meshRef = useRef<THREE.Points>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Slow, elegant rotation
        meshRef.current.rotation.y = time * 0.1;
        meshRef.current.rotation.x = time * 0.05;

        // Subtle breathing
        const s = scale + Math.sin(time * 0.8) * 0.05;
        meshRef.current.scale.set(s, s, s);
    });

    return (
        <points ref={meshRef}>
            {/* Reduced segment count for minimalist "dot" look */}
            <sphereGeometry args={[1, 32, 32]} />
            <pointsMaterial
                color={color}
                size={particleSize}
                sizeAttenuation={true}
                transparent={true}
                opacity={0.8}
            />
        </points>
    );
};

export default MiniSphere;
