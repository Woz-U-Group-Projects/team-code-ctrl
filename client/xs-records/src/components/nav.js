import React, { Component } from 'react';
import { Fragment } from 'react';
import { Nav, Navbar, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';

class AppNav extends Component {

  render() {
    return (
      <Fragment>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">XS-Records</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <LinkContainer to="/dashboard">
              <NavItem>
                {/* <NavLink className="font-weight-bold">Dashboard</NavLink> */}
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>
                <NavLink className="font-weight-bold">Login</NavLink>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/register">
              <NavItem>
                <NavLink className="font-weight-bold">Register</NavLink>
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>
      </Fragment>
    )
  }
}

export default AppNav;
