import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

import whatwedo from "../assets/images/whatwedo.jpg";
import img from "../assets/images/what-we-do.png";
import serviceImg from "../assets/images/service.jpg";
import edgeImg from "../assets/images/competion.jpg";

const Whatwedo = () => {
  return (
    <>
      <div className="header-container">
        <Image src={whatwedo} className="header-image " />
        <div className="header-text">What we do</div>
      </div>

      <Container className="p-5 overflow-hidden">
        <Row className="my-5" data-aos="fade-up">
          <Col md={6}>
            <Image src={img} fluid />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>What we do</Card.Title>
                <Card.Text>
                  At Thrive Insurance Brokers Limited, we offer superior
                  insurance intermediary service to both individual and
                  corporate clients. We are committed to providing outstanding
                  level of service to our clients who are the center of
                  everything we do. <br />
                  Our culture of professionalism and customer-centeredness have
                  set us apart from the pack. We work with business needs and
                  individual circumstances. Hence, we are able to recommend
                  solutions from our broad range of products and services that
                  mitigate risk and add value.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row
          className="my-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Our Services</Card.Title>
                <Card.Text>
                  <ul>
                    <li className="list-item">Risk Assessment</li>
                    <li className="list-item">Advisory services & solutions</li>
                    <li className="list-item">
                      Negotiations of competitive premiums and policy terms with
                      insurers; giving clients the best coverage at optimal
                      price
                    </li>
                    <li className="list-item">
                      Ensuring prompt arrangement of insurance cover and
                      renewals
                    </li>
                    <li className="list-item">
                      Researching policies from different insurers
                    </li>
                    <li className="list-item">
                      Placing of client's business with reputable insurers
                    </li>
                    <li className="list-item">
                      Claims Processing / administration
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Image src={serviceImg} fluid />
          </Col>
        </Row>
        <Row
          className="my-5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Col md={6}>
            <Image src={edgeImg} fluid />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Our Competitive Edge</Card.Title>
                <Card.Text>
                  Our vision is to create a better everyday life for our
                  customers. We aim to achieve this by fostering a culture of
                  innovation, sustainability, and social responsibility. We
                  envision a future where our solutions contribute to a more
                  connected and prosperous world.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Whatwedo;
