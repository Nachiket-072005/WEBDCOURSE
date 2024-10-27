import React from "react";

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <div>
        <p>
          Name State Value in {props.title} Component: <b>{props.name}</b>
        </p>
      </div>
    </div>
  );
};

export default Card;
