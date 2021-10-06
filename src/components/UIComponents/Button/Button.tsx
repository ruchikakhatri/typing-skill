import React from 'react';
import './Button.css';

const Button = (props: {name: string, onClick: any, disabled: boolean }) => {
    return (
        <button onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
    )
}

export default Button;