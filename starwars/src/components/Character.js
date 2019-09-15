import React from "react";
import styled from "styled-components";

const StyleC1 = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: black;
  font-weight: bold;
  margin: 10px;
  padding: 5px;
  width: 210px;
  height: 210px;
`;

function Character(props) {
  const { CharacterObject } = props;
  console.log(CharacterObject);
  return (
    <StyleC1>
      <p>Name : {CharacterObject.name} </p>
      <p>
        {" "}
        Height :{" "}
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

export default Character;

// <StyleC1>
//       {" "}
//       <div>

//         {` Name : ${props.name}
//                    Height : ${item.height}
//                    Gender : ${item.gender}
//                    Mass : ${item.mass}
//                      SkinColor : ${item.skinCo}`}
//       </div>
//     </StyleC1>
//   );
// }
