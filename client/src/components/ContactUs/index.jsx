import React from "react";
import {
  ContactBannerContainer,
  ContactBannerDesc,
  ContactBannerTitle,
  ContactContainer,
  ContactInfoAddress,
  ContactInfoAddressContainer,
  ContactInfoAddressIcon,
  ContactInfoContainer,
  ContactInfoEmail,
  ContactInfoEmailContainer,
  ContactInfoEmailIcon,
  ContactInfoTitle,
  MapContainer,
} from "./ContactElements";
import Map from "../Map";

const ContactUs = () => {
  return (
    <>
      <ContactBannerContainer>
        <ContactBannerTitle>Hubungi Kami</ContactBannerTitle>
        <ContactBannerDesc>
          Analisis Pengujian Laboratorium SMKN TI Pontianak
        </ContactBannerDesc>
      </ContactBannerContainer>
      <ContactContainer>
        <MapContainer>
          <Map />
        </MapContainer>
        <ContactInfoContainer>
          <div>
            <ContactInfoTitle>Hubungi Kami</ContactInfoTitle>
          </div>
          <div>
            <ContactInfoAddressContainer>
              <div style={{ marginRight: "1rem" }}>
                <ContactInfoAddressIcon />
              </div>
              <div>
                <ContactInfoAddress>
                  Jl. Sulawesi dalam Nomor 31, Akcaya, Kecamatan Pontianak
                  Selatan, Kota Pontianak, Kalimantan Barat 78113
                </ContactInfoAddress>
              </div>
            </ContactInfoAddressContainer>
            <ContactInfoEmailContainer>
              <div style={{ marginRight: "1rem" }}>
                <ContactInfoEmailIcon />
              </div>
              <div>
                <ContactInfoEmail>aplsmkntiptk@gmail.com</ContactInfoEmail>
              </div>
            </ContactInfoEmailContainer>
          </div>
        </ContactInfoContainer>
      </ContactContainer>
    </>
  );
};

export default ContactUs;
