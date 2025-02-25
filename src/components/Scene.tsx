'use client';

import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DynamicModel = dynamic(() => import('./Model'), { ssr: false });

const Scene = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={null}>
        <DynamicModel />
      </Suspense>
    </Canvas>
  );
};

export default Scene;