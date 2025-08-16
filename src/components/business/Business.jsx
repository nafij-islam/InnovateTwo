import React from 'react'
import './business.css'
import { Container,Row,Col } from 'react-bootstrap';
import businesimg1 from '../../assets/businessimg1.png'
import businesimg2 from '../../assets/businessimg2.png'

const Business = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg={6}>
                <div className='busimain'>
                    <img className='business' src={businesimg1} alt="" />
                    <div className='buimg1'>
                      <img src={businesimg2} alt="" />
                    </div>
                  
                </div>
                </Col>
                <Col lg={{span:5, offser:1}}>
                   <div>
                    <h2>We provide features for your Business</h2>
                   </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Business