import React,{Component} from 'react';
import me from '../images/meee.jpg';
export default class Education extends Component{
  render(){
    return(


      <div class="chunk">

      <img
      src={me}
      width="120px"
      height="120px"
      className = "profile"
      alt=" luther wardle holding his laptop"
          />
            <div class="educationContainer">
            <h3 className="education"> Associates of Arts</h3>
              <h3 className="education"> Bachelors of Arts</h3>
                <h4 className = "marker"> major: Sociology</h4>
                  <h4 className = "marker"> minor: Computer Science</h4>

              </div>
          </div>


    );
  }
}
