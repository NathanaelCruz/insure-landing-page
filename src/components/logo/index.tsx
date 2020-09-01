import React from 'react'
import LogoSVG from '../../assets/images/logo.svg'

const Logo = () => {
    return (
        <a href="/" className="link__logo">
            <img src={LogoSVG} alt="Logo" />
        </a>
    )
}

export default Logo