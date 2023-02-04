import { useContext } from 'react';
import { useHistory } from 'react-router';
import { TraningCenter } from '../../App';
import './Serviess.css'
const Services = () => {
    const TaningS = useContext(TraningCenter);
    const history = useHistory();
    const serviess = [
        {name: 'THE AMOUNT OF TRAINING IS ASSIGNED AS PER THE SKILLS AND FITNESS LEVEL OF THE STUDENT.'},
        {name: 'FUN-FILLED PLAYING EXPERIENCE FOR BEGINNERS..'},
        {name: 'REGULAR FOCUS ON WORKING ON TECHNIQUE (BASICS).'},
        {name: 'NET SESSIONS, MATCH SIMULATIONS, AND MATCHES..'},
        {name: 'TECHNICAL AND TACTICAL KNOW HOW..'},
        {name: 'PRACTICING AND INTERACT WITH SENIOR PLAYERS.'},
        {name: 'VIDEO ANALYSIS & PITCH VISION (PLAYERS CAN EXPLORE, LEARN & PERFORM)..'},
        {name: 'CURATOR SESSIONS (LEARN HOW TO READ THE PITCHES).'},
        {name: 'NUTRITION SESSIONS.'},
        {name: 'STRENGTH & CONDITIONING SESSIONS.'},
        {name: 'WEEKLY PRACTICE MATCHES FOR EXPOSURE (FOCUS ON FIELDING POSITIONS, ROLE OF CAPTAIN, PLAYING IN THE RIGHT SPIRIT ETC.)'},
    ]
    const handleclickd =() => {
        history.push('/home')
    }

    return (
        <div className="mt-5 extra-style">
        <h2 className="text-info">THE TRAINING CENTRAL CRICKET FOR SCHOOL</h2>
        <p>We provide aspiring cricketers with world-class training and best in class
         infrastructure to help them reach the next level. Our cricket program focuses 
         on specialized coaching for batting, bowling, and wicket-keeping. The amount 
         of training is assigned as per the skills and fitness level of the student, 
         and adequate measures are taken care of to ensure the sport is fun for the
         beginners.
         </p>
        <div className="row container ">
        <h1 className="bg-light rounded">PROGRAM DETAILS</h1>
        {
            serviess.map(servies => <div className="col-6">
            <h3 className="rounded hvor shadow-lg p-5 text-center">{servies.name}</h3>
            <h4 className="text-danger">{TaningS}</h4>
           <button className="bg-Success" onClick={handleclickd}>Go Home</button>
            </div>)
        }
       
        </div>    
     
        </div>
    );
};

export default Services;