import React, { useState } from "react";
import "./css/BuisnessCrad.css";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import nature1 from "../images/nature1.jpg";
import nature2 from "../images/nature2.jpg";
import nature3 from "../images/nature3.jpeg";
// import nature4 from "../images/nature4.jpg";
import CustomCard from "./Card";

const BuisnessCard = () => {
  const [cardContainent, setCardContainet] = useState([
    {
      title: "",
      text: "",
      imageLink: "",
      buttonText: "",
      name: "",
      profesion: "",
    },
  ]);
  return (
    <Container fluid>
      <Container>
        <Row>
          <Col className="colomn">
            <CustomCard
              title="first card"
              text="Some quick example text to build on the card title and make up the bulk of the card's content."
              imageLink={nature1}
              buttonText="go away!"
              name="Gulam Mustafa"
              profesion="Software Developer"
            ></CustomCard>
          </Col>
          <Col>
            <Card className="card-class">
              <Card.Img variant="top" src={nature2} className="image-box" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-class">
              <Card.Img variant="top" src={nature3} className="image-box" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card className="card-class">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col> secound</Col>
          <Col> third</Col>
        </Row>
      </Container>
    </Container>
  );
};

export default BuisnessCard;
