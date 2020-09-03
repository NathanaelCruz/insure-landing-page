import React from 'react'

interface CardProps {
    title: string,
    text: string
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <section className="card">
            <section className="card__imageContent">
                {props.children}
            </section>
            <h4 className="card__title">{props.title}</h4>
            <p className="card__text">{props.text}</p>
        </section>
    )
}

export default Card