import React from 'react'
import './portfolio.css';
import project1 from './projects/project 1.png';
import project2 from './projects/project 2.png';
import project3 from './projects/project 3.png';
import project4 from './projects/project4.png';
import project5 from './projects/logo.jpg';
import project6 from './projects/Desktop.jpg';
export const Portfolio = () => {
    return (
        <div id="portfolio">
            <h1>Portfolio.</h1>
            <div id="projects">
                <div className="project-line">
                    
              <div className="project" id="project1">


                    <img src={project1}></img>
                </div> 
      
                  <div className="project">
                  <img src={project2}></img>
              </div>    
      
              <div className="project" id="project3">
                  <img src={project3}></img>
            </div>    
            </div>
            <div className="project-line">
              <div className="project" id="project4">
                    <img src={project4}></img>
             </div>    
             <div className="project" >
                 <img src={project5}></img>
            </div>    
              <div className="project" id="project6">
                 <img src={project6}></img>
            </div>    
        </div>
        </div>
            
        </div>
    )
}
export default Portfolio;