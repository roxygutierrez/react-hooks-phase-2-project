import React, { useState, useEffect } from "react";
import EmojiForm from "./EmojiForm";
import EmojiCollection from "./EmojiCollection";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const EmojiPage = () => {
  const [emojis, setEmojis] = useState([]);

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

  return (
    <Container>
      <main>
        <h3>Emoji Searcher</h3>
        <br />
        <EmojiForm emojis={emojis} onHandleNewEmojiForm={handleNewEmojiForm} />
        <br />
        <EmojiCollection emojis={emojis} />
        <br />
        <Search />
      </main>
    </Container>
  );
};

export default EmojiPage;
