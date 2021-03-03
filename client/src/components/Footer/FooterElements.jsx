import styled from "styled-components";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

export const FooterContainer = styled.div`
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px -20px 10px -15px rgb(10 4 60 / 20%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 576px) {
    padding: 3.125rem 1.25rem 1.25rem 1.25rem;
  }

  @media screen and (min-width: 576px) {
    padding: 3.125rem 2rem 1.25rem 2rem;
  }
`;

export const Brandname = styled.h1`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.8rem;
`;

export const FooterWebDescContainer = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 992px) {
    width: 50%;
  }
`;

export const FooterWebSosmedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const FooterWebDesc = styled.p`
  margin: 0.625rem 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.75rem;
`;

export const FooterWebCopyright = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  text-align: justify;
`;

export const FooterWebSosmedFacebook = styled(FaFacebookSquare)`
  font-size: 2rem;
  color: #0a043c;
  margin-right: 1.5rem;
  cursor: pointer;
  transition: all 0.5s;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const FooterWebSosmedInstagram = styled(FaInstagramSquare)`
  font-size: 2rem;
  color: #0a043c;
  margin-right: 1.5rem;
  cursor: pointer;
  transition: all 0.5s;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const FooterWebSosmedYoutube = styled(FaYoutube)`
  font-size: 2rem;
  color: #0a043c;
  margin-right: 1.5rem;
  cursor: pointer;
  transition: all 0.5s;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const FooterWebSosmedMail = styled(FaEnvelope)`
  font-size: 2rem;
  color: #0a043c;
  cursor: pointer;
  transition: all 0.5s;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }
`;
