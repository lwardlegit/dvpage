import React,{Component} from 'react';
import './static/styles.css';
import Projects from './components/projects.js';
import About from './components/about.js';
import Education from './components/education.js';
import Skills from './components/skills.js';


class App extends Component {
  state={
    projects:[
      {
        Title: "Resight",
        Description: "Resight is currently a react web application hosted using heroku, it aims to improve reading comprehension among students.",
        CreateDate: "May 2018"
      },
      {
        Title: "Cloudii",
        Description: "The Cloudii express API provides an interface for weather analysis, The user can enter weather data over a relevant area and have the API return a calculated average rainfall over a selected period of time.",
        CreateDate: "September 2019"
      },
      {
        Title: "Silent Alarm System",
        Description: "This Arduino based system coupled with a Python flask server is a functional silent alarm. It has three distinct functions: an accelerometer on the device is triggered when the device is moved, the device then contacts a simple flask server, the server then sends an email to alert the user that the alarm has been triggered.",
        CreateDate: "December 2019"
      },
      {
        Title: "Family Todo",
        Description: "This is a full stack React-Native application utilizing google firebase as a backend and google auth. Users can make todo lists that only their family can see. A user can also add members to their family by sending invitations, upon doing so, a copy of the user's notes will appear in the invited user's notes.",
        CreateDate: "April 2018"
      },
      {
        Title: "Motivational API",
        Description: "The motivational API express server & react client project returns a list of dummy motivational quotes, but when the user selects the centered button, the api executes a route and a series of real quotes is fetched and then mapped out in the react application to the user's browser ",
        CreateDate: "October 2017"
      }

    ],
      skills: ['Html 5','CSS','SASS','client side javaScript','Node.js','Python 3','Ruby','Express.js','Python Flask','Ruby on Rails','SQL','Sequelize',' NoSQL Databases','Google Firebase','Mongo-DB','PostMan','Express Middleware','fetch','User Auth']

  }

  render(){
    return (
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
    );
  }
}

export default App;
