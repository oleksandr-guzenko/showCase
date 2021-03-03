import React from "react";
import { MapFrame } from "./MapElements";

const Map = () => {
  return (
    <>
      <MapFrame
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8170989356963!2d109.32505701386323!3d-0.044832335542114105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59d7b6a4ce4f%3A0x561a2f9439fe1e2b!2sSMK-SMTI%20Pontianak!5e0!3m2!1sid!2sid!4v1613733856061!5m2!1sid!2sid'
        frameborder='0'
        style={{ border: 0 }}
        allowfullscreen=''
        aria-hidden='false'
        tabindex='0'></MapFrame>
    </>
  );
};

export default Map;
