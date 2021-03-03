import React from "react";
import {
  Brandname,
  FooterContainer,
  FooterWebDescContainer,
  FooterWebSosmedContainer,
  FooterWebDesc,
  FooterWebCopyright,
  FooterWebSosmedFacebook,
  FooterWebSosmedInstagram,
  FooterWebSosmedYoutube,
  FooterWebSosmedMail,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWebDescContainer>
          <Brandname>APL Product Showcase</Brandname>
          <FooterWebDesc>
            APL Product Showcase merupakan sebuah website yang dibangun untuk
            menampilkan karya - karya yang telah dibuat oleh siswa - siswi
            Analisis Pengujian Laboratorium SMKN TI Pontianak.
          </FooterWebDesc>
        </FooterWebDescContainer>
        <FooterWebSosmedContainer>
          <FooterWebSosmedFacebook />
          <FooterWebSosmedInstagram />
          <FooterWebSosmedYoutube />
          <FooterWebSosmedMail />
        </FooterWebSosmedContainer>
        <FooterWebCopyright>
          &copy; 2021 APL SMKN TI Pontianak by Awang Praja Anugerah. All rights
          reserved.
        </FooterWebCopyright>
      </FooterContainer>
    </>
  );
};

export default Footer;
