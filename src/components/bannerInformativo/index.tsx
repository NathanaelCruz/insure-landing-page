import React from 'react'
import BannerInformativoImage from '../../assets/images/bg-pattern-how-we-work-mobile.svg'
import BannerInformativoImageDesktop from '../../assets/images/bg-pattern-how-we-work-desktop.svg'
import Button from '../button'

interface BannerInformativoProps {
    text: string,
    titleButton: string
}

const BannerInformativo: React.FC<BannerInformativoProps> = (props) => {
    return (
        <section className="bannerInformativo">
            <section className="bannerInformativo__content">
                <section className="bannerInformativo__info">
                    <h4 className="bannerInformativo__title">{props.text}</h4>
                    <Button text={props.titleButton} classButton="button__default button__banner button__bannerInformativo"/>
                </section>
                <img src={BannerInformativoImage} alt="Banner Informativo" className="bannerInformativo__image"/>
                <img src={BannerInformativoImageDesktop} alt="Banner Informativo" className="bannerInformativo__image--desktop"/>
            </section>
        </section>
    )
}

export default BannerInformativo