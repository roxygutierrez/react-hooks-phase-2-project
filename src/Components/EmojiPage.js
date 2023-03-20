import React, { useState, useEffect } from "react";
import EmojiForm from "./EmojiForm";
import EmojiCollection from "./EmojiCollection";
import Filter from "./Filter";
import { Container } from "semantic-ui-react";

const EmojiPage = () => {
  const [emojis, setEmojis] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/emojis")
      .then((resp) => resp.json())
      .then((emojiArr) => setEmojis(emojiArr));
  }, []);

  const handleNewEmojiForm = (newEmoji) => {
    fetch("http://localhost:3001/emojis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmoji),
    })
      .then((resp) => resp.json())
      .then((savedEmoji) => setEmojis([...emojis, savedEmoji]));
  };
  const emojisToDisplay = emojis.filter((selectedEmoji) => {
    if (category === "") {
      return true;
    }
    return selectedEmoji.category === category;
  });

  return (
    <Container>
      <main>
        <h3>Emoji Searcher</h3>
        <br />
        <EmojiForm onHandleNewEmojiForm={handleNewEmojiForm} />
        <br />
        <Filter onCategoryChange={setCategory} />
        <br />
        <EmojiCollection emojis={emojisToDisplay} />
        <br />
      </main>
    </Container>
  );
};

export default EmojiPage;
