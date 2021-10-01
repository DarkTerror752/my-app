import React from 'react'
import './contact.css';
export const Contact = (props) => {
    return (
            
        <div className="contact">
            <img className="contact-icon" src={props.image} alt={props.alt}></img>
            <a href={props.link} target="_blank">{props.name}</a>
        </div>
    )
}
export default Contact;