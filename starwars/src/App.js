import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./components/cards";
import styled from "styled-components";

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

function App() {
  const [error, setError] = useState();
  const [chars, setChars] = useState([]);
  // const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const [page, setPage] = useState("");
  const [mainApi, setMainApi] = useState("https://swapi.co/api/people/");
  const Footertry = styled.footer`
    background: ${backgroundColor};
    color: white;
    height: 40px;
    width: 40px;
    padding: 20px;
  `;

  const Next = styled.footer`
    background: green;
    color: white;
    height: 40px;
    width: 40px;
    padding: 20px;
  `;

  const Previous = styled.footer`
    background: yellow;
    color: black;
    height: 40px;
    width: 40px;
    padding: 20px;
  `;

  const StyleApp = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: black;
    border: 15px solid ${backgroundColor};
    height: 100%;
  `;

  useEffect(() => {
    axios
      .get(mainApi)
      .then(responseApi => {
        let pagesystem = responseApi.data;
        setPage(pagesystem);
        console.log("main page", responseApi.data);
        let res = responseApi.data.results;
        console.log(res);
        setChars(res);
      })
      .catch(error => {
        setError(
          "Something is wrong => " +
            alert("something must be wrong with the API link,or axios request")
        );
      });
  }, [mainApi]);

  // document.title = `You reloaded ${count} times`;

  return (
    <StyleApp>
      {error}

      {chars.map((item, index) => {
        return <Cards key={index} CharacterObject={item} />;
      })}
      <Footertry onClick={() => setBackgroundColor("purple")}>
        Click here
      </Footertry>
      <Next onClick={() => setMainApi(page.next)}>Next</Next>
      <Previous onClick={() => setMainApi(page.previous)}>Previous</Previous>
    </StyleApp>
  );
}

export default App;
