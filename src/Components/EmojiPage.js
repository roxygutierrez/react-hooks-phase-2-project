import React, { useState, useEffect } from "react";
import EmojiForm from "./EmojiForm";
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
      .then((emoji) => console.log(emoji));
  };

  return (
    <Container>
      <main>
        <h3>Emoji Searcher</h3>
        <br />
        <EmojiCollection
          emojis={emojisToDisplay}
          onHandleDelete={handleDelete}
        />
        <br />
      </main>
    </Container>
  );
};

export default EmojiPage;
