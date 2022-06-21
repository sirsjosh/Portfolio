import create from 'zustand'

export const useStore = create(set => ({
  isWalking: false,
  isWalkingBack: false,
  positionX:-45,
  walk: () => set(state => ({ isWalking: !state.isWalking , isWalkingBack:false})),
  walkBack: () => set(state => ({ isWalking: false , isWalkingBack:!state.isWalkingBack})),
  idle: () => set(state => ({ isWalking: false , isWalkingBack:false})),
  move: (time) => set(state => ({ positionX:state.positionX+=time})),
}))