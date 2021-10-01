import React from 'react'
import classes from './Button.module.css';
export const Button = (props) => {
    return (
        <button className={classes.btn+' '+classes[props.className]} onClick={props.click}>{props.children}</button>
    )
}
export default Button;