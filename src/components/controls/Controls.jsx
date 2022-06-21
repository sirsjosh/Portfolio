import React from 'react'
import {useStore} from '../../zustand/store'
import {Container,Button} from '../styles/styles'


function Controls() {
  const walk = useStore(state => state.walk)
  const walkBack = useStore(state => state.walkBack)
  const idle = useStore(state => state.idle)
  const positionX = useStore(state => state.positionX)

  const isWalking = useStore(state => state.isWalking)
  const isWalkingBack = useStore(state => state.isWalkingBack)

  return (
    <Container>
        <Button onClick={(-44.5<=positionX)?walkBack:null}>Backward</Button>
        <Button onClick={(positionX<=149.5)?walk:null}>Forward</Button>
    </Container>
  )
}

export default Controls

