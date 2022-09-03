import React from "react";
import "./css/BuisnessCrad.css";
import { Button, Card } from "react-bootstrap";

const CardCustom = (props) => {
  const { title, text, imageLink, buttonText, name, profesion } = props;
  return (
    <Card className="card-class">
      <Card.Img variant="top" src={imageLink} className="image-box" />
      <Card.Header>
        <ul>
          <li
            style={{
              "list-style": "none",
              color: "rgb(65, 119, 167)",
              display: "flex",
            }}
          >
            {name}
          </li>
          <li
            style={{
              "list-style": "none",
              color: "rgb(64, 44, 70)",
              display: "flex",
            }}
          >
            {profesion}
          </li>
        </ul>
      </Card.Header>
      <Card.Body>
        <ul style={{ display: "flex" }}>
          <li className="unorder-list">
            <Button variant="outline-secondary">
              <a href="https://in.linkedin.com/in/gulam-mustafa-mansuri-037228130">
                linkedIn
              </a>
            </Button>
          </li>
          <li className="unorder-list">
            <Button variant="outline-secondary btn-md" >
              <a href="https://in.linkedin.com/in/gulam-mustafa-mansuri-037228130">
                Email
              </a>
            </Button>
          </li>
        </ul>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
      <Card.Footer> hhhh</Card.Footer>
    </Card>
  );
};

export default CardCustom;
