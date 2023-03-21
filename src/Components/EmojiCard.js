import React from "react";
import { Card } from "semantic-ui-react";

const EmojiCard = ({ emoji, onHandleDelete }) => {
  const { name, image, category, id } = emoji;

  const handleDeleteClick = () => {
    onHandleDelete(id);
  };

  return (
    <Card>
      <div>
        <img src={image} alt={name} title={name} />
        <h4>Description:</h4>
        <p>{name}</p>
        <h4>Category:</h4>
        <p>{name}</p>
        <button onClick={handleDeleteClick}>🗑</button>
      </div>
    </Card>
  );
};

export default EmojiCard;
