import React, { useState } from 'react'
import Logo from '../logo'
import Button from '../button'
import IconNavigation from '../../assets/images/icon-hamburger.svg'
import IconNavigationClose from '../../assets/images/icon-close.svg'

interface NavigationMenuProps {
    title: string,
    link: string
}

interface NavigationProps {
    menu : Array<NavigationMenuProps>,
    titleButton: string
}

const Navigation: React.FunctionComponent<NavigationProps> = (props) => {

    return (
        <header className="header__navigation">
            <section className="header__navigationContent">

                <section className="header__logo">
                    <Logo />
                </section>
                <section className="header__menu">
                    <section className="header__menuNavigation">
                        <ul className="header__menuList">
                            {props.menu.map(function(item, index) {
                                return <li key={index}><a href={item.link} className="header__linkList">{item.title}</a></li>
                            })}
                        </ul>
                        <Button text="VIEW PLANS" classButton="header__button" />
                    </section>
                    <section className="header__menu--mobile">
                            <Button>
                                <img src={IconNavigation} alt="Icone do Menu"/>
                            </Button>
                    </section>
                </section>
            </section>
        </header>
    )
}

export default Navigation