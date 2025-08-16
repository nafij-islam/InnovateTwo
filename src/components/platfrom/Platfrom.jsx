import React from "react";
import "./platfrom.css";
import { Container } from "react-bootstrap";
import platimg1 from "../../assets/Platcard1.png";
import platimg2 from "../../assets/Platcard2.png";
import platimg3 from "../../assets/Platcard3.png";
import platdirection1 from "../../assets/platdirection.png";
import platdirection2 from "../../assets/platdirection2.png";

const Platfrom = () => {
  return (
    <section className="platfrom-section">
      <Container>
        <div className="plat-heading">
          <h2>How simple is it to use our platform?</h2>
          <p>
            This Innovate Con guide explores the most popular platforms and
            walks you through how to use them to grow your business.
          </p>
        </div>

        <div className="platcard-main">
          <div className="card-main">
            <img src={platimg1} alt="" />
            <h3>Login or sign up to be able use our platform</h3>
            <p>
              This quickstart shows you how to use Identity Platform to sign in
              a user with an email and password.{" "}
            </p>

            <div className="platdirection">
              <img src={platdirection1} alt="" />
            </div>
          </div>
          <div className="card-main">
            <img src={platimg2} alt="" />
            <h3>Connect your website with just a few click</h3>
            <p>
              This quickstart shows you how to use Identity Platform to sign in
              a user with an email and password.{" "}
            </p>
            <div className="platdirection2">
              <img src={platdirection2} alt="" />
            </div>
          </div>
          <div className="card-main">
            <img src={platimg3} alt="" />
            <h3>Take some sales data that you want</h3>
            <p>
              This quickstart shows you how to use Identity Platform to sign in
              a user with an email and password.{" "}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Platfrom;
