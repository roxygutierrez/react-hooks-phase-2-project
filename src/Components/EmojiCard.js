import React from "react";
import { Card } from "semantic-ui-react";

const EmojiCard = ({ emoji, onHandleDelete }) => {
  const { name, image, id, category } = emoji;

  const handleDeleteClick = () => {
    onHandleDelete(id);
  };

  return (
    <Card>
      <div className="emoji-card">
        <img src={image} alt={name} title={name} />
        <p>{name}</p>

        <p>
          <b>Category: </b>
          {category}
        </p>
        <button onClick={handleDeleteClick}>Delete Emoji</button>
      </div>
    </Card>
  );
};

export default EmojiCard;
