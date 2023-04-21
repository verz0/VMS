import React, { useState } from 'react';
import { Modal, Col, Row, Form, Button, Alert } from 'react-bootstrap';
import { addStudent } from '../services/StudentService';

const AddStudentModal = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(e.target).then(
      (result) => {
        setShowAlert(true);
        props.setUpdated(true);
      },
      (error) => {
        alert('Failed to Add Student');
      }
    );
  };

  return (
    <div className="container">
      <Modal {...props} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Fill In Volunteer Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="FirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="FirstName" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="LastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="LastName" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="PhoneNo">
                  <Form.Label>Phone No.</Form.Label>
                  <Form.Control type="text" name="PhoneNo" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="Email" required placeholder="" />
                </Form.Group>
                <Form.Group controlId="City">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" name="City" required placeholder="" />
                </Form.Group>
                <Form.Group>
                  <p></p>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
              {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                  Volunteer added successfully!
                </Alert>
              )}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddStudentModal;
