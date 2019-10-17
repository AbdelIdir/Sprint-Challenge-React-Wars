import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.
const Footertry = styled.footer`
background: blue;
color: white;
height: 20px;
`

const StyleApp = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: black;
  border: 5px solid black;
  height: 100%;
`;

function App() {
  
  
  const [error, setError] = useState();
  const [chars, setChars] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(responseApi => {
        const res = responseApi.data.results;
        console.log(res);
        setChars(res);
      })
      .catch(error => {
        setError(
          "Something is wrong => " +
            alert("something must be wrong with the API link,or axios request")
        );
      });
  }, []);


  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You reloaded ${count} times`;
  });
  return (
    <StyleApp   >
      {error}
    
      {chars.map((item, index) => {
        return (
          <Character
          
            key={index}
            CharacterObject={item}

            //  name ={item.name}
            //  height={item.height}
            //  gender={item.gender}
            //  mass={item.mass}
            //  skinCo={item.skin_color}
          />
        );
      })}
           <Footertry onClick={() => setCount(count + 1)}>Click here</Footertry>

    </StyleApp>     

    
    
  );
}

export default App;

// return(
//   <Character
//   key = {index}
// CharacterObject={item}
//   />
// )
// })}
// </StyleApp>

// If I use this,Ill have to change  ittem to characterobject withint const{}= props
