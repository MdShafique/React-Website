import React from 'react';

const Sport = () => {
    const sports = [
    {name: 'Does Sport Make You Sleep Better?',  price: 524,
     discription: 'We mentioned in our intro that sport helps you sleep. But only when it s done at the right time of day! In fact, its generally',
     img: 'https://images.unsplash.com/photo-1616279967983-ec413476e824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80'},
    
    ];
    return (
        <div>
            {
                sports.map(sport => <div className="bg-Light text-white">
                    <h2 className="text-black">{sport.name}</h2>
                    <p className="text-black">{sport.discription}</p>
                    <h3 style={{color: 'red'}}>price: ${sport.price}</h3>
                    <img className="rounded shadow-lg w-50" src={sport.img} alt="" />
                    <br />
                 <button className="bg-info p-1 rounded mt-3 mb-2 text-white fw-bolder">Join Now</button>
                </div>)
            }
        </div>
    );
};

export default Sport;