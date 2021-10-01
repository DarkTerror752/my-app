import React from 'react';
import Image from './Image/Image';
import './about.css';
import Button from '../Button/Button';
import figma from './images/figma.svg';
import illustrator from './images/illustrator.png';
import css from './images/css.png';
import html from './images/html-5.png';
import js from './images/js.png';
import bootstrap from './images/bootstrap.svg';
import react from './images/react.png';
import sass from './images/sass.png';
export const About = () => {
    const downloadResume=()=>{

    }
    return (
        <div id="about">
            <div id="icons-left">
            <div className="icons">
                <Image class="icon" src={figma} alt="figma"></Image>
                <Image class="icon" src={illustrator} alt="Adobe Illustrator"></Image>
                </div>
                <div className="icons">
                <Image class="icon" src={css} alt="CSS"></Image>
                <Image class="icon" src={html} alt="HTML"></Image>
                </div>
                </div>
                <div id="text">
                    <h1>
                        About me.
                    </h1>
                    <h4>UI/UX Freelancer with about 1 year of experience</h4>
                    <h4>As a Designer, I have experience with Adobe Illustrator and Figma.</h4>
                    <h4>As a Developer, I have experience with HTML5, CSS3, JS, Sass, Bootstrap, React.</h4>
                <Button className="resume" click={downloadResume}>Resume</Button>
                </div>
                <div id="icons-right">
                <div className="icons">
                <Image class="icon" src={js} alt="JavaScript"></Image>
                <Image class="icon" src={bootstrap} alt="bootstrap"></Image>
                </div>
                <div className="icons">
                <Image class="icon" src={react} alt="react"></Image>
                <Image class="icon" src={sass} alt="SASS"></Image>
                </div>
                </div>
            
        </div>
            
     
    )
}
export default About;