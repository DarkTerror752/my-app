import React from 'react'
import cl from './image.module.css';
export const Image = (props) => {
    return (
        <div>
            <img src={props.src} className={cl[props.class]} alt={props.alt}></img>
        </div>
    )
}
export default Image;
