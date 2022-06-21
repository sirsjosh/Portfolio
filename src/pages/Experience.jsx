import React from 'react'
import {Card,CardHeader,CardContent,CardText} from '../components/styles/styles'
import { useTranslation } from "react-i18next";

function Experience({name,position,responsibilities,work}) {
    const { t } = useTranslation();
  return (
    <Card style={{height:'80vh'}}>
                <CardHeader>
                    <h1 style={{textAlign:'center'}}>{name}</h1>
                </CardHeader>
                <CardContent style={{flexDirection:'column',background:'#B4D7FF'}}>
                    <CardText style={{width:'100%'}}>
                    <span style={{fontSize:'25px'}}>{t('Position')}:</span> {t('FrontEnd')}
                    </CardText>
                    <CardText style={{width:'100%'}}>
                    <span style={{fontSize:'25px'}}>{t('Period')}:</span> {work}
                    </CardText>
                    <CardText style={{width:'100%',fontSize:'25px',margin:'0'}}>{t('Responsibilities')}:</CardText>
                    <ul>
                    {
                        responsibilities?.map(res=>(
                            <li key={res}><CardText style={{width:'100%',margin:'0',padding:'0'}}>{t(res)}</CardText></li>
                        ))
                    }
                    </ul>
                </CardContent>
     </Card>
  )
}

export default Experience