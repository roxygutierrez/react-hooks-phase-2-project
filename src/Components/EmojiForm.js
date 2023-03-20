import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const EmojiForm = ({ onHandleNewEmojiForm }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleNewEmojiForm({
      name: name,
      image: image,
      category: category,
    });
    setName("");
    setImage("");
    setCategory("");
  };

  return (
    <div>
      <h4>Add a New Emoji</h4>
      <Form onSubmit={handleSubmit}>
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
            <option value="Hearts">Hearts</option>
            <option value="People">People</option>
            <option value="Smiley">Smiley</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>
        <br />
        <Form.Button type="submit">Add Emoji</Form.Button>
      </Form>
    </div>
  );
};

export default EmojiForm;