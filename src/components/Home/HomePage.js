import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import AddContact from "./AddContact";
import ContactTable from "./ContactTable";


const HomePage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <MyNavbar />
          </Col>

          <Row className="my-5">
            <Col>
              <AddContact />
            </Col>
          </Row>

          <Row>
            <Col>
              <ContactTable />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
