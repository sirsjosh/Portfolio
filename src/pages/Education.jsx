import React,{ Suspense } from 'react'
import {Canvas} from '@react-three/fiber'

import Three from '../components/three'
import Loader from '../components/three/Loader'
import Controls from '../components/controls/Controls'

function Education() {
  return (
    <>
    <Controls/>
    
   <Canvas  id='three-canvas-container' shadows>
       <Suspense fallback={<Loader/>}>
         <Three/>
       </Suspense>
   </Canvas>
  
    </>
  )
}

export default Education