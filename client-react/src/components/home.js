import React from 'react';
import Button from 'react-bootstrap/lib/Button'
import {Route} from 'react-router-dom';
import Apply from './apply'

const Home = () => {
  return (
    <div>
      <h1 className="title"> DJR Properties, LLC </h1>
      <div className="home-container">
        <div>
          <img src="http://via.placeholder.com/1200x400"/>
        </div>
        <div className='apply-button-container' >
          <Button href='/apply' bsSize='large' bsStyle='primary'> APPLY NOW </Button>
          <Route exact path='/apply' component={Apply} />
        </div>
        <div className='about-us'>
          <h3> About DJR Properties </h3>
          <p> DJR Properties is a family owned and run company providing affordable and quality housing in the New Britain, CT Area.
          Established in 2017, we at DJR are dedicated to bringing you safe, reliable, and comfortable living for years to come. </p>
        </div>
      </div>
    </div>
  )
};

export default Home;
