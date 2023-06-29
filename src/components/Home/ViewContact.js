import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import axios from "axios";
import UpdateContact from "./UpdateContact";

const ViewContact = ({ number }) => {
  //==========  STATES FOR GETTING CONTACT DETAILS  ==========//
  const [data, setdata] = useState([]);

  //==========  STATES AND FUNCTIONS FOR MODAL  ==========//

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //========== FUNCTION FOR GET API DATA  ==========//
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:8888/view/${number}`);
    setdata(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        View
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((contact, index) => {
                  return (
                    <tr key={index}>
                      <td>{contact.phone_number}</td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.address}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewContact;
