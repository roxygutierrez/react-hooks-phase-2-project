import React from "react";
import { Card } from "semantic-ui-react";

const EmojiCard = ({ emoji, onHandleDelete }) => {
  const { name, image, category } = emoji;

  const handleDeleteClick = (e) => {
    console.log(e);
    onHandleDelete();
  };

  return (
    <Card>
      <div>
        <div className="image">
          <img src={image} alt={name} title={name} />
          <button onClick={handleDeleteClick}>🗑</button>
        </div>
      </div>
    </Card>
  );
};

export default EmojiCard;
