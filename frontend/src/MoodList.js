import React from "react";
import { ListGroup } from "react-bootstrap";

const MoodList = ({ moods }) => {
  return (
    <div>
      <h2>Mood List</h2>
      <ListGroup>
        {moods.map((mood, index) => (
          <ListGroup.Item key={index}>{mood}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default MoodList;
