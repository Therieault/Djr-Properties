import React from 'react';
import Application from './application';
import {Route, Link} from 'react-router-dom';



const Apply = () => {
  return (
    <div>
      Application requirements here <br />
      <button> <Link to='/application'> Apply Now </Link> </button>
      <Route path='/application' component={Application}/>
    </div>
  )
};

export default Apply;
