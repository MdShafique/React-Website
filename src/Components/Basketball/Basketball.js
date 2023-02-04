import React from 'react';

const Basketball = () => {
    const basketBalls = [
        {name: 'Basketball',
         discription: 'Does your child need to jump higher?  Does your child need to be quicker? More explosive? Stronger? VertiMax Raptors and Platforms can help young athletes achieve their performance goals!  The VertiMax app has workouts for any and all of the attributes any player needs.  There are also workouts using other pieces of workout equipment in tandem with Vertimax Platform and Raptor equipment. There are workouts to do on game days, off days, in-season and off-season.  Leave nothing to chance and make sure your child gets every advantage possible by having a VertiMax Platform and/or Raptor in your home.',
      price: 4251, img: 'https://www.vertimax.com/hs-fs/hubfs/Basketball%20Testimony%20Raptor.png?width=600&name=Basketball%20Testimony%20Raptor.png'},
    ];
    return (
        <div>
           {
            basketBalls.map(basketBall => <div className="bg-primary text-white">
                <h2>{basketBall.name}</h2>
                 <h3 style={{color: 'red'}}>Price: ${basketBall.price}</h3>
                 <img className="rounded shadow-lg w-50" src={basketBall.img} alt="" />
                 <br />
                 <button className="bg-info p-1 rounded mt-3 mb-2 text-white fw-bolder">Join Now</button>
                 
            </div>)
           }
        </div>
    );
};

export default Basketball;