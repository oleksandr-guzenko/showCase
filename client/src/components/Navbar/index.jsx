import React, { useState } from "react";
import {
  Bars,
  Logo,
  Nav,
  Navbutton,
  Navlink,
  Navlogo,
  Navlogolink,
  Navmenu,
} from "./NavbarElements";
import logo from "../../images/logo.png";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Nav>
        <Navlogo>
          <Navlogolink to='/home'>
            <Logo src={logo} />
          </Navlogolink>
        </Navlogo>
        <Bars onClick={() => setOpen(!open)} />
        <MobileNavbar open={open} />
        <Navmenu>
          <Navlink exact={true} to='/'>
            Home
          </Navlink>
          <Navlink exact={true} to='/about'>
            About us
          </Navlink>
          <Navlink exact={true} to='/contact'>
            Contact us
          </Navlink>
        </Navmenu>
        <Navbutton exact={true} to='/'>
          Admin Login
        </Navbutton>
      </Nav>
    </>
  );
};

export default Navbar;
