import { Container, Row, Col, Card, Image } from "react-bootstrap";
import {
  FaPalette,
  FaHandHoldingHeart,
  FaSmile,
  FaBrush,
} from "react-icons/fa";

function ArtForSenior() {
  return (
    <div >
      <Container className="my-5">
        <Row className="align-items-center flex-lg-row flex-column-reverse">
        
          <Col lg={6} className="mt-4 mt-md-0">
            <Card className="border-0">
              <Card.Body>
                <h3 className="fw-bold text-lg-start text-center">
                  CAD <span className="text-main">Art for Seniors</span> Program
                </h3>
                <h4 className="fw-medium text-lg-start text-center">
                  Unleashing Creativity in Later Life
                </h4>
                <p className="mt-4 common-description">
                  Our CAD Art for Seniors program is a vibrant and inclusive
                  initiative designed to nurture the artistic spirit in
                  individuals at every level of care. We believe that creativity
                  knows no age bounds and that every senior has an inner artist
                  waiting to be discovered.
                </p>
                <p className="mt-4">
                  Our program is tailored to meet the unique needs of each
                  participant, empowering activity staff to:
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaPalette
                      className="me-2"
                      style={{ color: "#ff6347" }}
                    />
                    Adapt art sessions to accommodate physical and cognitive
                    abilities
                  </li>
                  <li className="mb-2">
                    <FaHandHoldingHeart
                      className="me-2"
                      style={{ color: "#4682b4" }}
                    />
                    Foster a sense of community and social connection
                  </li>
                  <li className="mb-2">
                    <FaSmile
                      className="me-2"
                      style={{ color: "#32cd32" }}
                    />
                    Encourage self-expression and creativity
                  </li>
                </ul>
                <p className="mt-4">
                  By providing a supportive and stimulating environment, we help
                  seniors:
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaBrush
                      className="me-2"
                      style={{ color: "#ff4500" }}
                    />
                    Rekindle their passion for art and creativity
                  </li>
                  <li className="mb-2">
                    <FaPalette
                      className="me-2"
                      style={{ color: "#8a2be2" }}
                    />
                    Explore new forms of self-expression
                  </li>
                  <li className="mb-2">
                    <FaHandHoldingHeart
                      className="me-2"
                      style={{ color: "#ff6347" }}
                    />
                    Enhance their cognitive and motor skills
                  </li>
                  <li className="mb-2">
                    <FaSmile
                      className="me-2"
                      style={{ color: "#4682b4" }}
                    />
                    Boost their mood and overall well-being
                  </li>
                </ul>
                <p className="mt-4">
                  Join us in celebrating the artistic potential of our seniors
                  and empowering them to unleash their creativity, regardless of
                  experience or ability.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-lg-end" lg={6}>
            <Image
              src={"/Images/design-art.jpg"}
              fluid
              className="rounded mt-lg-0 mt-5 col-lg-9 mb-lg-0 mb-5 responsive-image shadow-lg"
              alt="CAD Art for Seniors"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ArtForSenior;
