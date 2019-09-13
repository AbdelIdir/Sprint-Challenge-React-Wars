import React from "react";
import styled from "styled-components";

const StyleC1 = styled.div`
  background: blue;
  color: black;
`;
function Character(props) {
  const { item } = props;
  console.log(item);
  return (
    <StyleC1>
      {" "}
      <div>
        
        {` Name : ${props.name} 
                   Height : ${props.height}
                   Gender : ${props.gender}
                   Mass : ${props.mass}
                     SkinColor : ${props.skinColor}`} 
      </div>
    </StyleC1>
  );
}

export default Character;
