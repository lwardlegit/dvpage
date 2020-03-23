import React,{Component} from 'react';
import '../static/styles.css';
export default class Projects extends Component{
  render(){
    return(
      <div class="projectContainer">
      <h2 class = "projectsHeader">Projects</h2>
        <ul className="projects">
        {this.props.projects.map((project, iterator )=>{
          return(
          <div key={iterator} className="singleProject">
          <h3 className="headers"><span>{project.Title}</span></h3>
          <p>{project.Description}</p>
          <b>-- {project.CreateDate}</b>
          <a className='projLinks' href={project.link}>{project.Title}</a>
          </div>
        )
        })}
        </ul>
      </div>
    );
  }
}
