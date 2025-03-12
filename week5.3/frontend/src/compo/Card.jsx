import React from 'react';

const Card = ({ cards }) => {
    return (
        <div>
            {cards.map((card) => (
                <div className='container' key={card.name}>
                    <h2 id='name'>{card.name}</h2>
                    <h4 id='desc'>{card.desc}</h4>
                    <h4 id='interest'><b>Interests</b></h4>
                    <ul id='ul'>
                        {card.interests.map((interest) => (
                            <li key={interest}>{interest}</li>
                        ))}
                    </ul>
                    <div id='btnDiv'>
                    {card.socials.map((acc) => (
                        <button className='btn' key={acc}>{acc}</button>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;