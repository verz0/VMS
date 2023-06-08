import React, { useState } from 'react';
import { Modal, Col, Row, Form, Button, Alert } from 'react-bootstrap';
import { updateStudent } from '../services/StudentService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateStudentModal = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(props.student.studentId, e.target)
      .then((result) => {
        toast.success('Volunteer information updated successfully.');
        setShowAlert(true);
        props.setUpdated(true);
      })
      .catch((error) => {
        toast.error('Failed to update volunteer information.');
      });
  };

  return (
    <div className="container">
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Update Volunteer Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="FirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="FirstName" required defaultValue={props.student.FirstName} placeholder="" />
                </Form.Group>
                <Form.Group controlId="LastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="LastName" required defaultValue={props.student.LastName} placeholder="" />
                </Form.Group>
                <Form.Group controlId="PhoneNo">
                  <Form.Label>Phone No.</Form.Label>
                  <Form.Control type="text" name="PhoneNo" required defaultValue={props.student.PhoneNo} placeholder="" />
                </Form.Group>
                <Form.Group controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="Email" required defaultValue={props.student.Email} placeholder="" />
                </Form.Group>
                <Form.Group controlId="City">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" name="City" required defaultValue={props.student.City} placeholder="" />
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
                  Volunteer information updated successfully.
                </Alert>
              )}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateStudentModal;
