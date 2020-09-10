import React from 'react'
import Button from '../button'
import ImageBannerTopMobile from '../../assets/images/bg-pattern-intro-left-mobile.svg'
import ImageBannerBottomMobile from '../../assets/images/bg-pattern-intro-right-mobile.svg'
import ImageBannerLeftMobile from '../../assets/images/bg-pattern-intro-left-desktop.svg'
import ImageBannerRightMobile from '../../assets/images/bg-pattern-intro-right-desktop.svg'

interface BannerTopProps {
    title: string,
    bodyBannerText: string,
    textButton: string
}

const BannerTopHome: React.FC<BannerTopProps> = (props) => {
    return (
        <section className="banner">
            <section className="banner__content">
                <img src={ImageBannerLeftMobile} alt="Imagem ilustrativa de linhas" className="banner__imageLeft--desktop"/>
                <section className="banner__image">
                    {props.children ? props.children : ""}
                </section>
                <section className="banner__text">
                    <hr className="banner__lineDivision"/>
                    <section className="banner_textContent">
                        <h1 className="banner_textTitle">{props.title}</h1>
                        <p className="banner__textBody">{props.bodyBannerText}</p>
                        <Button text={props.textButton} classButton="button__default button__banner" />
                    </section>
                    <section className="banner_imageContentIllustrate--mobile">
                        <img src={ImageBannerTopMobile} alt="Imagem ilustrativa banner" className="banner_imageIllustrate"/>
                    </section>
                </section>
                <img src={ImageBannerRightMobile} alt="Imagem ilustrativa de linhas" className="banner__imageRight--desktop"/>
            </section>
            <section className="banner_imageContentIllustratebottom--mobile">
                <img src={ImageBannerBottomMobile} alt="Imagem ilustrativa banner" className="banner_imageIllustrate"/>
            </section>
            
        </section>
    )
}

export default BannerTopHome