import React from 'react'
import { US } from 'country-flag-icons/react/3x2'
import { CN } from 'country-flag-icons/react/3x2'
import {Nav,NavLogo,NavMenu,List,ListItem} from '../styles/styles'
import {
  Link,useNavigate
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';


function Navbar() {
  
  const { t } = useTranslation();
  const navigate=useNavigate();
  const style={textDecoration:'none',color:'white',margin:'0 10px'}

  return (
    <Nav>
      <NavLogo >
        <img onClick={()=>navigate('/')} src='https://res.cloudinary.com/dxxx1wdbm/image/upload/v1655502904/portfolio/1_jrh4dw.png'/>
        {/* <NavHeader onClick={()=>navigate('/')}>DevelopedByJosh</NavHeader> */}
      </NavLogo>
      <NavMenu >
        <List >
          <ListItem ><Link style={style} to='/'>{t('Home')}</Link></ListItem>
          <ListItem id="education" ><Link style={style} to='/education'>{t('Education')}</Link></ListItem>
          <ListItem id="projects"><Link style={style} to='/projects'>{t('Projects')}</Link></ListItem>
          <ListItem id="expreince" ><Link style={style} to='/experience'>{t('Experience')}</Link></ListItem>
          <ListItem onClick={()=>i18next.changeLanguage('en')} style={{cursor:'pointer',fontSize:'12px'}}><US/>EN</ListItem>
          <ListItem onClick={()=>i18next.changeLanguage('cn')} style={{cursor:'pointer',fontSize:'12px'}}><CN/>CN</ListItem>
        </List>
      </NavMenu>
    </Nav>
  )
}

export default Navbar