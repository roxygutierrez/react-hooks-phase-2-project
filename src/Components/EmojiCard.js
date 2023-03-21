import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";

const EmojiCard = ({ emoji, onHandleDelete }) => {
  const { name, image, id } = emoji;

  const handleDeleteClick = () => {
    onHandleDelete(id);
  };

  return (
    <Card>
      <div className="emoji-card">
        <br />
        <Image className="emoji-image" src={image} />
        <br />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
        </Card.Content>
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
      </div>
    </Card>
  );
};

export default EmojiCard;
