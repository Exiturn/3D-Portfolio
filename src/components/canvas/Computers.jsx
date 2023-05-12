import { React, Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    // Create a mesh using the imported gltf model, mesh includes the light and
    // the primitive object
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0.5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [-0.5, -2, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add an event listener to changes in the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the value of the 'isMobile' state based on the media query
    setIsMobile(mediaQuery.matches);

    // Define a callback function to run when the media query is changed
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Add the callback function to the event listener
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    // Create a canvas for the mesh to be rendered on
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense component to load the mesh, fallback is the loader component */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 5}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={3} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
      { }
    </Canvas>
  )
}


export default ComputersCanvas