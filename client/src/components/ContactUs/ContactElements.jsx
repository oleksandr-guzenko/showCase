import styled from "styled-components";
import { MdLocationCity, MdEmail } from "react-icons/md";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding: 0rem 1.25rem 5rem 1.25rem;
  }

  @media screen and (min-width: 576px) {
    flex-direction: column;
    padding: 5rem 2rem;
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const ContactBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0;

  @media screen and (max-width: 576px) {
    padding: 4rem 1.25rem;
  }

  @media screen and (min-width: 576px) {
    padding: 4rem 2rem;
  }
`;

export const ContactBannerTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  text-align: center;

  @media only screen and (max-width: 576px) {
    font-size: 2rem;
  }
`;

export const ContactBannerDesc = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 1.3rem;
  text-align: center;
`;

export const MapContainer = styled.div`
  flex: 50%;

  @media screen and (max-width: 576px) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 576px) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 0;
    margin-right: 2.5rem;
  }
`;

export const ContactInfoContainer = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ContactInfoTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 20px 40px;
  background: none;
  border: none;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 2px solid #000;
    transition: transform 0.2s;
  }

  &:after {
    transform: translate(3px, 3px);
  }

  &:before {
    transform: translate(-3px, -3px);
  }

  &:hover::after {
    transform: translate(0);
  }

  &:hover::before {
    transform: translate(0);
  }
`;

export const ContactInfoAddressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ContactInfoEmailContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactInfoAddressIcon = styled(MdLocationCity)`
  font-size: 3rem;
`;

export const ContactInfoEmailIcon = styled(MdEmail)`
  font-size: 3rem;
`;

export const ContactInfoAddress = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
`;

export const ContactInfoEmail = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
`;
