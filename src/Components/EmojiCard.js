import React from "react";
import { Card } from "semantic-ui-react";

const EmojiCard = ({ emoji }) => {
  const { name, image, category } = emoji;

  return (
    <Card>
      <div>
        <div className="image">
          <img src={image} alt={name} title={name} />
        </div>
      </div>
    </Card>
  );
};

export default EmojiCard;
