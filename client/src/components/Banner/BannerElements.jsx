import styled from "styled-components";
import { Link } from "react-scroll";

export const Ban = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0;

  @media screen and (max-width: 576px) {
    padding: 4rem 1.25rem;
  }
`;

export const Bantitle = styled.h1`
  display: flex;
  align-item: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 2.6rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const Bandesc = styled.h4`
  display: flex;
  text-align: center;
  align-item: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  margin: 0.625rem 0 1.875rem 0;

  @media screen and (max-width: 576px) {
    width: 100%;
  }

  @media screen and (min-width: 576px) {
    width: 80%;
  }

  @media screen and (min-width: 992px) {
    width: 60%;
  }

  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;

export const Banbutton = styled(Link)`
  background: #0a043c;
  padding: 10px 15px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.7);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  transition: all 0.3s ease-in;

  &:hover {
    background: #5e6efe;
  }
`;
