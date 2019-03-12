import { NavLink } from 'react-router-dom';
import React from 'react';
import logo from '../images/fcp.png'

const Index = () => (
    <div className="col-12">
    <div style={{ width: '20rem', padding:'0.25rem', margin:'0 auto'}}>
      <img style={{ maxWidth: 300, margin: '0 auto'   }} alt="logo" src={logo}/>
    </div>
    <div style={{color: '#565347', textAlign: 'center'}}>
      <h3> Managing Motivation in Business </h3>
      <h3> The Fargus Consulting Partnership (FCP) is a family business. We specialise in measuring and improving motivation in business. Our approach is detailed in our Executive Briefing entitled Measuring and Improving Employee Motivation available here. </h3>
    </div>
    </div>
);

export default Index;
