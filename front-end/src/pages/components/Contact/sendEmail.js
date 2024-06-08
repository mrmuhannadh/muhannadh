import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function SendEmail() {
  return (
    <div className="">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="fromUserName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              className="inputBox"
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Message..."
            className="inputBox"
            required
          />
        </Form.Group>

        <Button type="submit" className="submitButton">
          Submit
        </Button>
      </Form>
    </div>
  );
}
