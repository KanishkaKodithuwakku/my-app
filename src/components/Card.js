import React from "react";
import Button from "./Button";
const Card = ({ image, van_name :cardTitle, description }) => {
  return (
    <>
      <div className="card mb-4">
        {image && <img src={image} className="card-img-top" alt={cardTitle} />}
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{description}</p>
              </div>
              <Button btnText={`more`}/>
      </div>
    </>
  );
};

Card.defaultProps = {
  cardTitle: "Card Tile",
  description: "Description",
};

export default Card;
