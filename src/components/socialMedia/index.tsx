import React from 'react'


interface SocialMediaProps {
    linkSM: string,
    classSM?: string
}

const SocialMedia: React.FC<SocialMediaProps> = (props) => {
    return (
        <section className={`socialmedia ${props.classSM ? props.classSM : ''}`}>
            <a href={props.linkSM} target="_BLANK" rel="noopener noreferrer">
                {props.children}
            </a>
        </section>
    )
}

export default SocialMedia