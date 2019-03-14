import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.scss';

import index from './components/index';
import aboutUs from './components/about-us';
import whatWeDo from './components/what-we-do';
import clientList from './components/client-list';
import leadershipSkills from './components/leadership-skills';
import ourPeople from './components/our-people';
import employeeSurveys from './components/employee-surveys';

function AppRouter() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <ul>
            <li style={{float: 'left'}}>
              <a href="/">
                <h4>FCP</h4>
              </a>
            </li>
            <li><a href="/client-list/"><h4>Client List</h4></a></li>
            <li><a href="/what-we-do/"><h4>What We Do</h4></a></li>
            <li><a href="/about-us/"><h4>About Us</h4></a></li>
          </ul>
        </div>
        <div
          style={{
            marginTop:100,
            marginBottom:30,
          }}
          className="col-10 offset-1"
        >
          <Route path="/" exact component={index} />
          <Route path="/client-list/" component={clientList} />
          <Route path="/what-we-do/" component={whatWeDo} />
          <Route path="/about-us/" component={aboutUs} />
          <Route path="/leadership-skills/" component={leadershipSkills} />
          <Route path="/our-people/" component={ourPeople} />
          <Route path="/employee-surveys/" component={employeeSurveys} />
        </div>
        <div class="footer">
          <p style={{fontSize: 15, marginBottom: 0, textAlign: 'center', color: `#565347`}}> Our standards are based on those specified by the <a href="https://www.cipd.co.uk/">Chartered Institute of Personnel & Development</a>, the <a href="http://www.bps.org.uk/">British Psychological Society</a>, and the <a href="http://www.ibconsulting.org.uk/">Institute of Business Consulting</a>.</p>
          <p style={{fontSize: 17, textAlign: 'center', color: `#565347`}}>peter@fargus.co.uk | 01423 566035 | dee@fargus.co.uk</p>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
