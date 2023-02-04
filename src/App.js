import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import About from './Components/About/About';
import Admissions from './Components/Admissions/Admissions';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFoun from './Components/NotFound/NotFound'
import Services from './Components/Services/Services';
import initializeAuthentication from './firebase/Firebaseinitilaization';
export const TraningCenter = createContext('TRAINING CENTRAL')


initializeAuthentication();
const provider = new GoogleAuthProvider();
const auth = getAuth();
function App() {
   const  taitle = 'TRAINING CENTRAL Bangla';
  
   const [users, setUsers] = useState({});
   
  const handlesignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const {displayName, photoURL} = result.user;
      const LogIn = {
        name: displayName,
        photo: photoURL,
      }
      setUsers(LogIn);

    })
  }
 
  return (
    <TraningCenter.Provider value={taitle}>
      <div className="App">
      {
        users.name && <div>
          <h1>name: {users.name}</h1>
          <img src={users.photo} alt="" />
        </div>
      }
      <button onClick={handlesignIn}>Sing In</button>
      <Router>
         <Header></Header> 
          <Switch>
          <Route path="/home">
             <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/education">
             <Education></Education>
          </Route>
           <Route path="/contact">
             <Contact></Contact>
           </Route>
            <Route path="/Admissions">
             <Admissions>
             </Admissions>
            </Route>
            <Route path="/Services">
               <Services></Services>
            </Route>
          <Route path="*">
            <NotFoun></NotFoun>
          </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </div>
    </TraningCenter.Provider>
  );
}

export default App;
