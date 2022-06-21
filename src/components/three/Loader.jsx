import { Html, useProgress } from '@react-three/drei'

export default function Loader() {
  const { progress } = useProgress()
  return <Html center style={{background:'black',color:'white',width:'100vw',height:'90vh',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'25px',marginTop:'10vh'}}>{progress} % loaded</Html>
}