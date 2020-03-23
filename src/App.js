import React,{Component} from 'react';
import './static/styles.css';
import Projects from './components/projects.js';
import About from './components/about.js';
import Education from './components/education.js';
import Skills from './components/skills.js';
import Builder from './components/projectPages/builder.js';
import Resight from './components/projectPages/builder.js';
import Motivational from './components/projectPages/motivational.js';
import Calculator from './components/projectPages/calculator.js';
import ArduinoAlarm from './components/projectPages/arduinoAlarm.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  state={
    projects:[
      {
        Title: "Resight",
        Description: "Resight is currently a react web application hosted using heroku, it aims to improve reading comprehension among students.",
        CreateDate: "May 2018",
        link: `/resight`
      },
      {
        Title: "MTG-Builder",
        Description: "My Magic The Gathering Builder application is desiged to assist new and seasoned players build fantastic decks, User's can build new decks by calling the MTG api to card search. They can also check their deck's stats, draw random hands and develop play styles.",
        CreateDate: "September 2019",
        link: `/builder`
      },
      {
        Title: "Silent Alarm System",
        Description: "This Arduino based system coupled with a Python flask server is a functional silent alarm. It has three distinct functions: an accelerometer on the device is triggered when the device is moved, the device then contacts a simple flask server, the server then sends an email to alert the user that the alarm has been triggered.",
        CreateDate: "December 2019",
        link: `/arduino-alarm`
      },
      {
        Title: "Vue Calculator",
        Description: "a functional calculator utilizing the vue js library able to perform all basic math operations",
        CreateDate: "April 2018",
        link: `/calculator`
      },
      {
        Title: "Motivational API",
        Description: "The motivational API express server & react client project returns a list of dummy motivational quotes, but when the user selects the centered button, the api executes a Route and a series of real quotes is fetched and then mapped out in the react application to the user's browser ",
        CreateDate: "October 2017",
        link: `/motivational`
      }

    ],
      skills: ['Html 5','CSS','SASS','client side javaScript','Node.js','Python 3','Ruby','Express.js','Python Flask','Ruby on Rails','SQL','Sequelize',' NoSQL Databases','Google Firebase','Mongo-DB','PostMan','Express Middleware','fetch','User Auth']

  }

  render(){
    return (

      <Router>

        <Switch>
          <Route exact path = '/'>
                <div className="pagebackground" >
              <header className="App-header">
              </header>

              <div class="maincontent">
                  <About intro= {this.state.intro} />
              <div class="rightSide">
                  <Projects projects={this.state.projects}/>
                  <h3 class="headers edHeader">Education</h3>
                  <Education />
              </div>
                  <Skills skills={this.state.skills}/>
              </div>
            </div>
          </Route>


          <Route path='/resight'>
            <Resight/>
            </Route>

          <Route path='/builder'>
            <Builder/>
          </Route>

          <Route path='/arduino-alarm'>
            <ArduinoAlarm/>
          </Route>

          <Route path='/calculator'>
            <Calculator/>
          </Route>
          <Route path='/motivational'>
            <Motivational/>
          </Route>

        </Switch>
      
      </Router>
    );
  }
}

export default App;
