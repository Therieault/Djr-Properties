import React from 'react';
import {Route, Link} from 'react-router-dom';


const ClintonStreet = () => {
  return (
    <div>
    <h1 className="title">Clinton Street</h1>
    <div>
    </div>
      <div className='building-description'>
        <h3> About Clinton Street</h3>
        <ul>
          <li>Close to Route 9</li>
          <li>Near Smith Elementary and Roosevelt Middle Schools</li>
          <li>Recently renovated and updated</li>
          <li>'L' shaped kitchen</li>
          <li>3 bedrooms in all units</li>
          <li>Laundry hookups in basement</li>
          <li>Off Street Parking</li>
          <li>Gas not included in rent</li>
          <li>Electricity not included in rent</li>
          <li>Water included with rent </li>
        </ul>
        <Link to='/apply'> Apply to Clinton Street today! </Link>
        <Route exact path='/apply' />
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10632.31918354884!2d-72.81055496282616!3d41.67411729496054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b3d5782ff1f7%3A0x188e41886b9a5575!2s236+Clinton+St%2C+New+Britain%2C+CT+06053!5e0!3m2!1sen!2sus!4v1526233463011" width="600" height="450" frameBorder="0" allowFullScreen></iframe>
    </div>
  )
};

export default ClintonStreet;
