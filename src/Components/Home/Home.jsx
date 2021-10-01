import React from 'react'
import './Home.css';
import Link from '../navbar/Link';
import Circle from './circle/Circle';
import main from './main image.png';
export const Home = () => {
    return (
        <div id="home">
            <div id="name">
                <h1>Hi, I'm Tofan Ghenadie</h1>
                <h4>Web Designer, 
                    UI/UX Designer, 
                    Junior Web Developer, 
                    Junior Front-end Developer
                </h4>
                <Link className="about" href="#about">About me...</Link>
            </div>
            <div id="main-photo">
                    <div id="container">
                    <div id="photo">
                    <img src={main} alt="main-photo"></img>
                    </div>
                    </div>
                    <div id="ui">
                    <Circle className="circle"><h4 className="text">UI/UX</h4></Circle>
                    <svg width="78" height="58" viewBox="0 0 78 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.297489" y1="0.598129" x2="77.2975" y2="57.5981" stroke="url(#paint0_linear)" stroke-opacity="0.5"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="76.9998" y1="58.0002" x2="0.110679" y2="0.85109" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F98836" stop-opacity="0.85"/>
                        <stop offset="1" stop-color="#F98836" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    </div>
                    <div id="js">
                    <Circle  className="circle"><h4>JS</h4></Circle>
                    <svg width="180" height="13" viewBox="0 0 180 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.116686" y1="0.513806" x2="179.1167" y2="0.5138" stroke="url(#paint1_linear)" stroke-opacity="0.5"/>
                        <defs>
                        <linearGradient id="paint1_linear" x1="118.5" y1="0.2" x2="0.0124829" y2="0.5" gradientUnits="userSpaceOnUse">
                        <stop  stop-color="#F98836" stop-opacity="1"/>
                        <stop offset="1" stop-color="#F98836" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    </div>
                    <div id="react">
                    <Circle name="big"  className="circle"><h4>REACT</h4></Circle>
                    <svg width="190" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.694831" y1="85.6039" x2="111.6948" y2="0" stroke="url(#paint2_linear)" stroke-opacity="0.5"/>
                        <defs>
                        <linearGradient id="paint2_linear" x1="62.0002" y1="1.00021" x2="8.64896" y2="41.9165" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F98836" stop-opacity="0.85"/>
                        <stop offset="1" stop-color="#F98836" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>

                   </div>
                    <div id="html">
                    <Circle className="circle"><h4>HTML</h4></Circle>
                    <svg width="53" height="85" viewBox="0 0 53 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.554547" y1="102.773" x2="35.5545" y2="0.772906" stroke="url(#paint3_linear)" stroke-opacity="0.5"/>
                    <defs>
                    <linearGradient id="paint3_linear" x1="53.0002" y1="1.00012" x2="7.30227" y2="89.9045" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F98836" stop-opacity="0.85"/>
                    <stop offset="1" stop-color="#F98836" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                    </svg>

                   </div>
                    <div id="css">
                    <Circle className="circle"><h4>CSS</h4></Circle>
                    <svg width="45" height="100" viewBox="0 0 8 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="26.5002" y1="95.00143" x2="0" y2="0" stroke="url(#paint5_linear)" stroke-opacity="0.5"/>
                        <defs>
                        <linearGradient id="paint5_linear" x1="1.00027" y1="-5" x2="7.90103" y2="75.0027" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F98836" stop-opacity="0.95"/>
                        <stop offset="1" stop-color="#F98836" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>

                   </div>
                    <div id="front">
                    <Circle name="big" className="circle"><h4>FRONT END</h4></Circle>
                    <svg width="80" height="150" viewBox="0 0 48 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="68.5558" y1="75.2294" x2="0.555755" y2="0.229442" stroke="url(#paint6_linear)" stroke-opacity="0.5"/>
                        <defs>
                        <linearGradient id="paint6_linear" x1="0" y1="0" x2="41.7988" y2="109.5742" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F98836" stop-opacity="0.65"/>
                        <stop offset="1" stop-color="#F98836" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>

                    </div>
            
            </div>
        </div>
    )
}
export default Home;