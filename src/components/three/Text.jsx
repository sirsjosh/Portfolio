import {Text} from '@react-three/drei'

import { useTranslation } from "react-i18next";

function TextElement({text,position,size}) {

  const { t } = useTranslation();

  return (
    <Text
        position={position}
        scale={[10, 10, 10]}
        color="#000000" // default
        anchorX="center" // default
        anchorY="middle" // default
        fontSize={size}
      >
       {text}
      </Text>
  )
}

export default TextElement