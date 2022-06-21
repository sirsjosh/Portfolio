import React from 'react'

import {PerspectiveCamera} from '@react-three/drei'
import * as THREE from "three";

import { useFrame ,useLoader,useThree} from '@react-three/fiber';
import { useTranslation } from "react-i18next";

import {useStore} from '../../zustand/store'
import TextElement from './Text'
import Model from './Body'



function Three() {

  const [suepTexture,textureConf]=useLoader(THREE.TextureLoader,['https://res.cloudinary.com/dxxx1wdbm/image/upload/v1655502905/portfolio/suep_yabgiz.png','https://res.cloudinary.com/dxxx1wdbm/image/upload/v1655502904/portfolio/conf_mipa12.png']);
  const { viewport } = useThree()
 

  const isWalking = useStore(state => state.isWalking)
  const isWalkingBack = useStore(state => state.isWalkingBack)
  const positionX = useStore(state => state.positionX)
  const move = useStore(state => state.move)
  const idle = useStore(state => state.idle)
  const clock = new THREE.Clock()
  let fov=50;
  let view=(viewport.width/viewport.height);

  const setView=(view)=>{
    if(view>=1){
      return 50;
    }else if(view<1){
      if(view<0.61){
        return 90;
      }else{
      return 80;
      }
    }
  }

  useFrame(()=>{
    const elapsedTime=clock.getElapsedTime()
    view=(viewport.width/viewport.height);
    setView(view)
  

      if(isWalking){

        positionX<=149.5
        ?  move(elapsedTime*10)
        : idle()
     
      }else if(isWalkingBack){
        -44.5<=positionX
        ?  move(-elapsedTime*10)
        : idle()
      }
    
  })
  return (
    <>
    <PerspectiveCamera  makeDefault position={[positionX, 0, 25]} fov={setView(view)}/>
    {/* <OrbitControls target={[positionX, 0, 0]}/> */}

    //model
    <Model/>

    //back wall
    <mesh  receiveShadow position={[0, 0, -5]}>
      <planeGeometry args={[500, 80, 10]}/>
      <meshPhongMaterial color='#B4D7FF' />
    </mesh>


    //floor
    <mesh castShadow receiveShadow position={[0, -5, 0]} rotation={[ -Math.PI * 0.5,0,0]}>
      <planeGeometry args={[445, 10, 1]}/>
      <meshPhongMaterial  color='#071938'/>
    </mesh>

    //picture
    <mesh castShadow receiveShadow position={[-20, 2, -4.5]} >
      <planeGeometry args={[18, 27, 1]}/>
      <meshPhongMaterial  color='#ffffff' transparent map={suepTexture}/>
    </mesh>

    <mesh castShadow receiveShadow position={[10, 2, -4.5]} >
      <planeGeometry args={[18, 27, 1]}/>
      <meshPhongMaterial  color='#ffffff' transparent opacity={1} map={textureConf}/>
    </mesh>

    //text
      <TextElement text={'Education'} position={[ -50,  8,  -4.8]} size={0.5}/>

      <TextElement text={'Shanghai University of Electric Power'} position={[-20, 10, -4.8]} size={0.17}/>
      <TextElement text={'Bachelor In Software Engineering'} position={[-20, 8, -4.8]} size={0.15}/>
      <TextElement text={'2015  -  2019'} position={[-20, -4, -4.8]} size={0.12}/>

      <TextElement text={'Confucious Institute'} position={[10, 10, -4.8]} size={0.17}/>
      <TextElement text={'Chinese Level 4 Proficieny'} position={[10, 8, -4.8]} size={0.15}/>
      <TextElement text={'2014  -  2015'} position={[10, -4, -4.8]} size={0.12}/>

      <TextElement text={'Online Accredited Courses'} position={[40, 10, -4.8]} size={0.17}/>
      <TextElement text={'Three Js:  threejs-journey.com       Bruno Simmon'} position={[43, 8, -4.8]} size={0.12}/>
      <TextElement text={'Three Js:   chriscourses.com      Christopher Lis'} position={[42.5, 6, -4.8]} size={0.12}/>
      <TextElement text={'React Js:   developedbyed.com      Ed'} position={[39.8, 4, -4.8]} size={0.12}/>
      <TextElement text={'D3.js:   Udemy.com     Shaun Pelling'} position={[39.5, 2, -4.8]} size={0.12}/>

      <TextElement text={'Programming Languages'} position={[ 75,  10,  -4.8]} size={0.25}/>
      <TextElement text={'& Skills'} position={[ 65,  7,  -4.8]} size={0.25}/>

      <TextElement text={'HTML'} position={[100, 10, -4.8]} size={0.15}/>
      <TextElement text={'CSS'} position={[99, 8, -4.8]} size={0.15}/>
      <TextElement text={'Vanilla Javascript'} position={[103.5, 6, -4.8]} size={0.15}/>
      <TextElement text={'React JS'} position={[100.5, 4, -4.8]} size={0.15}/>
      <TextElement text={'Three JS'} position={[100.5, 2, -4.8]} size={0.15}/>
      <TextElement text={'D3 JS'} position={[99.5, 0, -4.8]} size={0.15}/>
      <TextElement text={'REACT REDUX'} position={[102.3, -2, -4.8]} size={0.15}/>

      <TextElement text={'REACT Zustand'} position={[130, 10, -4.8]} size={0.15}/>
      <TextElement text={'REACT Styled Components'} position={[133.7, 8, -4.8]} size={0.15}/>
      <TextElement text={'REACT HOOKS'} position={[129.5, 6, -4.8]} size={0.15}/>
      <TextElement text={'Git'} position={[125.5, 4, -4.8]} size={0.15}/>
      <TextElement text={'Bootstrap'} position={[127.7, 2, -4.8]} size={0.15}/>
      <TextElement text={'Material UI'} position={[128, 0, -4.8]} size={0.15}/>
      <TextElement text={'SASS'} position={[126.1, -2, -4.8]} size={0.15}/>

    <ambientLight  args={['#ffffff',0.1]}/>
    {/* <directionalLight castShadow shadowMapHeight={1024} shadowMapWidth={1024} position={[0, 5, 15]} args={['#ffffff',0.3]}/> */}
    <directionalLight castShadow shadowMapHeight={1024} shadowMapWidth={1024} position={[0, 30, 17]} args={['#ffffff',0.7]}/>
    </>
  )
}

export default Three