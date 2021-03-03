import React from "react";
import {
  AboutBannerContainer,
  AboutBannerDesc,
  AboutBannerTitle,
  AboutContainer,
  AboutDesc,
  AboutImage,
  AboutImageContainer,
  AboutInfoContainer,
  AboutTitle,
} from "./AboutElements";
import guruapl from "../../images/guruapl.png";

const AboutUs = () => {
  return (
    <>
      <AboutBannerContainer>
        <AboutBannerTitle>Tentang Jurusan</AboutBannerTitle>
        <AboutBannerDesc>
          Analisis Pengujian Laboratorium SMKN TI Pontianak
        </AboutBannerDesc>
      </AboutBannerContainer>
      <AboutContainer>
        <AboutInfoContainer>
          <AboutTitle>Tentang Jurusan</AboutTitle>
          <AboutDesc>
            Analisis Pengujian Laboratorium (APL) merupakan salah satu
            kompetensi keahlian yang termasuk dalam Program Keahlian Teknik
            Kimia yang ditempuh selama 3 tahun masa belajar. Sebagai rumpun
            Bidang Keahlian Teknologi dan Rekayasa, kompetensi keahlian ini
            diharapkan dapat mencetak lulusan yang terampil dalam bekerja,
            utamanya berkaitan dengan hal-hal yang bernuansa kimia. <br />
            Oleh karena itulah, siswa pada kompetensi keahlian ini dibekali
            kompetensi Analisis Kuantitatif Konvensional, Mikrobiologi, Kimia
            Instrumen, Proksimat, Kimia Terapan, dan didukung kemampuan
            melahirkan produk kreatif dan kewirausahaan. <br />
            Selain itu, siswa yang menempuh kompetensi keahlian ini juga
            dibekali kompetensi Analisa Kimia Dasar, Teknik Dasar Pekerjaan
            Laboratorium Kimia, dan Mikrobiologi Dasar sebagai bekal bekerja
            maupun kuliah.
          </AboutDesc>
        </AboutInfoContainer>

        <AboutImageContainer>
          <AboutImage src={guruapl} />
        </AboutImageContainer>
      </AboutContainer>
    </>
  );
};

export default AboutUs;
