import React from 'react'
import instagram from './contact/instagram.svg';
import linkedin from './contact/linkedin.svg';
import mail from './contact/mail.svg';
import phone from './contact/phone-call.svg';
import './contact.css';
import Contact from './contact';
export const Contacts = () => {
    const [contacts,setContacts]=React.useState([
        {image:instagram,name:'@ghenatofan',link:'https://instagram.com/ghenatofan'},     
        {image:linkedin,name:'ghenadietofan752',link:'https://linkedin.com/in/ghenadietofan752'},
        {image:phone,name:'+37369807652',link:''},
        {image:mail,name:'ghenadietofan@gmail.com',link:''}]);
    return (
        <div id="contacts">
                  <h1>Contact.</h1>
            <div id="contacts-line">
                 {contacts.map((contact)=>{
                     return <Contact image={contact.image}
                             alt="contact" 
                             link={contact.link}
                             name={contact.name} 
                             />})}
            </div>
        </div>
    )
}
export default Contacts;
