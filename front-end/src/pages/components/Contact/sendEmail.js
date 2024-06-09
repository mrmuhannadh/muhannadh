import React, { useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import emailjs from "@emailjs/browser";
import Toaster from "./toaster";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

export default function SendEmail() {
  const form = useRef();
  const sent = () => toast("Email Sent");
  const errorE = () => toast("Error with sending email");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm("service_c3ddsiu", "template_usnaed8", form.current, {
        publicKey: "sXZ5S7z2jqFLetPB7",
      })
      .then(
        () => {
          sent();
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          errorE();
          setLoading(false);
        }
      );
  };
  return (
    <div className={`${loading ? "loadingDiv" : ""}`}>
      <Form ref={form} onSubmit={sendEmail}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="fromUserName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              className="inputBox"
              name="from_name"
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
            name="message"
            required
          />
        </Form.Group>

        <button className="btn submitButton">Send</button>
      </Form>
      <Toaster />
      <div className={` ${loading ? "loadingOverlay" : "hiddenOverlay"}`}>
        <ClipLoader className="loadingIcon" size={50} color="#FF4500" />
      </div>
    </div>
  );
}
