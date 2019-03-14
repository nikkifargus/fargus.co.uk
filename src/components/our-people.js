import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/OPR_Logo.png'

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
<div>
<h4 style={{
  color: `#565347`,
}}> Assessing the Quality of Human Capital </h4>
<div style={{
  display: 'flex',
  flexDirection: 'row',
}}>
  <div style={{
    width: '33.33%',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  }}>
  <p>
    - During strategic planning
  </p>
  <p>
    - Before transformation
  </p>
  <p>
    - Before mergers and acquisitions
  </p>
  </div>
  <div style={{
    width: '33.33%',
    textAlign: 'center',
  }}>
    <img alt="logo" src={logo}/>
  </div>
  <div style={{ width: '33.33%'}}/>

</div>
</div>
<h3 style={{
  color: `#565347`,
  textAlign: 'center'
}}>
  For more information go to <a style={{
    color: `#565347`,
  }}href="http://www.ourpeoplereview.com">ourpeoplereview.com</a>
</h3>

    </div>
);

export default Index;
