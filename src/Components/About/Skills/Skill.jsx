import React from 'react'
import {CircularProgressbar,buildStyles} from'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import cl from './Skill.module.css';
export const Skill = (props) => {
    const percentage =props.percentage;
    return (
            <div className={cl.container}>
                <AnimatedProgressProvider
        valueStart={0}
        valueEnd={percentage}
        duration={1}
        easingFunction={easeQuadInOut}
       
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
                className={cl.skill}
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ rotation:0.5+(1-percentage/100)/2,pathTransition:'none',pathColor:`rgba(249, 135, 54,1)`,textColor:`white`,trailColor:'transparent'})}
                
              />
          );
        }}
      </AnimatedProgressProvider>  
      <h3 className={cl.title}>{props.name}</h3>
        </div>
    )
}
export default Skill;