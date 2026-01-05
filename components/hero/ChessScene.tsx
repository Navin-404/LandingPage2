"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows, Environment, MeshTransmissionMaterial, Grid, Sparkles, Center } from "@react-three/drei";
import * as THREE from "three";

// --- 1. Procedural "King" (The Strategy) ---
// Now with a "Wireframe" overlay to look like it's being analyzed
const KingPiece = (props: any) => {
  return (
    <group {...props}>
      <group>
         {/* Base */}
        <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.8, 1, 0.4, 32]} />
            <GlassMaterial color="#8b5cf6" />
        </mesh>
        {/* Body */}
        <mesh position={[0, 1.2, 0]}>
            <cylinderGeometry args={[0.5, 0.7, 2, 32]} />
            <GlassMaterial color="#8b5cf6" />
        </mesh>
        {/* Head & Crown */}
        <mesh position={[0, 2.8, 0]}>
            <cylinderGeometry args={[0.6, 0.3, 0.8, 32]} />
            <GlassMaterial color="#8b5cf6" />
        </mesh>
        <mesh position={[0, 3.4, 0]}>
            <boxGeometry args={[0.3, 0.6, 0.1]} />
            <GlassMaterial color="#fff" />
        </mesh>
      </group>

      {/* THE AI LAYER: A floating wireframe ring scanning the piece */}
      <mesh position={[0, 1.5, 0]} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[1.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.6} />
      </mesh>
       <mesh position={[0, 2, 0]} rotation={[-0.2, 0, 0]}>
        <torusGeometry args={[0.9, 0.02, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.4} />
      </mesh>
    </group>
  );
};

// --- 2. The "Opponent" (Abstract Sphere/Pawn) ---
const DataOrb = (props: any) => {
    // This represents the "Algorithm" or "Data" we are mastering
  return (
    <group {...props}>
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#06b6d4" wireframe />
      </mesh>
      {/* Internal Core */}
      <mesh scale={0.5}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#fff" />
      </mesh>
    </group>
  );
};

const GlassMaterial = ({ color }: { color: string }) => (
  <MeshTransmissionMaterial
    backside
    samples={4}
    thickness={0.2}
    chromaticAberration={0.1} // Increased for "glitchy" cyber feel
    anisotropy={0.1}
    distortion={0.5}
    distortionScale={0.5}
    temporalDistortion={0.2}
    ior={1.2}
    color={color}
    resolution={1024}
  />
);

export const ChessScene = () => {
  return (
    <div className="absolute inset-0 z-0 touch-none">
      <Canvas camera={{ position: [3, 1, 5], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} castShadow />
        <pointLight position={[-10, -5, -10]} intensity={10} color="#06b6d4" />

        <Environment preset="city" />

        {/* --- AI ATMOSPHERE ELEMENTS --- */}
        
        {/* 1. Digital Dust (The "Data") */}
        <Sparkles 
            count={200} 
            scale={10} 
            size={4} 
            speed={0.4} 
            opacity={0.5} 
            color="#8b5cf6" 
        />
        
        {/* 2. Floating Strategy Piece */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <KingPiece position={[0.5, -1, 0]} scale={0.7} />
        </Float>

        {/* 3. Floating Data Orb (The Algorithm) */}
        <Float speed={4} rotationIntensity={2} floatIntensity={2}>
          <DataOrb position={[-2, 0, -2]} scale={0.5} />
        </Float>

        {/* 4. Grid Floor */}
        <Grid 
          position={[0, -1.5, 0]} 
          args={[10, 10]} 
          cellSize={0.5} 
          cellThickness={0.5} 
          cellColor="#a78bfa" 
          sectionSize={2} 
          sectionThickness={1} 
          sectionColor="#8b5cf6" 
          fadeDistance={10} 
        />

        <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
};