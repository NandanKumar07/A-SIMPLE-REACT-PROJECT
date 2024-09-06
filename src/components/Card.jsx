import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [btnName, setBtnName] = useState(props.btnName); 
  const [rotated, setRotated] = useState(false);
  const [description, setDescription] = useState(props.description);
  
  const handleClick = () => {
    setBtnName(changeName(btnName));
    setDescription(changeDes(description));
    setRotated(!rotated);
  };

  const changeName = (name) => {
    if (name === 'GURU') return 'CHELA';
    else return 'GURU';
  };

  const changeDes = (description) => {
    const guru = 'If you want to see the magic and want me to turn this old man to a bright young boy "CLICK THE BUTTON BELOW"'
    const chela = 'if you want to see the magic and want me to turn this young boy into an old man "CLICK THE BUTTON BELOW"'
    if (description === guru) return chela;
    else return guru;
  }

  return (
    <div>
      <div className="card">
        <h2 className="card_heading">{props.cardName}</h2>

        <img
          src={props.img_src}
          className={rotated ? "rotate" : ""}
          alt="card image"
        />

        <p className="card_des">{description}</p>
        <button onClick={handleClick}>{btnName}</button>
      </div>
    </div>
  );
};

export default Card;
