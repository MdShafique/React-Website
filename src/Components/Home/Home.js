import React from 'react';
import Basketball from '../Basketball/Basketball';
import Cricket from '../Cricket/Cricket';
import Football from '../Football/Football';
import Sport from '../Sport/Sport';


const Home = () => {
    return (
        <div className="container">
           <Cricket></Cricket>
           <Football></Football>
           <Sport></Sport>
           <Basketball></Basketball>
        </div>
    );
};

export default Home;