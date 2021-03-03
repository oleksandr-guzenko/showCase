import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  padding: 1.5rem 3.125rem;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    padding: 1.5rem 0.625rem;
  }

  @media screen and (min-width: 576px) {
    padding: 1.5rem 1rem;
  }

  @media screen and (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Navbutton = styled(Link)`
  padding: 10px;
  cursor: pointer;
  background: #0a043c;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.7);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-item: center;
  box-sizing: border-box;
  transition: all 0.3s ease-in;

  &:hover {
    background: #5e6efe;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    flex: 2;
  }

  @media screen and (min-width: 992px) {
    flex: 1.5;
  }
`;

export const Navlink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #0a043c;
  text-decoration: none;
  display: flex;
  padding: 0.3rem;
  margin: 0 0.7rem;
  backdrop-filter: none;
  position: relative;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &::after {
    position: absolute;
    bottom: 0;
    content: "";
    width: 0px;
    height: 3px;
    background: #0a043c;
    transition: width 0.3s;
    border-radius: 5px;
  }

  &:hover::after {
    width: calc(100% - 0.5rem);
    transition: width 0.3s;
  }

  &.active::after {
    color: #fff;
    width: calc(100% - 0.5rem);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #3f3f44;
  padding: 0.3rem;
  border: 3px solid #3f3f44;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

export const Navlogo = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

export const Navlogolink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 35px;
  height: 35px;
`;

export const Navmenu = styled.div`
  flex: 7;
  display: flex;
  justify-content: flex-start;
  margin-left: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
