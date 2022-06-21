import styled from 'styled-components'

export const Container=styled.div`
    position:absolute;
    top:80vh;
    left:0;
    z-index:100;
    width:100vw;
    height:10vh;
    display:flex;
    justify-content:space-around;
    align-items:center;
    pointer-events: none;
`

export const Button=styled.button`
    width:12vw;
    height:6vh;
    border:none;
    cursor: pointer;
  pointer-events: all;
  background: #000000;
    color:#ffffff;
    font-family: 'Jost', sans-serif;
    font-size:15px;
    font-weight:600;

    @media (max-width: 840px) {
      width:30vw;
      }
`

export const Nav=styled.nav`
    position: absolute;
    left:0;
    right:0;
    background: #000000;
    z-index: 100;
    height: 8vh;
    width: 100vw;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family:'Tenor Sans', sans-serif;
    box-shadow: 10px 5px 5px black;

    @media (max-width: 840px) {
      flex-direction:column;
      height:15vh;
      }
  `
  export const NavLogo=styled.div`
    height:100%;
    cursor: pointer;
    display:flex;
    align-items:center;

    img{
      width:13vw;
      margin-left:15px;

      @media (max-width: 840px) {
        width:45vw;
      margin-left:0;
      margin-top:10px;
      }
    }
    @media (max-width: 840px) {
      margin:0;
      height:50%;
      }
  `
  
  export const NavMenu=styled.div`
    margin-right: 10px;
    width:60vw;
    
    @media (max-width: 840px) {
      width:70vw;
      margin:0;
      width:100vw;
      }
  `
  
export const List=styled.ul`
    display: flex;
    justify-content: space-around;
    list-style-type: none;

    @media (max-width: 840px) {
      width:100%;
      padding:0;
      }

  `
  
  export const ListItem=styled.li`
    cursor: pointer;
    font-family:'Tenor Sans', sans-serif;
    @media (max-width: 840px) {
      font-size:10px;
      }
  `
  export const HomeContainer=styled.div`
   
    color:black;
    position:fixed;
    overflow-y:scroll;
    overflow-x:hidden;
    height:100vh;
    background-size: cover;

    .left {
    flex: 0.4;
    display: flex;
    flex-direction:column;
    align-items: center;
    background:white;

    

    .imageContainer {
      margin-top:8vh;
      width: 100%;
      overflow: hidden;

      @media (max-width: 840px) {
        margin-top:15vh;
      }
      
      img {
        width: 100%;
        height:auto;
      }
    }
  }

  .right {
    flex: 0.6;
    background:#B4D7FF;
    position: relative;
    display:flex;
    justify-content:center;
   

    .wrapper {
      width:80%;
      height: 100%;
      
      display: flex;
      flex-direction: column;
      justify-content: center;
     

      @media (max-width: 840px) {
        padding: 0 10px;
      }      

      h1 {
        font-size: 60px;
        margin: 10px 0;
      }
      h2 {
        font-size: 35px;
        @media (max-width: 840px) {
          font-size: 25px;
      }   
      }
      h3 {
        font-size: 30px;
        @media (max-width: 840px) {
          font-size: 20px;
      }   

        span {
          font-size: inherit;
          color: #355EA3;
        }
      }
    }

    a {
      position: absolute;
      bottom: 10px;
      left: 40%;

      img {
          animation: arrowBlink 2s infinite;
          height: 10vh;
          transform: rotate(90deg);
      
      }

      @keyframes arrowBlink {
        100% {
          opacity: 0;
        }
      }
    }
  }
 `



export const InnerContainerProjects=styled.div`
   width:100vw;
  display:flex;
  background:#B4D7FF;

  .leftContainer{
    display:flex;
    width:50%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:10px;
      
  }

  .rightContainer{
    display:flex;
    width:50%;
    flex-direction:column;
    justify-content:center;
    padding:10px;

    h1{
      text-align:center;
    }

  }
 `
  
 export const InnerContainer=styled.div`
   width:100vw;
  min-height:100vh;
  background:rgba(0,0,0,0.6);
  display:flex;
  @media (max-width: 840px) {
       flex-direction:column;
      }

  .leftContainer{
    display:flex;
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:10px;

    @media (max-width: 840px) {
        width:100%;
        margin-top:10vh;
      }
  }

  .rightContainer{
    display:flex;
    width:50%;
    display:flex;
    flex-direction:column;
    /* align-items:center; */
    justify-content:center;
    padding:10px;
    @media (max-width: 840px) {
        width:100%;
      }

    h1{
      text-align:center;
    }

  }
 `
  

  export const Card=styled.div`
    width:80vw;
    background:#B4D7FF;
    margin:10vh 0 5vh 0 ;
    box-shadow: 10px 5px 5px black;
    border: 1px solid black;

    @media (max-width: 840px) {
        width:90vw;
       height:75vh;
       margin-top:3vh;
      }
  `
  
  export const CardHeader=styled.div`
    border-bottom: 1px solid white;
    /* background:#000000; */
    height:10vh;
    display:flex;
    align-items:center;
    justify-content:center;

    @media (max-width: 840px) {
        h1{
          font-size:25px;
        }
      }
  `
  export const CardContent=styled.div`
    display:flex;
    /* background:#B4D7FF; */
    background:white;
    height:35vh;
    @media (max-width: 840px) {
        flex-direction:column;
        height:50vh;
      }
  `
export const Techs=styled.div`
  border-top: 1px solid white;
  height:20vh;
  display:flex;
  align-items:center;
  justify-content:space-around;
  @media (max-width: 840px) {
        
      }
`
export const Image=styled.img`
  width:50%;
  height:100%;
  object-fit: cover;
  @media (max-width: 840px) {
        width:100%;
      }
`
export const CardText=styled.p`
  width:50%;
  height:100%;
  padding:10px;

  @media (max-width: 840px) {
        font-size:12px;
        width:100%;
      }
`
 
export const Technologies=styled.div`
  width:10vw;
  display:flex;
  flex-direction:column;
  align-items:center;

  @media (max-width: 840px) {
        font-size:12px;
      }
`

export const NavHeader=styled.h3`
  
  font-family:'Tenor Sans', sans-serif;
  font-size:30px;
  cursor:pointer;
  margin:0;

  @media (max-width: 840px) {
        font-size:20px;
      }
`

export const Space=styled.div`
  @media (max-width: 840px) {
        height:15vh;
      }
`
export const Line=styled.div`
  width:100%;
  height:1px;
  background:#858B94;
  margin-top:5vh;
`