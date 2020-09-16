import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap'

class NavigationBar extends React.Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
  render() {
    return (
      <header>
          <div className="main-menu">
            <div className="container">
            <Navbar color="light" light expand="lg">
                <NavbarBrand href="/">
                    <img src="/images/logo.png" alt="logo" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="navbar-item" active>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem className="navbar-item">
                            <NavLink href="/components/">Shop</NavLink>
                        </NavItem>
                        <NavItem className="navbar-item">
                            <NavLink href="/components/">About</NavLink>
                        </NavItem>
                        <NavItem className="navbar-item">
                            <NavLink href="/components/">FAQ</NavLink>
                        </NavItem>
                        <NavItem className="navbar-item">
                            <NavLink href="/components/">Login</NavLink>
                        </NavItem>
                    </Nav>
                    <div className="cart my-2 my-lg-0">
                            <span>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            <span className="quntity">3</span>
                    </div>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search here..." aria-label="Search" />
                            <span className="fa fa-search"></span>
                        </form>
                </Collapse>
            </Navbar>
            </div>
        </div>
      </header>
    )
  }
}

export default NavigationBar