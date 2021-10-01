import React from 'react'
import Skill from './Skill.jsx';
import '../about.css';
export const Skills = () => {
    return (
        <div id="skills-container">
            <h1>My Skills.</h1>
            <div id="skills">
            <Skill percentage={65}name="Web Design" />
            <Skill percentage={75}name="Layout Design"/>
            <Skill percentage={50}name="Front End"/>
            <Skill percentage={25}name="Back End"/>
        </div>
        </div>
    )
}
export default Skills;