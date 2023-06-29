import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import axios from "axios";

const UpdateContact = ({ number, name, email, address }) => {
  //==========  STATES FOR UPDATING CONTACT DETAILS  ==========//
  const [updatenumber, setUpdateNumber] = useState("");
  const [updatename, setUpdateName] = useState("");
  const [updateemail, setUpdateEmail] = useState("");
  const [updateaddress, setUpdateAddress] = useState("");

  //==========  STATES FOR MODAL  ==========//

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //==========  FUNCTION FOR UPADTING CONTACT DETAILS  ==========//

  const updateContact = (number, name, email, address) => {
    setUpdateNumber(number);
    setUpdateName(name);
    setUpdateEmail(email);
    setUpdateAddress(address);
    handleShow();
  };

  //==========  FUNCTION FOR POSTING UPDATED CONTACT DETAILS  ==========//
  const saveUpdate = async () => {
    const updateData = {
      phone_number: updatenumber,
      name: updatename,
      email: updateemail,
      address: updateaddress,
    };
    const updateApi = await axios.put(
      `http://localhost:8888/${number}`,
      updateData
    );
    handleClose();
  };
  return (
    <>
      <Button
        variant="success"
        onClick={() => updateContact(number, name, email, address)}
      >
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Contact Number"
                value={updatenumber}
                onChange={(e) => setUpdateNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contact Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={updatename}
                onChange={(e) => setUpdateName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={updateemail}
                onChange={(e) => setUpdateEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={updateaddress}
                onChange={(e) => setUpdateAddress(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={saveUpdate}>
            Add Contact
          </Button>
          <Button variant="danger" onClick={() => saveUpdate()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateContact;
