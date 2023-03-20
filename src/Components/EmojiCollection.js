import React from "react";
import EmojiCard from "./EmojiCard";
import { Icon } from "semantic-ui-react";

const EmojiCollection = ({ emojis, onHandleDelete }) => {
  const renderOneEmoji = emojis.map((emoji, index) => {
    return (
      <EmojiCard key={index} emoji={emoji} onHandleDelete={onHandleDelete} />
    );
  });

  return (
    <Icon.Group side="huge">
      <div>{renderOneEmoji}</div>
    </Icon.Group>
  );
};

export default EmojiCollection;
