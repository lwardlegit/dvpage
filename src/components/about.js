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
        <p>An Avid technologist, Luther spends his free time designing prosthetics and human wearables,
        his previous works include <a href="https://www.google.com/">The Event Horizon Hand</a> as well as the bluetooth wearable <a href="https://www.google.com/">Tinney</a>.
        </p>
        <br/>
      </div>

      <div className="about">
        <h3 className="headers">Pushing boundaries</h3>
        <p>
         As a developer who pushes the boundaries, Luther believes that technology should exist tangibly,
         that it should have a physical impact on the world around us. One such device, his <a href = "https://www.google.com/">Silent Alarm System</a> speaks to his interests to create an interactable world driven by the power of networking technology and iot devices.
        </p>
        <br/>
      </div>
    </div>
    );
  }
}
