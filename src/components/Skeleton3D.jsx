import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// 🩻 Define body zones manually (based on approximate height on model)
const bodyZones = [
  { name: "Head / Neck", exercise: "Neck rotations, chin tucks, side bends.", minY: 1.3 },
  { name: "Shoulders", exercise: "Shoulder rolls, wall push-ups, arm circles.", minY: 0.9 },
  { name: "Chest", exercise: "Chest stretch, push-ups, deep breathing.", minY: 0.4 },
  { name: "Back", exercise: "Cat-cow, bridge pose, spinal twist.", minY: 0.0 },
  { name: "Hips / Pelvis", exercise: "Hip bridges, squats, seated hip stretches.", minY: -0.4 },
  { name: "Thighs", exercise: "Lunges, leg raises, quad stretches.", minY: -0.9 },
  { name: "Knees", exercise: "Wall sits, knee extensions, hamstring stretch.", minY: -1.2 },
  { name: "Calves", exercise: "Calf raises, toe flexes, ankle circles.", minY: -1.5 },
  { name: "Feet / Ankles", exercise: "Toe curls, heel raises, balance drills.", minY: -1.8 },
];

// 🧩 Fit camera nicely in front view
function FitCameraToModel({ modelRef }) {
  const { camera, controls } = useThree();

  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const distance = maxDim * 2;
      camera.position.set(center.x, center.y, distance); // Front view
      camera.lookAt(center);
      if (controls) {
        controls.target.copy(center);
        controls.update();
      }
    }
  }, [modelRef, camera, controls]);

  return null;
}

// 🦴 Skeleton Component
function ClickableSkeleton({ onSelectPart }) {
  const { scene } = useGLTF("/models/skeleton.glb");
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
        child.material.color = new THREE.Color("#ffffff");
        child.material.emissive = new THREE.Color("#000000");
      }
    });
  }, [scene]);

  // Glow effect on hover
  useFrame(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        if (hovered && child.uuid === hovered.uuid) {
          child.material.color.set("#14b8a6");
          child.material.emissive.set("#0d9488");
        } else {
          child.material.color.set("#ffffff");
          child.material.emissive.set("#000000");
        }
      }
    });
  });

  return (
    <primitive
      object={scene}
      scale={1.4}
      position={[0, -1.3, 0]}
      rotation={[0, Math.PI, 0]} // face front
      onPointerMove={(e) => {
        e.stopPropagation();
        setHovered(e.object);
      }}
      onPointerOut={() => setHovered(null)}
      onClick={(e) => {
        e.stopPropagation();
        const y = e.point.y;
        const zone =
          bodyZones.find((z, i) => y > z.minY && (i === 0 || y <= bodyZones[i - 1].minY)) ||
          bodyZones[bodyZones.length - 1];
        onSelectPart(zone);
      }}
    />
  );
}

// 🧘 Info Panel for Exercises
function ExercisePanel({ selected }) {
  if (!selected) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-2xl p-5 w-[90%] md:w-96 border-t-4 border-teal-500"
    >
      <h2 className="text-lg font-bold text-teal-700 text-center mb-2">
        {selected.name} 🩻
      </h2>
      <p className="text-gray-700 text-center">{selected.exercise}</p>
    </motion.div>
  );
}

// 🌟 Main Component
export default function Skeleton3D() {
  const [selectedPart, setSelectedPart] = useState(null);
  const modelRef = useRef();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 text-gray-900 overflow-hidden">
      {/* Left Info Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start justify-center text-center md:text-left px-6 md:px-12 w-full md:w-1/2 mb-6 md:mb-0"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-4 leading-tight">
          3D Human Skeleton Explorer 🩻
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Tap or click on any part of the skeleton to discover its name and
          learn simple mobility and flexibility exercises.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 transition-all w-fit mx-auto md:mx-0"
        >
          Explore the Human Body
        </motion.button>
      </motion.div>

      {/* Right 3D Skeleton */}
      <div className="relative w-full md:w-1/2 h-[70vh] md:h-[90vh]">
        <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
          <ambientLight intensity={1.1} />
          <directionalLight position={[10, 10, 10]} intensity={1.2} />
          <group ref={modelRef}>
            <ClickableSkeleton onSelectPart={setSelectedPart} />
          </group>
          <FitCameraToModel modelRef={modelRef} />
          <OrbitControls
            enablePan
            enableZoom
            enableRotate
            zoomSpeed={0.8}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>

        <ExercisePanel selected={selectedPart} />
      </div>
    </div>
  );
}
