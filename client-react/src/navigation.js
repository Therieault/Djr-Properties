import React from 'react';
import {Route, Link} from 'react-router-dom';
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
import Application from './components/application'


const Navigation = () => {
    return (
      <div>
        <Navbar>
          <NavbarHeader>
            <NavbarBrand> DJR Properties </NavbarBrand>
          </NavbarHeader>
          <Nav>
            <NavItem href='/'> Home </NavItem>
            <NavDropdown title = "Buildings" id="basic-nav-dropdown">
              <MenuItem href='/austinstreet'> Austin Street </MenuItem>
              <MenuItem href='/clintonstreet'> Clinton Street </MenuItem>
              <MenuItem href='/eaststreet'> East Street </MenuItem>
            </NavDropdown>
            <NavItem href='/apartments'> Availability </NavItem>
            <NavItem href='/apply'> Apply Now </NavItem>
            <NavItem href='/contact'> Contact Us </NavItem>
            <NavItem href='/application'> Application </NavItem>

          </Nav>
        </Navbar>

        <Route path ='/' component={Home}/>
        <Route exact path='/austinstreet' component={AustinStreet} />
        <Route exact path='/clintonstreet' component={ClintonStreet} />
        <Route exact path='/eaststreet' component={EastStreet} />
        <Route exact path='/apartments'component={Apartments} />
        <Route exact path='/apply' component={Apply} />
        <Route exact path='/application' component={Application} />
      </div>
    )
}

export default Navigation;
