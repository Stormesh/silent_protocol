import { Canvas } from "@react-three/fiber";
import { RotatingMesh } from "./components/meshes/rotating_mesh";

function App() {
  return (
    <div
      id="canvas-container"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />
        <RotatingMesh />
      </Canvas>
    </div>
  );
}

export default App;
