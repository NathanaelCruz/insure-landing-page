import React from 'react'
import BannerTopHome from '../../components/banner'
import BannerImageMobile from '../../assets/images/image-intro-mobile.jpg'
import BannerImageDesktop from '../../assets/images/image-intro-desktop.jpg'
import Card01Image from '../../assets/images/icon-snappy-process.svg'
import Card02Image from '../../assets/images/icon-affordable-prices.svg'
import Card03Image from '../../assets/images/icon-people-first.svg'
import Card from '../../components/card'
import BannerInformativo from '../../components/bannerInformativo'

const Landing = () => {
    return (
        <main>
            <BannerTopHome 
                title="Humanizing your insurance"
                bodyBannerText="Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected."
                textButton="VIEW PLANS"
            >
                <img src={BannerImageMobile} alt="Humanizing your insurance" className="banner_image--mobile"/>
                <img src={BannerImageDesktop} alt="Humanizing your insurance" className="banner_image--desktop"/>
            </BannerTopHome>
            <section className="cards">
                <hr className="cards__line"/>
                <h2 className="cards__title">We're different</h2>
                <section className="cards_content">
                    <Card title="Snappy Process" text="Our application process can be completed in minutes, not hours. Don't get suck filling in tedious forms.">
                        <img src={Card01Image} alt="Imagem do card"/>
                    </Card>
                    <Card title="Affordable Prices" text="We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.">
                        <img src={Card02Image} alt="Imagem do card"/>
                    </Card>
                    <Card title="People First" text="Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.">
                        <img src={Card03Image} alt="Imagem do card"/>
                    </Card>
                </section>
            </section>
            <BannerInformativo 
                text="Find out more about how we work"
                titleButton="HOW WE WORK" 
            />
        </main>
    )
}

export default Landing