import React from 'react'
import Logo from '../logo'
import FooterImageFacebook from '../../assets/images/icon-facebook.svg'
import FooterImagePinterest from '../../assets/images/icon-pinterest.svg'
import FooterImageInstagram from '../../assets/images/icon-instagram.svg'
import FooterImageTwitter from '../../assets/images/icon-twitter.svg'
import FooterImageTop from '../../assets/images/bg-pattern-footer-mobile.svg'
import SocialMedia from '../socialMedia'


interface FooterSubmenuProps {
    itemSubmenu: {
        textSub: string,
        linkText: string
    }
}
interface FooterMenuProps {
    item: {
        text: string,
        submenu: Array<FooterSubmenuProps>
    }
}
interface FooterProps {
    menu: Array<FooterMenuProps>
}

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <footer className="footer">
            <section className="footer__redesSociais">
                <Logo classText="footer__logo" />
                <section className="footer__redesSociaisContent">
                    <SocialMedia linkSM="https://www.facebook.com/">
                        <img src={FooterImageFacebook} alt="Icone Facebook" className="socialmedia__image"/>
                    </SocialMedia>
                    <SocialMedia linkSM="https://twitter.com/">
                        <img src={FooterImageTwitter} alt="Icone Twitter" className="socialmedia__image"/>
                    </SocialMedia>
                    <SocialMedia linkSM="https://br.pinterest.com/">
                        <img src={FooterImagePinterest} alt="Icone Pinterest" className="socialmedia__image"/>
                    </SocialMedia>
                    <SocialMedia linkSM="https://www.instagram.com/">
                        <img src={FooterImageInstagram} alt="Icone Instagram" className="socialmedia__image"/>
                    </SocialMedia>
                </section>
                <img src={FooterImageTop} alt="Imagem do Footer" className="footer__imageTop"/>
                <hr className="footer__division" />
            </section>
            <section className="footer__menu">
                {props.menu.map((itemTop) => {
                    return <section className="footer__menuContent"><p className="footer__menuTitle">{itemTop.item.text}</p><ul className="footer__menuItems">{itemTop.item.submenu.map((itemBody) => {
                    return <li className="footer_menuItem"><a href={itemBody.itemSubmenu.linkText} className="footer__menuItemLink">{itemBody.itemSubmenu.textSub}</a></li>
                    })}</ul></section>
                })}
            </section>
        </footer>
    )
}

export default Footer