import { Container, Row, Col, Card, Image } from "react-bootstrap";
import {
  FaPaintBrush,
  FaHands,
  FaHeart,
  FaBrain,
} from "react-icons/fa";

function AdultsDevelopment() {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Container className="my-5">
        <Row className="align-items-center">
          <Col lg={6}>
            <Image
              src={"/Images/banner-flower.jpg"}
              fluid
              className="rounded mt-lg-0 mt-5 col-lg-9 mb-lg-0 mb-5 responsive-image shadow-lg"
              alt="Art Classes for Adults with Developmental or Intellectual Disabilities"
            />
          </Col>
          <Col lg={6} className="mt-4 mt-lg-4">
            <Card className="border-0 bg-custom-dark">
              <Card.Body>
                <h3 className="fw-bold text-lg-start text-center">
                  CAD Art Classes for  <span className="text-main">Adults </span>
                   with Developmental or Intellectual Disabilities
                </h3>
                <h4 className="fw-medium text-lg-start text-center">
                  Empowering Creativity in a Supportive Environment
                </h4>
                <p className="mt-4">
                  Our inclusive art classes offer a vibrant and supportive
                  environment where adults with developmental or intellectual
                  disabilities can thrive. Through stimulating and colorful
                  projects, participants engage in:
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaPaintBrush
                      className="me-2"
                      style={{ color: "#ff6347" }}
                    />
                    Creative expression and self-discovery
                  </li>
                  <li className="mb-2">
                    <FaHands
                      className="me-2"
                      style={{ color: "#4682b4" }}
                    />
                    Social interaction and community building
                  </li>
                  <li className="mb-2">
                    <FaHeart
                      className="me-2"
                      style={{ color: "#32cd32" }}
                    />
                    Sensory exploration and motor skill development
                  </li>
                </ul>
                <p className="mt-4">
                  Each class is carefully designed to:
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaBrain
                      className="me-2"
                      style={{ color: "#ff4500" }}
                    />
                    Foster imagination and inspiration
                  </li>
                  <li className="mb-2">
                    <FaHands
                      className="me-2"
                      style={{ color: "#8a2be2" }}
                    />
                    Encourage conversation and connection around a
                    thought-provoking topic
                  </li>
                  <li className="mb-2">
                    <FaHeart
                      className="me-2"
                      style={{ color: "#ff6347" }}
                    />
                    Foster independence and confidence
                  </li>
                </ul>
                <p className="mt-4">
                  By integrating art-making with socialization and sensory
                  experiences, our classes:
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaBrain
                      className="me-2"
                      style={{ color: "#4682b4" }}
                    />
                    Enhance cognitive abilities and focus
                  </li>
                  <li className="mb-2">
                    <FaHands
                      className="me-2"
                      style={{ color: "#32cd32" }}
                    />
                    Develop fine motor skills and hand-eye coordination
                  </li>
                  <li className="mb-2">
                    <FaHeart
                      className="me-2"
                      style={{ color: "#ff1493" }}
                    />
                    Promote emotional well-being and self-esteem
                  </li>
                </ul>
                <p className="mt-4">
                  Join us in celebrating creativity, diversity, and inclusivity,
                  as we empower adults with developmental or intellectual
                  disabilities to reach their full potential.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdultsDevelopment;
