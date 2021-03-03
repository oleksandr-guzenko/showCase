import React from "react";
import { Ban, Banbutton, Bandesc, Bantitle } from "./BannerElements";

const Banner = () => {
  return (
    <>
      <Ban>
        <Bantitle>
          Analisis Pengujian Laboratorium <br />
          SMKN TI Pontianak
        </Bantitle>
        <Bandesc>
          Misi kami adalah menghadirkan inspirasi, inovasi, dan membantu dunia
          membuka kreativitas
        </Bandesc>
        <Banbutton to='products' spy={true} smooth={true}>
          Explore Products Now
        </Banbutton>
      </Ban>
    </>
  );
};

export default Banner;
