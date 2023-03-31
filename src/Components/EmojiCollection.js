import React from "react";
import EmojiCard from "./EmojiCard";
import { Card } from "semantic-ui-react";

const EmojiCollection = ({ emojis, onHandleDelete }) => {
  //creating a card for each emoji
  const renderOneEmoji = emojis.map((emoji, index) => {
    return (
      <EmojiCard key={index} emoji={emoji} onHandleDelete={onHandleDelete} />
    );
  });

  return (
    <div>
      <Card.Group itemsPerRow={5}>{renderOneEmoji}</Card.Group>
    </div>
  );
};

export default EmojiCollection;
