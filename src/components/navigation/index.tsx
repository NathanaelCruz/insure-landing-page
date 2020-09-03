import React, { useState, useEffect } from 'react'
import Logo from '../logo'
import Button from '../button'
import IconNavigation from '../../assets/images/icon-hamburger.svg'
import IconNavigationClose from '../../assets/images/icon-close.svg'
import ImageHeaderMobile from '../../assets/images/bg-pattern-mobile-nav.svg'

interface NavigationMenuProps {
    title: string,
    link: string
}

interface NavigationProps {
    menu : Array<NavigationMenuProps>,
    titleButton: string
}

const Navigation: React.FunctionComponent<NavigationProps> = (props) => {

    const [classActive, setClassActive] = useState("header_menu--hidden")

    useEffect(() => {
        if(window.screen.width > 767) {
            setClassActive('header_menu--active')
        }
    }, [])

    function toggleClass() {
        (classActive === 'header_menu--hidden') ? setClassActive('header_menu--active') : setClassActive('header_menu--hidden')
    }

    return (
        <header className="header__navigation">
            <section className="header__navigationContent">
                <section className="header__navigationContentLeft">
                    <section className="header__logo">
                        <Logo />
                    </section>
                    <section className="header__menu--mobile" onClick={toggleClass}>
                            <Button classButton="header__menuButton--mobile">
                                <img src={(classActive === 'header_menu--hidden') ? IconNavigation : IconNavigationClose} alt="Icone do Menu" className="header__menuImage--mobile" />
                            </Button>
                    </section>
                </section>
                <section className="header__navigationContentRight">
                    <section className="header__menu">
                        <section className={`header__menuNavigation ${classActive}`}>
                            <ul className="header__menuList">
                                {props.menu.map(function(item, index) {
                                    return <li key={index} className="header__menuListItem"><a href={item.link} className="header__linkList">{item.title}</a></li>
                                })}
                            </ul>
                            <Button text="VIEW PLANS" classButton="button__default header__button" />
                            <img src={ImageHeaderMobile} alt="Imagem do menu Mobile" className="header_imagemMobile" />
                        </section>
                    </section>
                </section>
            </section>
        </header>
    )
}

export default Navigation