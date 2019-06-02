import React, { Component, PropTypes} from 'react';
import { Fragment } from 'react';
import { Collapse, NavbarToggler, Nav, Navbar, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';


class AppNav extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Fragment>
        <Navbar color="faded" light expand="md" sticky="top">
          <NavbarBrand href="/" className="navBrand" >XS-Records</NavbarBrand>
          <NavbarToggler onClick={ this.toggleNavbar } className="mr-2 navBar" />
          <Collapse isOpen={ !this.state.collapsed } navbar>
            <Nav className="ml-auto navbar-fixed-top" fixed navbar>
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
          </Collapse>
        </Navbar>
      </Fragment>
    )
  }
}

export default AppNav;
