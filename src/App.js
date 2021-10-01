import React from "react";
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/Home/Home';
import Delimitator_Left from './Components/Delimitator/delimitator-left';
import About from './Components/About/about';
import Skills from './Components/About/Skills/Skills'
import Delimitator_Right from './Components/Delimitator/delimitator-right';
import Portfolio from "./Components/Portfolio/Portfolio";
import Contacts from "./Components/Contact/Contacts";
import Footer from './Components/Footer/Footer';
export const App = () => {
 
    return (
        <div className="app">
            <Navbar />
            <ScrollAnimation animateIn="fadeIn"animateOut="fadeOut" >
            <Home />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft" duration={1}animateOut="fadeOutLeft">
            <Delimitator_Left />
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="fadeIn" duration={1.5}animateOut="fadeOut">
            <About />
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="fadeIn" duration={0.5}animateOut="fadeOut">
            <Skills />
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="fadeInRight" duration={1}animateOut="fadeOutRight">
            <Delimitator_Right />
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="fadeIn"duration={1.5}animateOut="fadeOut">
            <Portfolio />
            </ScrollAnimation>
            
            <ScrollAnimation animateIn="fadeInLeft" duration={1}animateOut="fadeOutLeft">
            <Delimitator_Left />
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" duration={0.5}animateout="fadeOutUp">
            <Contacts />
            </ScrollAnimation>

            <Footer />
        </div>
    )
}
export default App;
