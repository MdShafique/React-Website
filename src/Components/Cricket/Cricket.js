import React from 'react';


const Cricket = () => {
    const crickets = [
        {name: 'Cricket', discription: 'This section will tell you all you need to know (and then some) to fully appreciate a match, as player or spectator',  
        Price: 5000, id: 2,  img: 'https://www.bssnews.net/assets/news_photos/2022/06/12/image-66144-1655036071.jpg' },
    ];
    return (
        <div>
        {
            crickets.map(cricket => <div className=" bg-secondary text-white">
               <h2>{cricket.name}</h2>
               <p>{cricket.discription}</p>
               <h3 style={{color: 'yellow'}}>Course Price: ${cricket.Price}</h3>
               <img className="rounded shadow-lg w-50" src={cricket.img} alt="" />
               <br />
               <button className="bg-danger p-1 rounded mt-3 mb-2 text-white fw-bolder">Join Now</button>
             </div>)
        }
        </div>
    );
};

export default Cricket;