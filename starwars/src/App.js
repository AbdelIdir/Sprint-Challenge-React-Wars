import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";





  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const App = () => {
   const [chars, setChars] = useState ();
   useEffect(() => {
       axios
       .get(`https://swapi.co/api/people/?pages`)
       .then(res => {
           const results = res.data.results
           console.log(res);
           setChars(res);
       })
   },[])
return (
   <div>
       
       
           {chars.map(item=>{
               return(
                   <Character
                   name={item.name}
                   height={item.height}
                   gender={item.gender}
                   mass={item.mass}
                   skinColor={item.skin_color}
                   />
               )
           })}
       
   </div>
)
}


export default App;
