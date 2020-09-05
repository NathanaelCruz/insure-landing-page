import React from 'react'
import LogoSVG from '../../assets/images/logo.svg'

interface LogoProps{
    classText?: string
}
const Logo: React.FC<LogoProps> = (props) => {
    return (
        <a href="/" className={`link__logo ${props.classText ? props.classText : ''}`}>
            <img src={LogoSVG} alt="Logo" />
        </a>
    )
}

export default Logo