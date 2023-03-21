import React, { useState, useEffect } from "react";
import EmojiCollection from "./EmojiCollection";
import { Container } from "semantic-ui-react";
import { useParams } from "react-router-dom";

const EmojiPage = () => {
  const [emojis, setEmojis] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("http://localhost:3001/emojis")
      .then((resp) => resp.json())
      .then((emojiArr) => setEmojis(emojiArr));
  }, []);

  const emojisToDisplay = emojis.filter((selectedEmoji) => {
    if (category === "all") {
      return true;
    }
    return selectedEmoji.category.toLowerCase() === category.toLowerCase();
  });

  const handleDelete = (emojiId) => {
    fetch(`http://localhost:3001/emojis/${emojiId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        const newEmojiArr = emojis.filter((emoji) => {
          return emoji.id !== emojiId;
        });
        setEmojis(newEmojiArr);
      });
  };

  const categoryMap = {
    symbols: "Symbols 💕",
    "smileys-people": "Smileys & People 😃",
    "animals-nature": "Animals & Nature 🐻",
    miscellaneous: "Miscellaneous 🌐",
    "food-drinks": "Food & Drinks 🍔",
  };

  return (
    <Container>
      <br />
      <h4 className="category">{categoryMap[category]}</h4>

      <EmojiCollection emojis={emojisToDisplay} onHandleDelete={handleDelete} />
    </Container>
  );
};

export default EmojiPage;
