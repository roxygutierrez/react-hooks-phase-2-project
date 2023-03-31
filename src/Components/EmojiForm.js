import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const EmojiForm = () => {
  //using state to make a contolled form
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewEmojiForm({
      name: name,
      image: image,
      category: category,
    });
    //reset form
    setName("");
    setImage("");
    setCategory("");
  };

  const handleNewEmojiForm = (newEmoji) => {
    fetch("http://localhost:3001/emojis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmoji),
    }).then((resp) => resp.json());
  };

  return (
    <div>
      <Form className="emoji-form" onSubmit={handleSubmit}>
        <h2 className="add-new-emoji">Add a New Emoji ✨</h2>

        <Form.Group widths="equal">
          <Form.Input
            type="text"
            name="name"
            placeholder="Emoji Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Form.Input
            type="text"
            name="image"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <div className="Category">
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select A Category...</option>
            <option value="Symbols">Symbols 💕</option>
            <option value="Smileys-People"> Smileys & People 😃</option>
            <option value="Animals-Nature">Animals & Nature 🐻</option>
            <option value="Food-Drinks">Food & Drinks 🍔</option>
            <option value="Miscellaneous"> Miscellaneous 🌐</option>
          </select>
        </div>
        <br />
        <Form.Button type="submit">Add Emoji</Form.Button>
      </Form>
    </div>
  );
};

export default EmojiForm;
