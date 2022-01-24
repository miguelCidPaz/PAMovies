import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GenreType(props) {
  const [myID] = useState({ id: props.id, title: props.title });

  const navigate = useNavigate();

  let newid = myID.id;
  let newtitle = myID.title;

  return (
    <div
      newid={myID.id}
      newtitle={myID.title}
      onClick={() => {
        navigate(`/Genres/${newtitle}/${newid}/`);
      }}
      key={newid}
    >
      <img src={props.theme} className="image-genres" alt="film" />
      <div>
        <p className="centerGender">{props.title}</p>
      </div>
    </div>
  );
}
export default GenreType;
