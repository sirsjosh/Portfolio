import React from 'react';
import {HomeContainer,InnerContainerProjects, Space} from '../components/styles/styles'
import {projects} from '../utils'
import Project from './Project';

function Projects() {
  return (
    <HomeContainer  id='intro'>
        <InnerContainerProjects style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <Space/>
                {projects?.map(project=>(
                    <Project key={project.name} name={project.name} website={project.website} background={project.background} text={project.text} technologies={project.technologies} github={project.github}/>
                ))}
        </InnerContainerProjects>
    </HomeContainer>
  )
}

export default Projects