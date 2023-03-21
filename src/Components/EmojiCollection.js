import React from "react";
import EmojiCard from "./EmojiCard";
import { Card } from "semantic-ui-react";

const EmojiCollection = ({ emojis, onHandleDelete }) => {
  const renderOneEmoji = emojis.map((emoji, index) => {
    return (
      <EmojiCard key={index} emoji={emoji} onHandleDelete={onHandleDelete} />
    );
  });

  return <Card.Group itemsPerRow={6}>{renderOneEmoji}</Card.Group>;
};

export default EmojiCollection;
