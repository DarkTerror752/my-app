import React from 'react'
import classes from './navbar.module.css';
import Link from './Link.jsx';
import Button from '../Button/Button.jsx';
import Logo from './Logo';
export const Navbar = () => {
    const changeActive=(item)=>{
        let links=document.getElementsByClassName('link');
        for(let i=0;i<links.length;i++){
            if(links[i].classList.contains('active')){
                links[i].classList.remove('active');
                break;
            }
        }
        
        let temp=document.getElementById(item);
        temp.classList.add('active');
    }
    return (
        <div className={classes.navbar}>
                <Logo />
                <div className={classes.links}>
                    <Link href="#home" className={classes.link}>Home</Link>
                    <Link href="#about" className={classes.link}>About</Link>
                    <Link href="#portfolio" className={classes.link}>Portfolio</Link>
                    <Link href="#contacts" className={classes.link}>Contacts</Link>
                </div>
                <Button className="hire">Hire me</Button>
               
        </div>
    )
}

export default Navbar;