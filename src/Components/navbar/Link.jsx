import React from 'react'
export const Link = (props) => {
    return (
        <a href={props.href} className={props.className}>{props.children}</a>
    )
}
export default Link;
