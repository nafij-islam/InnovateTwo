import React from "react";
import "./business.css";
import { Container, Row, Col } from "react-bootstrap";
import businessicon1 from "../../assets/bussiIcon1.png";
import businessicon2 from "../../assets/bussiIcon2.png";
import businessicon3 from "../../assets/bussiIcon3.png";
import businessimgmain from "../../assets/bussinessimgmain.png";

const Business = () => {
  return (
    <section className="business-section">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="busimain">
              <div className="img-main">
                <img src={businessimgmain} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="busi-right1">
              <div className="busi-right">
              <h2 className="business-heading">
                We provide features for your Business
              </h2>
            </div>

            <div className="busi-card-main">
              <div>
                <img src={businessicon1} alt="" />
                <h2>Fast and Easy to use</h2>
                <p>Easily to convert API with just a few clicks</p>
              </div>

              <div>
                <img src={businessicon2} alt="" />
                <h2>Safely Security</h2>
                <p>Easily to convert API with just a few clicks</p>
              </div>

              <div>
                <img src={businessicon3} alt="" />
                <h2>Get Organized</h2>
                <p>Easily to convert API with just a few clicks</p>
              </div>

              <div>
                <button>Get Started</button>
              </div>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Business;
