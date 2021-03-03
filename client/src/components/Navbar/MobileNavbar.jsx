import React from "react";
import {
  MobileNav,
  MobileNavButton,
  MobileNavLink,
} from "./MobileNavbarElements";

const MobileNavbar = ({ open }) => {
  return (
    <>
      <MobileNav open={open}>
        <MobileNavLink exact={true} to='/'>
          Home
        </MobileNavLink>
        <MobileNavLink to='/about'>About us</MobileNavLink>
        <MobileNavLink to='/contact'>Contact us</MobileNavLink>
        <MobileNavButton to='/admin'>Admin Login</MobileNavButton>
      </MobileNav>
    </>
  );
};

export default MobileNavbar;
