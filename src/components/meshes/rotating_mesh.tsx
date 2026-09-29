import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export function RotatingMesh() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}
