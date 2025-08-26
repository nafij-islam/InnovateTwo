import React from "react";
import "./app.css";
import { Container,Row,Col } from "react-bootstrap";

const Apps = () => {
  return (
    <section className="app-section">
      <Container>
        <Row>
          <Col lg={5}>
            <div>
              <h3 className="apps-p">Integrations</h3>
              <h2 className="apps-head">Easily integrate with your favorite apps</h2>
              <p className="apps-pera">
                App integration, in a general sense, is the process of bringing
                resources or capabilities from one application to another. As
                the world of apps continues to evolve, app integration is
                becoming expected in many contexts.
              </p>
              <button className="apps-btn">Get Started</button>
            </div>
          </Col>

          <Col lg={{ span: 6, offset: 1 }}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Apps;
