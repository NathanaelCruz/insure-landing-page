import React from 'react'
import LogoSVG from '../../assets/images/logo.svg'

const Logo = () => {
    return (
        <a href="/">
            <img src={LogoSVG} alt="Logo" />
        </a>
    )
}

export default Logo