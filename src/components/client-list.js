import { NavLink } from 'react-router-dom';
import React from 'react';
import fsa from "../images/fsa.png"
import lch from "../images/lch.png"
import myTravel from "../images/myTravel.png"
import NHS from "../images/NHS.png"
import NPS from "../images/NPS.png"
import pwc from "../images/pwc.png"
import stockport from "../images/stockport.jpg"
import ukSport from "../images/ukSport.jpg"

const Test2 = () => (
  <div className="col-12">
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <div className="col-3"><img style={{width: '100%'}} alt="logo" src={fsa}/></div>
      <div className="col-3"><img style={{width: '100%'}} alt="logo" src={lch}/></div>
      <div className="col-3"><img style={{width: '100%'}} alt="logo" src={myTravel}/></div>
      <div className="col-3"><img style={{width: '100%'}} alt="logo" src={stockport}/></div>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <div className="col-3"><img style={{width: '100%'}} alt="logo" src={NHS}/></div>
      <div className="col-3"><img style={{width: '100%'}} alt="logo" src={pwc}/></div>
      <div className="col-3"><img style={{width: '100%'}} alt="logo" src={NPS}/></div>
      <div className="col-3"><img style={{width: '100%'}} alt="logo" src={ukSport}/></div>
    </div>
  </div>
);

export default Test2;
