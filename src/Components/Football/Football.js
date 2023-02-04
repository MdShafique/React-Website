import React from 'react';

const Football = () => {
    const footballs = [
        {name: 'Football', discription: 'A game of football is not about mere dribbling or passing but is based on numerous football skills and techniques. So the obvious question arises in your mind, how to be a good football player? Yes! We are here with a handful of tips and tricks to solve the puzzle and show you how to improve football skills. Now dribble in!', price: 4000,
        img: 'https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg'}, 
    ];
    return (
        <div className="row">
            {
                footballs.map(football => <div className="bg-danger text-white">
                    <h2>{football.name}</h2>
                    <p>{football.discription}</p>
                    <h4>Course Price: ${football.price}</h4>
                    <img className="rounded shadow-lg w-50" src={football.img} alt="" />
                    <br />
                 <button className="bg-danger p-1 rounded mt-3 mb-2 text-white fw-bolder">Join Now</button>
                </div>)
            }
        </div>
    );
};

export default Football;