import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { FaPaintBrush, FaHands, FaHeart, FaBrain } from "react-icons/fa";

function AdultsDevelopment() {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <Image
              src="/images_2/Art for Special Needs-1.webp"
              fluid
              className="rounded mt-lg-0 mt-5 col-lg-9 mb-lg-0 mb-5 responsive-image "
              alt="Art Classes for Adults with Developmental or Intellectual Disabilities"
            />
            <Image
              src="/images_2/Art for Special Needs-2.webp"
              fluid
              className="rounded mt-lg-4 mt-5 col-lg-9 mb-lg-0 mb-5 responsive-image "
              alt="Art Classes for Adults with Developmental or Intellectual Disabilities"
            />
            {/* <video
              className="img-fluid child-artist mt-4"
              controls
              loop
              autoPlay
            >
              <source src="/public/videoes/" type="video/mp4" />
            </video> */}
          </Col>
          <Col md={6} className="mt-4 mt-md-4">
            <Card className="border-0 bg-custom-dark">
              <Card.Body>
                <h3 className="fw-bold text-md-start text-center">
                  CAD Art Classes for{" "}
                  <span className="text-main">Special Needs </span>
                  with Developmental or Intellectual Disabilities
                </h3>
                <h4 className="fw-medium text-md-start text-center">
                  Empowering Creativity in a Supportive Environment
                </h4>
                <p className="mt-4 common-description">
                  Our inclusive art classes create a warm and welcoming
                  environment where children and young individuals with
                  developmental or intellectual disabilities can shine. Through
                  fun and colorful projects, participants can express their
                  creativity, learn new skills, and build confidence in a
                  nurturing community
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
                    <FaHands className="me-2" style={{ color: "#4682b4" }} />
                    Social interaction and community building
                  </li>
                  <li className="mb-2">
                    <FaHeart className="me-2" style={{ color: "#32cd32" }} />
                    Sensory exploration and motor skill development
                  </li>
                </ul>
                <p className="mt-4">Each class is carefully designed to:</p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaBrain className="me-2" style={{ color: "#ff4500" }} />
                    Foster imagination and inspiration
                  </li>
                  <li className="mb-2">
                    <FaHands className="me-2" style={{ color: "#8a2be2" }} />
                    Encourage conversation and connection around a
                    thought-provoking topic
                  </li>
                  <li className="mb-2">
                    <FaHeart className="me-2" style={{ color: "#ff6347" }} />
                    Foster independence and confidence
                  </li>
                </ul>
                <p className="mt-4">
                  By integrating art-making with socialization and sensory
                  experiences, our classes:
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaBrain className="me-2" style={{ color: "#4682b4" }} />
                    Enhance cognitive abilities and focus
                  </li>
                  <li className="mb-2">
                    <FaHands className="me-2" style={{ color: "#32cd32" }} />
                    Develop fine motor skills and hand-eye coordination
                  </li>
                  <li className="mb-2">
                    <FaHeart className="me-2" style={{ color: "#ff1493" }} />
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
