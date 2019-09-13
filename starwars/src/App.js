import React, { useState,useEffect } from 'react';
import './App.css';
import axios from "axios";
import Character1 from "./components/Character1";
import Character2 from "./components/Character2";
import Character3 from "./components/Character3";
import Character4 from "./components/Character4";

const Char1Api = "https://swapi.co/api/people/1/";
const Char2Api = "https://swapi.co/api/people/2/";
const Char3Api = "https://swapi.co/api/people/3/";
const Char4Api = "https://swapi.co/api/people/4/";







const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [ error, Seterror] = useState(null);

  const [chars, setChars] = useState({ c1: [], c2: [],c3: [], c4: []});


useEffect(() => {

const c1Promise = axios.get(Char1Api);
const c2Promise = axios.get(Char2Api);
const c3Promise = axios.get(Char3Api);
const c4Promise = axios.get(Char4Api);

Promise.all ([c1Promise, c2Promise, c3Promise, c4Promise ])
.then(([c1AxiosRes,c2AxiosRes,c3AxiosRes,c4AxiosRes]) => {

setChars({
  

});

}


)


},[]);



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
