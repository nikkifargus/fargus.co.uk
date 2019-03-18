import React from 'react';
import logo from '../images/OPR_Logo.png'

const Index = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-5 offset-lg-1 col-sm-12">
        <img alt="logo" style={{width: '100%'}} src={logo}/>
      </div>
      <div className="col-lg-5 col-sm-12 align-middle">
        <p> - During strategic planning </p>
        <p> - Before transformation </p>
        <p> - Before mergers and acquisitions </p>
        <p> - Vist <a href="http://www.ourpeoplereview.com">ourpeoplereview.com</a> for more information</p>
      </div>
    </div>
  </div>
);

export default Index;
