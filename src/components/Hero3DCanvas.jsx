'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, Ring } from '@react-three/drei';
import * as THREE from 'three';

// 3D Airplane flying in smooth orbital trajectory
function OrbitingAirplane({ radius = 2.4, speed = 0.8 }) {
  const airplaneRef = useRef(null);

  useFrame(({ clock }) => {
    if (!airplaneRef.current) return;
    const t = clock.getElapsedTime() * speed;

    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    const y = Math.sin(t * 2) * 0.45;

    airplaneRef.current.position.set(x, y, z);

    const nextT = t + 0.05;
    const nextX = Math.cos(nextT) * radius;
    const nextZ = Math.sin(nextT) * radius;
    const nextY = Math.sin(nextT * 2) * 0.45;

    airplaneRef.current.lookAt(nextX, nextY, nextZ);
  });

  return (
    <group ref={airplaneRef}>
      {/* Fuselage */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.07, 0.42, 12]} />
        <meshStandardMaterial color="#EAF3E7" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Jet Wings */}
      <mesh position={[0, 0, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.55, 0.08, 0.015]} />
        <meshStandardMaterial color="#a7F432" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Tail Fin */}
      <mesh position={[0, 0.08, 0.16]}>
        <boxGeometry args={[0.015, 0.12, 0.08]} />
        <meshStandardMaterial color="#a7F432" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Jet Engine Glow Light */}
      <pointLight color="#a7F432" intensity={2.2} distance={0.7} />
    </group>
  );
}

// 3D Earth Globe with continents grid and glowing atmosphere
function GlobeMesh() {
  const globeRef = useRef(null);
  const atmosphereRef = useRef(null);
  const flightRingRef = useRef(null);

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.2;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y -= delta * 0.05;
    }
    if (flightRingRef.current) {
      flightRingRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group>
      {/* Central Core Sphere (#0F1F16 / #152a1e) */}
      <Sphere ref={globeRef} args={[1.65, 48, 48]}>
        <meshStandardMaterial
          color="#152a1e"
          roughness={0.35}
          metalness={0.65}
        />
      </Sphere>

      {/* Continental Coordinates Grid (#a7F432) */}
      <Sphere args={[1.67, 24, 24]}>
        <meshBasicMaterial
          color="#a7F432"
          wireframe={true}
          transparent={true}
          opacity={0.32}
        />
      </Sphere>

      {/* Outer Flight Ring (#a7F432) */}
      <group ref={flightRingRef} rotation={[Math.PI / 3, 0.2, 0]}>
        <Torus args={[2.3, 0.02, 16, 100]}>
          <meshStandardMaterial
            color="#a7F432"
            emissive="#a7F432"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.15}
          />
        </Torus>
      </group>

      {/* Second Orbital Ring (#3B8F7B) */}
      <group rotation={[-Math.PI / 4, -0.4, 0]}>
        <Ring args={[2.45, 2.47, 64]}>
          <meshBasicMaterial
            color="#3B8F7B"
            side={THREE.DoubleSide}
            transparent={true}
            opacity={0.45}
          />
        </Ring>
      </group>

      {/* Atmospheric Glow Halo (#3B8F7B) */}
      <Sphere ref={atmosphereRef} args={[1.85, 32, 32]}>
        <meshBasicMaterial
          color="#3B8F7B"
          transparent={true}
          opacity={0.12}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Orbiting Airplane */}
      <OrbitingAirplane radius={2.3} speed={0.7} />
    </group>
  );
}

// Beacon Stars
function UniversityStars({ count = 80 }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 12;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 9;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#a7F432"
        transparent={true}
        opacity={0.75}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0.4, 5.8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.9} />
        {/* Lime Accent Key Light */}
        <pointLight position={[6, 5, 4]} color="#a7F432" intensity={2.2} />
        {/* Teal Back Light */}
        <pointLight position={[-6, -4, -3]} color="#3B8F7B" intensity={2.5} />
        <directionalLight position={[0, 8, 3]} intensity={1.1} color="#EAF3E7" />

        <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.4}>
          <GlobeMesh />
        </Float>

        <UniversityStars count={85} />
      </Canvas>
    </div>
  );
}
