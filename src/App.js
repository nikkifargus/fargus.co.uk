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
import logo from './images/fcp.png'
function AppRouter() {
  return (
    <Router>
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/"><img alt=""src={logo} style={{ maxWidth: 40}}/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about-us/">About Us</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              What We Do
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/leadership-skills/">Leadership Skills</a>
              <a class="dropdown-item" href="/our-people/">Employee Surveys</a>
              <a class="dropdown-item" href="/employee-surveys/">Assess the Quality of Human Capital</a>
            </div>
          </li>
            <li class="nav-item">
              <a class="nav-link" href="/client-list/">Client List <span class="sr-only">(current)</span></a>
            </li>


          </ul>
        </div>
      </nav>

        <div
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
      </div>
    </Router>
  );
}

export default AppRouter;

//
// <div className="navbar">
//   <ul>
//     <li style={{float: 'left'}}>
//       <a href="/">
//         <h4>FCP</h4>
//       </a>
//     </li>
//     <li><a href="/client-list/"><h4>Client List</h4></a></li>
//     <li><a href="/what-we-do/"><h4>What We Do</h4></a></li>
//     <li><a href="/about-us/"><h4>About Us</h4></a></li>
//   </ul>
// </div>
