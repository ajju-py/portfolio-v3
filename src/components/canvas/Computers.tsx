import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

// Error Boundary for WebGL 3D Canvas
class CanvasErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn("3D Canvas WebGL warning or error:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.4} groundColor="#000000" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.5} color="#00d2ff" position={[0, 1, 0]} />
      <pointLight intensity={1} color="#915eff" position={[2, -1, 1]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -2.6, -1.8] : [0, -3.4, -1.5]}
        rotation={[-0.01, -0.2, -0.08]}
      />
    </mesh>
  );
};

// Check if WebGL is supported
const isWebGLSupported = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};

const InfrastructureFallbackCard = () => (
  <div className="w-full h-full flex items-center justify-center p-6">
    <div className="max-w-md w-full bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-xs font-mono text-slate-400 ml-2">infra-topology.yaml</span>
        </div>
        <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-800 px-2 py-0.5 rounded">
          ACTIVE
        </span>
      </div>

      <div className="mt-4 space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700/50">
          <span className="text-slate-300 flex items-center gap-2">
            <span className="text-red-400">●</span> OS Foundation
          </span>
          <span className="text-cyan-300 font-semibold">Red Hat Enterprise Linux 9</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700/50">
          <span className="text-slate-300 flex items-center gap-2">
            <span className="text-purple-400">●</span> Runtime
          </span>
          <span className="text-purple-300 font-semibold">Podman Rootless Engine</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700/50">
          <span className="text-slate-300 flex items-center gap-2">
            <span className="text-blue-400">●</span> Provisioning
          </span>
          <span className="text-blue-300 font-semibold">Terraform HCL + Bash</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700/50">
          <span className="text-slate-300 flex items-center gap-2">
            <span className="text-amber-400">●</span> Cloud Target
          </span>
          <span className="text-amber-300 font-semibold">AWS CLI & S3 Lab</span>
        </div>

        <div className="flex items-center justify-between p-2 rounded bg-slate-800/60 border border-slate-700/50">
          <span className="text-slate-300 flex items-center gap-2">
            <span className="text-emerald-400">●</span> Security
          </span>
          <span className="text-emerald-300 font-semibold">SELinux Enforcing + Firewalld</span>
        </div>
      </div>
    </div>
  </div>
);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setHasWebGL(isWebGLSupported());

    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (!hasWebGL) {
    return <InfrastructureFallbackCard />;
  }

  return (
    <div className="w-full h-full relative">
      <CanvasErrorBoundary fallback={<InfrastructureFallbackCard />}>
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 1.5]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              autoRotate={false}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

export default ComputersCanvas;
