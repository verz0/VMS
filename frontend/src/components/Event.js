import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Modal, Form, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./Event.css";

function Event() {
  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_no: "",
    email: "",
    city: "",
    eventId: null,
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/events/")
      .then((response) => {
        // Sort events by date before setting them
        const sortedEvents = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setEvents(sortedEvents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRegister = (eventId) => {
    setFormData((formData) => ({ ...formData, eventId: eventId }));
    handleShow();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:8000/events/${formData.eventId}/register/`,
        formData
      )
      .then((response) => {
        console.log(response.data);
        handleClose();
        alert('Registration successful!');
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <div>
      <h1 className="text-center mb-4" style={{ marginTop: "50px", zIndex: 2, position: "relative" }}>
        Event List
      </h1>
      <div className="d-flex flex-wrap justify-content-center">
        {events.map((event) => (
          <Fade key={event.id}>
            <Card className="m-3 event-card" style={{ width: "18rem" }}>
              <div className="event-card-image" style={{ height: "12rem", overflow: "hidden" }}>
                {event.image ? (
                  <Card.Img
                  variant="top"
                  src={"http://127.0.0.1:8000/" + event.image}
                  style={{ height: "11rem", maxWidth: "100%" }}
                />
                ) : (
                  <div style={{ height: "100%", backgroundColor: "#f8f9fa" }} />
                )}
              </div>
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>Time: {event.time}</Card.Text>
                <Card.Text>Venue: {event.venue}</Card.Text>
                <Button variant="primary" onClick={() => handleRegister(event.id)}>
                  Register
                </Button>
              </Card.Body>
            </Card>
          </Fade>
        ))}
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Fill In Volunteer Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form id={formData.eventId} onSubmit={handleSubmit}>
                <Form.Group controlId="first_name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="last_name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Event;
