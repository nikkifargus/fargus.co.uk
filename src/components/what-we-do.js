import { NavLink } from 'react-router-dom';
import React from 'react';
import OpinionSurveys from '../images/OpinionSurveys.png'
import LMSkills from '../images/LMSkills.png'
import logo from '../images/logo.png'
const Index = () => (
  <div className="col-12">
  <p>
    We can help you in the following ways.<br/>
    Please select the service that you are most interested in for more information:
  </p>
  <a href="/client-list/">
    <div className="row">
      <div className="col-3">
        <img alt="" src={OpinionSurveys} style={{ width: '100%' }}/>
      </div>
      <div className="col-9">
        <p>We design and implement employee surveys. </p>
      </div>
    </div>
    </a>
    <a href="/client-list/">
    <div className="row">
      <div className="col-3">
        <img alt="" src={LMSkills} style={{ width: '100%' }}/>
      </div>
      <div className="col-9">
        <p>We develop management and leadership skills. </p>
      </div>
    </div>
    </a>
    <a href="/client-list/">
    <div className="row">
      <div className="col-3">
        <img alt="" src={logo} style={{ width: '100%' }}/>
      </div>
      <div className="col-9">
        <p>We assess the quality of human capital.</p>
      </div>
    </div>
    </a>
  </div>
);

export default Index;
