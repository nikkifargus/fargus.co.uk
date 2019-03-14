import { Link } from 'react-router-dom';
import React from 'react';
import table from '../images/table.png'

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
    <h4 style={{
      color: `#565347`,
    }}>
      Employee opinion surveys and 360 degree feedback
    </h4>
    <p style={{
      color: `#565347`,
    }}> We can offer a full organisation survey, or one restricted to specific parts of your organisation. </p>
    <div className="col-8 offset-2"style={{ padding:'0.25rem', margin:'0 auto'}}>
      <img style={{ width: '100%', margin: '0 auto'   }} alt="logo" src={table}/>
    </div>
    </div>
);

export default Index;
