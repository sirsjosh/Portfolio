import React from 'react'
import {HomeContainer,InnerContainerProjects,Space} from '../components/styles/styles'
import {experiances} from '../utils'
import Experience from './Experience'


function Experiances() {
  return (
    <HomeContainer id='intro'>
        <InnerContainerProjects style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <Space className='space'></Space>
        {experiances?.map(experience=>(
                    <Experience key={experience.name} name={experience.name} responsibilities={experience.responsibilities} position={experience.position} work={experience.work}/>
                ))}
        </InnerContainerProjects>
    </HomeContainer>
  )
}

export default Experiances