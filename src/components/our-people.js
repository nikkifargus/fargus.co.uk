import React from 'react';
import logo from '../images/OPR_Logo.png'

const Index = () => (
  <div className="">
    <div className="row">
      <div className="col-lg-4 offset-lg-2 col-sm-12">
        <img alt="logo" style={{width: '100%'}} src={logo}/>
      </div>
      <div className="col-lg-5 col-sm-12" style={{ margin: 'auto 0'}}>
        <p> - During strategic planning </p>
        <p> - Before transformation </p>
        <p> - Before mergers and acquisitions </p>
        <p> - Vist <a href="http://www.ourpeoplereview.com">ourpeoplereview.com</a> for more information</p>
      </div>
    </div>
  </div>
);

export default Index;
