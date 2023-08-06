import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const moodsList = [
  "angry",
  "Anxious",
  "Bored",
  "Confident",
  "Confused",
  "Content",
  "Depressed",
  "Doubtful",
  "Grateful",
  "Greedy",
  "Guilty",
  "Happy",
  "Hurt",
  "Hypocritical",
  "Indecisive",
  "Jealous",
  "Lazy",
  "Lonely",
  "Lost",
  "Nervous",
  "Overwhelmed",
  "Regret",
  "Sad",
  "Scared",
  "Suicidal",
  "Tired",
  "Unloved",
  "Weak",
  "Anticipation",
  "Aroused",
  "Curious",
  "Defeated",
  "Desire",
  "Desperate",
  "Determined",
  "Disbelief",
  "Envious",
  "Hatred",
  "Humiliated",
  "Impatient",
  "Insecure",
  "Irritated",
  "Love",
  "Nostalgic",
  "Offended",
  "Peaceful",
  "Rage",
  "Satisfied",
  "Uncertain",
  "Uneasy",
];

const App = () => {
  const [formData, setFormData] = useState({
    mood_name: "",
    ayat: "",
    Ayat_English: "",
    Ayat_Meaning: "",
    Ayat_Validity: "",
    mood_image: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", content: "" });

    try {
      const response = await axios.post(
        "http://localhost:5001/api/add",
        formData
      );
      console.log(response.data);
      setMessage({ type: "success", content: "Data saved successfully" });
      setFormData((prevData) => ({
        ...prevData,
        ayat: "",
        Ayat_English: "",
        Ayat_Meaning: "",
        Ayat_Validity: "",
        mood_image: "",
      }));
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", content: "Failed to save data" });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage({ type: "", content: "" });
      }, 5000);
    }
  };

  return (
    <Container style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Add Data</h2>
      {message.type === "success" && (
        <Alert variant="success">{message.content}</Alert>
      )}
      {message.type === "error" && (
        <Alert variant="danger">{message.content}</Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="mood_name">
          <Form.Label>Mood Name:</Form.Label>
          <Form.Control
            as="select"
            name="mood_name"
            value={formData.mood_name}
            onChange={handleChange}
          >
            <option value="">Select a Mood</option>
            {moodsList.map((mood) => (
              <option key={mood} value={mood}>
                {mood}
              </option>
            ))}
          </Form.Control>
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
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? (
            <>
              <Spinner animation="border" size="sm" />
              Saving...
            </>
          ) : (
            "Add Data"
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default App;

