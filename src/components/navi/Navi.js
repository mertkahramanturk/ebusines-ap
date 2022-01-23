import React, { Component } from "react";
import {
  Navbar,
  NavLink,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  UncontrolledDropdown,
  NavbarText,
} from "reactstrap";
import aybulogo from "../../images/a.png"
export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar  style={{backgroundColor: "#041C32"}} expand="md" light>
          <NavbarBrand href="/"><img src={aybulogo} style={{width:"50%"}}  /> </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav  className="me-auto" navbar>
            <NavItem>
                <NavLink style={{color:"white"}} href="#">
                  Class Notes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:"white"}} href="#">About Class</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:"white"}} href="https://avesis.aybu.edu.tr/tuncmedeni">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText style={{color:"white"}}>E-Business Class</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
