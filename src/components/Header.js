import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import BGDLogo from "../app/assets/img/BGD_logo_button.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar dark color="black" sticky="top" expand="md" className="flex-column">
      <NavbarBrand href="/">
        <img src={BGDLogo} alt="BGDLogo" style={{ scale: "69%" }} />
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className="me-2" />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem style={{ paddingLeft: 15 }}>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem style={{ paddingLeft: 15 }}>
            <NavLink className="nav-link" to="/games">
              Games
            </NavLink>
          </NavItem>
          <NavItem style={{ paddingLeft: 15 }}>
            <NavLink className="nav-link" to="/studios">
              Studios
            </NavLink>
          </NavItem>
          <NavItem style={{ paddingLeft: 15 }}>
            <NavLink className="nav-link" to="/artists">
              Artists
            </NavLink>
          </NavItem>
          <NavItem style={{ paddingLeft: 15 }}>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem style={{ paddingLeft: 15 }}>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
