import React from 'react'
import {Card,CardHeader,CardContent,Techs,Image,CardText,Technologies} from '../components/styles/styles'
import { FaGithub} from 'react-icons/fa';

import { useTranslation } from "react-i18next";

function Project({name,website,background,technologies,text,github}) {

    const { t } = useTranslation();
    
  return (
    <Card>
                <CardHeader>
                    <h1 style={{textAlign:'center'}}>{name}</h1>
                </CardHeader>
                <CardContent>
                    <Image src={background}/>
                    <CardText>{t('Website')}: <a style={{color:'#355EA3'}} href={website} target='_blank'>{website}</a><br/>
                    <FaGithub style={{fontSize:'30px'}}/><a style={{color:'#355EA3'}} href={github} target='_blank'>{github}</a><br/>
                        {t(text)}</CardText>
                </CardContent>
                <Techs>
                    {technologies?.map(tech=>(
                        <Technologies key={tech.name}>
                        {tech.icon}
                        <p>{tech.name}</p>
                        </Technologies>
                    ))}
                </Techs>
     </Card>
  )
}

export default Project