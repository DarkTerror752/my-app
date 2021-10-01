import React from 'react'
import logo from './logo.svg';
import classes from '../navbar/navbar.module.css';
export const Logo = () => {
    return (
        <div className={classes.logo}>
                    <img src={logo} className={classes.logo}></img>
                    <h3>TOFAN</h3>
                </div>
    )
}
export default Logo;