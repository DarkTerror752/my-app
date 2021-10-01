import React from 'react'
import cl from './Circle.module.css';
export const Circle = (props) => {
    return (
        <div  className={cl[props.className]+' '+cl[props.name]} id={props.id}>
            {props.children}
        </div>
    )
}
export default Circle;