import React from 'react';
import Application from './application';
import {Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button'



const Apply = () => {
  return (
    <div className="apply-container">
      <div>
        <h1 className="title">Application Process</h1>
        <Button className='apply-rent-calculation'>
          <a href="https://www.zillow.com/rent-affordability-calculator/"> Need help calculating <br /> your apartment budget? </a>
        </Button>
        <div className="apply-steps-container">
          <h4> Steps to apply </h4>
          <ol>
            <li>Fill out application form completely.</li>
            <li>Provide copies of last two pay stubs for each adult.</li>
            <li>Provide a copy of your last W2.</li>
            <li>Provide a copy of your credit score from any major credit agency or from creditkarma.com.</li>
            <li>Return application online or in paper and supporting materials to landlord in paper or by email.</li>
            <li>Landlord will validate your references, employment, etc. Landlord will also check that you qualify for the rent by checking your debt to income ratio. The rent should be no more than 40% of your gross income.</li>
            <li>Landlord will contact you with any questions and send you a copy of the lease.</li>
            <li>If approved, landlord requires first and last month’s rent plus a security deposit. This equals the rent amount times 3.</li>
            <li>Upon signing, landlord requests a copy of your driver’s license and social security card.</li>
          </ol>
          <div className='apply-notes-container'>
            <p> Pease note: </p>
            <p> We do accept Section 8 applicants. </p>
            <p> No pets permitted. </p>
          </div>
        </div>
      </div>
      <br />
      <div className='apply-button-container'>
       <Link to='/application' ><Button bsStyle='primary' className='apply-button'> Apply online now </Button> </Link>
      <Route path='/application' component={Application}/>
      </div>
    </div>
  )
};

export default Apply;
