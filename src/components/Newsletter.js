import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible
                ? "animate__animated animate__backInLeft"
                : "animate__animated animate__backOutRight"
            }
          >
            <div className="newsletter-bx wow slideInUp">
              <Row>
                <Col lg={12} md={6} xl={5}>
                  <h3>
                    Subscribe to our Newsletter<br></br> & Never miss latest
                    updates
                  </h3>
                  {status === "sending" && <Alert>Sending...</Alert>}
                  {status === "error" && (
                    <Alert variant="danger">{message}</Alert>
                  )}
                  {status === "success" && (
                    <Alert variant="success">{message}</Alert>
                  )}
                </Col>
                <Col md={6} xl={7}>
                  <form onSubmit={handleSubmit}>
                    <div className="new-email-bx">
                      <input
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                      />
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </TrackVisibility>
    </Col>
  );
};
