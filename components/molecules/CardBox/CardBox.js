import react from "react";
import Image from 'next/image';
import { CardBoxWrapper, DescriptionWrapper, ImageWrapper } from "./CardBox.styled";

const CardBox = () => {
  return (
    <CardBoxWrapper>
      <ImageWrapper>
        <Image src={'https://www.visitfinland.com/.imaging/mte/visit-finland-theme/xlUpW/dam/vf/Sauna/Lahti_Sauna_Lehmonkarki_by_Julia_Kivela_High_res__MG_4736.jpg/jcr:content/Lahti_Sauna_Lehmonkarki_by_Julia_Kivela_High_res__MG_4736.jpg'} alt={'image'} />
      </ImageWrapper>
      <DescriptionWrapper></DescriptionWrapper> 
    </CardBoxWrapper>
  )
}