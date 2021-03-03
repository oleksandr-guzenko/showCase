import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const MobileNav = styled.nav`
  width: 100%;
  display: none;
  padding: 1rem 0 0 0;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;

  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open ? "none" : "block")};
  }
`;

export const MobileNavLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  display: flex;
  text-decoration: none;
  padding: 0.8rem 0.5rem;
  border-radius: 10px;
  color: #000;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px -0px 10px -15px rgb(10 4 60 / 20%);
  }

  &.active {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 20px 10px -15px rgb(10 4 60 / 20%);
  }
`;

export const MobileNavButton = styled(Link)`
  flex: 1;
  padding: 10px;
  margin-top: 0.8rem;
  background: #0a043c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-item: center;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  box-sizing: border-box;
  transition: all 0.3s ease-in;

  &:hover {
    background: #5e6efe;
  }
`;
