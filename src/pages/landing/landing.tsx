import React from 'react'
import BannerTopHome from '../../components/banner'
import BannerImageMobile from '../../assets/images/image-intro-mobile.jpg'
import BannerImageDesktop from '../../assets/images/image-intro-desktop.jpg'

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
        </main>
    )
}

export default Landing