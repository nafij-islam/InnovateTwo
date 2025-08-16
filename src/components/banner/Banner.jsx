import React from "react";
import "./banner.css";
import { Container } from "react-bootstrap";
import bannerimg2 from "../../assets/Bannerim2.png";

const Banner = () => {
  return (
    <section className="banner-section">
      <Container>
        <div className="banner-text">
          <h1>Get your work done with Management Tool</h1>
          <p>
            The world's first project management platform that connects
            everything
          </p>
          <div className="input-main">
            <input className="banner-input input-main" type="text" placeholder="Your business email"/>
            <button className="banner-btn">Try for free</button>
          </div>
        </div>



        <div className="banner-img2">
          <img src={bannerimg2} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
