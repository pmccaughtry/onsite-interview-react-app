import React from 'react';

const Link = props => {
    return (
        <a
            href={props.href}
            onClick={props.linkClicked}>
                <span
                    id={props.language}
                    className={props.selected ? 'active' : ''}>
                    {props.children}
                </span> {props.selected}
        </a> 
    );
};

export default Link;