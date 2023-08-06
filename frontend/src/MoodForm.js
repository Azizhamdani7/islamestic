import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MoodForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    mood_name: "",
    ayat: "",
    Ayat_English: "",
    Ayat_Meaning: "",
    Ayat_Validity: "",
    mood_image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <Container style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Add Data</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="mood_name">
          <Form.Label>Mood Name:</Form.Label>
          <Form.Control
            type="text"
            name="mood_name"
            value={formData.mood_name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="ayat">
          <Form.Label>Ayat:</Form.Label>
          <Form.Control
            type="text"
            name="ayat"
            value={formData.ayat}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="Ayat_English">
          <Form.Label>Ayat (English):</Form.Label>
          <Form.Control
            type="text"
            name="Ayat_English"
            value={formData.Ayat_English}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="Ayat_Meaning">
          <Form.Label>Ayat Meaning:</Form.Label>
          <Form.Control
            type="text"
            name="Ayat_Meaning"
            value={formData.Ayat_Meaning}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="Ayat_Validity">
          <Form.Label>Ayat Validity:</Form.Label>
          <Form.Control
            type="text"
            name="Ayat_Validity"
            value={formData.Ayat_Validity}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="mood_image">
          <Form.Label>Mood Image:</Form.Label>
          <Form.Control
            type="text"
            name="mood_image"
            value={formData.mood_image}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Data
        </Button>
      </Form>
    </Container>
  );
};

export default MoodForm;
