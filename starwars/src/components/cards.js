import React from "react";
import styled from "styled-components";

function Cards(props) {
  const { CharacterObject } = props;

  const StyleC1 = styled.div`
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-weight: bold;
    margin: 10px;
    padding: 5px;
    width: 210px;
    height: 210px;
  `;

  function handleClick() {
    alert("The Character's name was clicked .");
  }
  if (!CharacterObject) return <h3>Loading...Please hold on</h3>;
  return (
    <StyleC1>
      <p onClick={handleClick}>Name : {CharacterObject.name} </p>
      <p>
        Height :
        {CharacterObject.height > 160 &&
          " That's a tall person => " + CharacterObject.height + " cm "}
        {CharacterObject.height < 160 &&
          " That's a short person => " + CharacterObject.height + " cm "}
      </p>
      <p>
        Gender : {CharacterObject.gender === "n/a" && "It's a robot "}
        {CharacterObject.gender === "male" && "It's a man"}
        {CharacterObject.gender === "female" && "It's a woman "}
      </p>
      <p>Mass : {CharacterObject.mass}</p>
      <p>SkinColor : {CharacterObject.skin_color}</p>
    </StyleC1>
  );
}

export default Cards;
