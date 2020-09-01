import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string,
    classButton ?: string
}

const Button:React.FC<ButtonProps> = (props) => {
    return (
        <button type="button" className={props.classButton}>
            {props.text ? props.text : props.children}
        </button>
    )
}

export default Button