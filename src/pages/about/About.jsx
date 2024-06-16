import React from "react";
import { Container, Row, Col, Card, Image, Badge } from "react-bootstrap";
import img from "../../assets/images/whatwedo.jpg";
import img1 from "../../assets/images/about.jpg";
import img2 from "../../assets/images/our_mission.jpg";
import img3 from "../../assets/images/our_vision.jpg";
import img4 from "../../assets/images/core-values.jpg";
import "./About.css";

const AcronymBadge = ({ letter, meaning }) => (
  <div className="d-flex align-items-center">
    <Badge
      pill
      variant="primary"
      className="mr-4 mb-2 badge"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      {letter} - {meaning}
    </Badge>
  </div>
);

const About = () => {
  return (
    <>
      <div className="header-container">
        <Image src={img} className="header-image w-100 " />
        <div className="header-text  ">Who We Are</div>
      </div>
      <Container className="p-5 overflow-hidden">
        <Row
          className="my-5 align-items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Col md={6}>
            <Image
              className="img-fluid img-thumbnail gray-shadow"
              src={img1}
              fluid
            />
          </Col>
          <Col md={6}>
            <Card class>
              <Card.Body>
                <Card.Title>Who We Are</Card.Title>
                <Card.Text className="text-muted">
                  Thrive Insurance Brokers Limited is a registered insurance
                  broker providing risk management and insurance solutions for
                  business and individuals. We help clients better quantify and
                  manage their risk in order to survive and thrive. We are
                  registered and licensed by the Nigerian Council of Registered
                  Insurance Brokers (NCRIB) and the National Insurance
                  Commission (NAICOM) in Compliance with the Insurance Act of
                  2003 and the Nigerian Council of Registered Insurance Brokers
                  (NCRIB) Act of 2003.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-5 align-items-center" data-aos="fade-up">
          <Col md={{ order: "last", span: 4 }}>
            <Image
              className="img-fluid img-thumbnail gray-shadow"
              src={img2}
              fluid
            />
          </Col>
          <Col md={6}>
            <Card class>
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text className="text-muted">
                  To provide outstanding insurance intermediation service
                  through continuous customer evaluation and cutting-edge
                  technology.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row
          className="my-5 align-items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Col md={6}>
            <Image
              className="img-fluid img-thumbnail gray-shadow"
              src={img3}
              fluid
            />
          </Col>
          <Col md={6}>
            <Card class>
              <Card.Body>
                <Card.Title>Vision</Card.Title>
                <Card.Text className="text-muted">
                  To be a thought leader in the insurance industry in Africa
                  while delivering superior services to our clients.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Acronym Section */}
        <Row
          className="my-5 align-items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Col md={{ order: "last", span: 4 }}>
            <Image
              className="img-fluid img-thumbnail gray-shadow"
              src={img4}
              fluid
            />
          </Col>
          <Col md={6}>
            <Card class>
              <Card.Body>
                <Card.Title className="fs-3">Our Core Values</Card.Title>
                <Card.Text>
                  <div>
                    <AcronymBadge letter="P" meaning="Proactive" />
                  </div>
                  <div>
                    <AcronymBadge letter="R" meaning="Reliable" />
                  </div>
                  <div>
                    <AcronymBadge letter="O" meaning="Openness" />
                  </div>
                  <div>
                    <AcronymBadge letter="T" meaning="Team Work" />
                  </div>
                  <div>
                    <AcronymBadge letter="E" meaning="Exceptional Service" />
                  </div>
                  <div>
                    <AcronymBadge letter="C" meaning="Customer Focus" />
                  </div>
                  <div>
                    <AcronymBadge letter="T" meaning="Technology" />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
