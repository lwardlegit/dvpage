import React,{Component} from 'react';
import '../static/styles.css';
export default class Skills extends Component{
  render(){
    return(
      <div class = "skillsContainer">
      
      {this.props.skills.map((skill, iterator )=>{
        return(
        <span key={iterator}>
        <h4 className="headers">{skill}</h4>
        </span>
      )
      })}

      </div>
    );
  }
}
