import React, { useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";

const EmojiCard = ({ emoji, onHandleDelete }) => {
  const { name, image, id } = emoji;
  const [displayDetails, setDisplayDetails] = useState(false);

  const handleDeleteClick = () => {
    onHandleDelete(id);
  };

  const handleCardClick = () => {
    setDisplayDetails(!displayDetails);
  };

  return (
    <Card className="emoji-card" onClick={handleCardClick}>
      <div>
        <br />
        <Image className="emoji-image" src={image} />
        <br />
        <Card.Content style={{ display: displayDetails ? "block" : "none" }}>
          <Card.Header>{name}</Card.Header>
          <br />
          <div className="remove-btn">
            <Button
              basic
              content="Remove"
              icon="trash"
              labelPosition="left"
              onClick={handleDeleteClick}
            />
          </div>
        </Card.Content>
      </div>
    </Card>
  );
};

export default EmojiCard;
