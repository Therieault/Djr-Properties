import React from 'react'
import {Route, Link} from 'react-router-dom';
import Home from './home';
import Apartments from './apartments';
import AustinStreet from './buildings/austinstreet';
import ClintonStreet from './buildings/clintonstreet';
import EastStreet from './buildings/eaststreet';
import Apply from './apply';
import ContactUs from './contact';

const Footer = () => {
  return (
    <div>
      < hr className='line' />
      <div>
          <h1> DJR Properties, LLC </h1>
          <Link to='/'> Home </Link>
          <Link to='/austinstreet'> Austin Street </Link>
          <Link to='/clintonstreet'> Clinton Street </Link>
          <Link to='/eaststreet'> East Street </Link>
          <Link to='/apartments'> Apartments </Link>
          <Link to='/apply'> Apply Online </Link>
          <Link to='/contact'> Contact DJR Properties, LLC </Link>
        </div>
        <Route exact path ='/' component={Home}/>
        <Route exact path='/austinstreet' component={AustinStreet} />
        <Route exact path='/clintonstreet' component={ClintonStreet} />
        <Route exact path='/eaststreet' component={EastStreet} />
        <Route exact path='/apartments'component={Apartments} />
        <Route exact path='/apply' component={Apply} />
        <Route exact path='/contact' component={ContactUs} />
    </div>
  )
};

export default Footer;
