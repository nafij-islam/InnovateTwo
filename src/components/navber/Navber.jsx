import React from "react";
import "./navber.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/Logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";


const Navber = () => {
  return (
    <section className="navber-section">
      <Container>
        <Navbar expand="lg" className="">
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="menu mx-auto">
              <Nav.Link className="list-item" href="#home">
                Home <MdKeyboardArrowDown />

              </Nav.Link>
              <Nav.Link className="list-item" href="#home">
                Features <MdKeyboardArrowDown />

              </Nav.Link>
              <Nav.Link className="list-item" href="#home">
                Service <MdKeyboardArrowDown />

              </Nav.Link>
              <Nav.Link className="list-item" href="#link">
                Pages <MdKeyboardArrowDown />

              </Nav.Link>
              <Nav.Link className="list-item" href="#link">
                Blog <MdKeyboardArrowDown />

              </Nav.Link>
            </Nav>
            <div className="nav-btn-main">
              <button className="navber-btn1">Register</button>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
};

export default Navber;
