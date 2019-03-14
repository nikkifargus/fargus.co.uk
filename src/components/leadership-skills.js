import { Link } from 'react-router-dom';
import React from 'react';
import leadership from '../images/leadership.jpeg'

const Index = () => (
    <div className="col-12">
    <h4>
    <Link
      to="/what-we-do/"
      style={{
        color: `#565347`,
      }}
    >
    BACK
    </Link>
  </h4>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
    <img alt="" src={leadership}/></div>
    </div>
);

export default Index;
