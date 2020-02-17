import React,{Component} from 'react';
import '../static/styles.css';
import plant from '../images/title_plant.png';
export default class About extends Component{
  render(){
    return(
      <div>
      <div className="intro">
      <h3>{this.props.intro}</h3>
      </div>
      <img class="plant"
      src={plant}
      width="80px"
      height="80px"
      alt="thumbnail clip art of a house plant"
      />

      <div className="about">
        <h3 className="headers">A World Powered by technology</h3>
        <p>An Avid nerd, Luther spends his free time designing fun and entertaining apps for casual use,
        his previous largest project <a href="https://github.com/lwardlegit/mtgbuild">The MTG builder app</a> allows users to build custom magic the gathering decks.
        </p>
        <br/>
      </div>

      <div className="about">
        <h3 className="headers">Pushing boundaries</h3>
        <p>
         As a developer who pushes the boundaries, Luther believes that technology should exist tangibly,
         that it should have a physical impact on the world around us. One such device, his <a href = "https://github.com/lwardlegit/Silent_Arduino_Alarm_System">Silent Alarm System</a> speaks to his interests to create an interactable world driven by the power of networking technology and iot devices.
        </p>
        <br/>
      </div>
    </div>
    );
  }
}
