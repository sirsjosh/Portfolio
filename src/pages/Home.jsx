import React, { useEffect,useState } from 'react'
import {useNavigate} from "react-router-dom";
import  {HomeContainer,InnerContainer,Line,Button}  from '../components/styles/styles'

import Modal from 'react-bootstrap/Modal';
import Resume from '../assets/img/Resume.pdf'
import CoverLetter from '../assets/img/CoverLetter.pdf'

import { FaLinkedin,FaInstagram } from 'react-icons/fa';
import { AiOutlineWechat } from 'react-icons/ai';
import { useTranslation } from "react-i18next";

function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () =>setShow(true);

    const navigate=useNavigate();
    const { t } = useTranslation();

    useEffect(()=>{
        new Typewriter('#typewriter', {
            strings: ['React JS', 'D3 JS','THREE JS'],
            autoStart: true,
            cursor:'',
            loop:true
          });
    },[])

    const styles={
        modal:{background:'white',position:'absolute',top:'25vh',left:'25vw',height:'50vh',borderRadius:'10px'
      },
      header:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
      title:{
        display:'flex',
        alignItems:'center',
        textAlign:'center'
      },
      img:{
        height:'40vh'
      },
      btn:{
        background: '#7bd265',
        border:'none',
        width:'50%',
        height:'5vh'
      },
      footer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      },
      ul:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        listStyleType:'none',
         height:'10vh',
         marginTop:'10vh',
         width:'100%'
      },
      li:{
        marginLeft:'50px',
        cursor:'pointer'
      },
      a:{
        textDecoration:'none',
        color:'white',
        display: 'flex',
        alignItems:'center'
      }
    
      }

  return (
    <HomeContainer id='intro'>
        <InnerContainer>
            <div className="left">
                <div className="imageContainer">
                    <img src='https://res.cloudinary.com/dxxx1wdbm/image/upload/v1655502905/portfolio/Josh2_qzljkz.png' alt='Farai Joshua Hoko'/>
                </div>
                <h2 style={{fontFamily:`'Tenor Sans', sans-serif`,fontWeight:'100',fontSize:'40px'}}>Joshua Farai Hoko</h2>
                <p style={{fontSize:'25px'}}>{t('FrontEnd')}</p>
                <Button className='email' onClick={() => window.open('mailto:hokojoshua@gmail.com')} style={{marginBottom:'10px'}}>{t('Email')}</Button>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2 style={{fontFamily:`'Tenor Sans', sans-serif`,fontWeight:'100',fontSize:'30px'}}>{t('About')}</h2>
                    <Line></Line>
                    <p>{t('intro')}
                    </p>
                    <h3 style={{fontFamily:`'Tenor Sans', sans-serif`,fontWeight:'100',fontSize:'30px',marginTop:'5vh'}}>{t('FrontEnd')} : <span id='typewriter' style={{fontWeight:'400'}}></span></h3>
                    <div style={{display:'flex',justifyContent:'space-around',marginTop:'5vh'}}>
                        <Button style={{background:'transparent',color:'#000000',border:'1px solid #000000',fontWeight:'600'}} onClick={()=>window.location.href = Resume}>{t('Resume')}</Button>
                        <Button style={{background:'transparent',color:'#000000',border:'1px solid #000000',fontWeight:'600'}} onClick={()=>window.location.href = CoverLetter}>{t('Letter')}</Button>
                    </div>
                   
                    <ul style={styles.ul}>
                        <li style={styles.li} onClick={()=> window.open('https://www.linkedin.com/in/joshua-farai-hoko-ab5430114/', '_blank')}><FaLinkedin style={{fontSize:'40px'}}/></li>
                        <li style={styles.li} onClick={handleShow}><AiOutlineWechat style={{fontSize:'40px'}}/></li>
                        <li style={styles.li} onClick={()=> window.open('https://www.instagram.com/iam_josh_hoko/', '_blank')}><FaInstagram style={{fontSize:'40px'}}/></li>
                    </ul>
                    </div>
                </div>

                <Modal style={styles.modal} show={show} onHide={handleClose}>
                            <Modal.Header style={styles.header}>
                            <Modal.Title style={styles.title}>Scan To Add Wechat</Modal.Title>
                            </Modal.Header>
                            <Modal.Body><img style={styles.img} src='https://res.cloudinary.com/dxxx1wdbm/image/upload/v1655502905/portfolio/wechat_yctzgb.jpg'/></Modal.Body>
                            <Modal.Footer style={styles.footer}>
                            <Button style={styles.btn} variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>

            </InnerContainer>  
    </HomeContainer>
  )
}

export default Home