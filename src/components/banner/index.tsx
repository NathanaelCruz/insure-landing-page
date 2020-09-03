import React from 'react'
import Button from '../button'
import ImageBannerTopMobile from '../../assets/images/bg-pattern-intro-left-mobile.svg'
import ImageBannerBottomMobile from '../../assets/images/bg-pattern-intro-right-mobile.svg'

interface BannerTopProps {
    title: string,
    bodyBannerText: string,
    textButton: string
}

const BannerTopHome: React.FC<BannerTopProps> = (props) => {
    return (
        <section className="banner">
            <section className="banner__content">
                <section className="banner__image">
                    {props.children ? props.children : ""}
                </section>
                <section className="banner__text">
                    <section className="banner_textContent">
                        <h1 className="banner_textTitle">{props.title}</h1>
                        <p className="banner__textBody">{props.bodyBannerText}</p>
                        <Button text={props.textButton} classButton="button__default button__banner" />
                    </section>
                    <section className="banner_imageContentIllustrate--mobile">
                        <img src={ImageBannerTopMobile} alt="Imagem ilustrativa banner" className="banner_imageIllustrate"/>
                    </section>
                </section>
            </section>
            <section className="banner_imageContentIllustratebottom--mobile">
                <img src={ImageBannerBottomMobile} alt="Imagem ilustrativa banner" className="banner_imageIllustrate"/>
            </section>
            
        </section>
    )
}

export default BannerTopHome