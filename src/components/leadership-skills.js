import { Link } from 'react-router-dom';
import React from 'react';
import leadership from '../images/leadership.jpeg'

const Index = () => (
    <div className="col-12">
    <h4>We develop management and leadership skills using the following structure:</h4>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
    <img alt="" src={leadership}/></div>
    </div>
);

export default Index;
