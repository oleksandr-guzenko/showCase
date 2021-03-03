import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    padding: 0 1.25rem 5rem 1.25rem;
  }

  @media screen and (min-width: 576px) {
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem 5rem 2rem;
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const AboutInfoContainer = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: max-content;

  @media screen and (max-width: 576px) {
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 992px) {
    margin-right: 5rem;
    margin-bottom: 0;
  }
`;

export const AboutTitle = styled.div`
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.7rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #0a043c;

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

export const AboutDesc = styled.p`
  padding: 20px 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-align: justify;
`;

export const AboutImageContainer = styled.div`
  flex: 5;
  width: 100%;
`;

export const AboutImage = styled.img`
  width: 100%;

  border-radius: 10px;
  box-shadow: 0px 30px 10px -15px rgb(10 4 60 / 50%);

  @media screen and (max-width: 576px) {
    height: 12rem;
  }

  @media screen and (min-width: 576px) {
    height: 20rem;
  }

  @media screen and (min-width: 768px) {
    height: 22rem;
  }
`;

export const AboutBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  padding: 6rem 0;

  @media only screen and (max-width: 576px) {
    padding: 4rem 0.625rem;
  }
`;

export const AboutBannerTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  text-align: center;

  @media only screen and (max-width: 576px) {
    font-size: 2rem;
  }
`;

export const AboutBannerDesc = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 1.3rem;
  text-align: center;
`;
