import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/home';
import Apartments from './components/apartments.js';
import AustinStreet from './components/buildings/austinstreet';
import ClintonStreet from './components/buildings/clintonstreet';
import EastStreet from './components/buildings/eaststreet';
import Apply from './components/apply';
import ContactUs from './components/contact';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import MenuItem from'react-bootstrap/lib/MenuItem';
import Application from './components/application';


const Navigation = () => {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <NavbarHeader>
            <NavbarBrand> <i className="fas fa-home"></i>DJR Properties, LLC </NavbarBrand>
            <Navbar.Toggle />
          </NavbarHeader>
        <Navbar.Collapse>
          <Nav>
            <NavItem href='/'> Home </NavItem>
            <NavDropdown title = "Buildings" id="basic-nav-dropdown">
              <MenuItem href='/austinstreet'> Austin Street </MenuItem>
              <MenuItem href='/clintonstreet'> Clinton Street </MenuItem>
              <MenuItem href='/eaststreet'> East Street </MenuItem>
            </NavDropdown>
            <NavItem href='/apartments'> Apartments </NavItem>
            <NavItem href='/apply'> Apply Now </NavItem>
            <NavItem href='/contact'> Contact Us </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

        <Route exact path ='/' component={Home}/>
        <Route exact path='/austinstreet' component={AustinStreet} />
        <Route exact path='/clintonstreet' component={ClintonStreet} />
        <Route exact path='/eaststreet' component={EastStreet} />
        <Route exact path='/apartments'component={Apartments} />
        <Route exact path='/apply' component={Apply} />
        <Route exact path='/contact' component={ContactUs} />
        <Route exact path='/application' component={Application} />
      </div>
    )
}

export default Navigation;
