import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import UpdateContact from "./UpdateContact";
import ViewContact from "./ViewContact";

const ContactTable = () => {
  //==========  STATES FOR GETTING CONTACT DETAILS  ==========//
  const [data, setdata] = useState([]);

  //==========  FUNCTION FOR GET CONTACT DETAILS   ===========//

  const getData = async () => {
    const { data } = await axios.get("http://localhost:8888/");
    setdata(data.response);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>City</th>
            <th>Update</th>
            <th>View</th>
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
                  <td>
                    <UpdateContact
                      number={contact.phone_number}
                      name={contact.name}
                      email={contact.email}
                      address={contact.address}
                    />
                  </td>

                  <td>
                    <ViewContact number={contact.phone_number} />{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default ContactTable;
