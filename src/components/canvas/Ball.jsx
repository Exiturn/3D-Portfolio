import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    // Float component used from the drei library, makes the 3D object float in place
    // standard mesh initialization with lights and materials
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]}/>
        <meshStandardMaterial 
          color="#d9d3d2"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Decals: wrapping the mesh with a texture */}
        <Decal
          position={[0, 0, 1]}
          rotation={[ 2 * Math.PI, 0, 0]} 
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense component to load the mesh, fallback is the loader component */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas