import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPalette, FaFileAlt, FaRuler } from "react-icons/fa";

const Fashion = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Container className="my-5">
        <Row className="align-items-center">
          <Col
            className="d-lg-flex justify-content-end align-items-start gap-3 flex-column"
            md={6}
          >
            {/* <Image
              src={"/public/images_2/"}
              fluid
              className="rounded mt-md-0 mt-5 col-md-9 mb-lg-0 mb-5 responsive-image shadow-lg"
              alt="CAD Art for Seniors"
            /> */}
            <div className="video-responsive col-lg-9 mb-lg-0 ">
              <iframe
                src="https://www.youtube.com/embed/038IQFynzOs?autoplay=1&mute=1&loop=1&playlist=038IQFynzOs&si=gHGwHiHX0vplPMTk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
         
          <Col md={6} className="mt-4 mt-lg-4">
            <Card className="border-0 bg-custom-dark">
              <Card.Body>
                <h3 className="fw-bold text-lg-start text-center">
                  CAD <span className="text-main">Fashion</span> Design Class
                </h3>
                <h4 className="fw-medium">
                  Learn the Skills to Kickstart Your Dream Fashion Career!
                </h4>
                <p className="mt-4 common-description">
                  Students will create a fashion portfolio project showcasing
                  the design process including:
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaPalette className="me-2" style={{ color: "#ff6347" }} />
                    Concept building, color palettes, and fabric sourcing
                  </li>
                  <li className="mb-2">
                    <FaFileAlt className="me-2" style={{ color: "#4682b4" }} />
                    Print design, sketching, and illustration
                  </li>
                  <li className="mb-2">
                    {/* <FaScissors className="me-2" style={{ color: "#32cd32" }} /> */}
                    Technical flats and presentation
                  </li>
                  <li className="mb-2">
                    <FaRuler className="me-2" style={{ color: "#ff1493" }} />
                    Pattern making and draping techniques
                  </li>
                </ul>
                <p className="mt-4">
                  Kids, teens, and adults will explore the fashion design
                  process through:
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaPalette className="me-2" style={{ color: "#ff4500" }} />
                    Fashion illustration and textile design
                  </li>
                  <li className="mb-2">
                    <FaRuler className="me-2" style={{ color: "#8a2be2" }} />
                    Pattern making and draping
                  </li>
                  <li className="mb-2">
                    {/* <FaSewingMachine className="me-2" style={{ color: "#ff6347" }} /> */}
                    Sewing skills for all ages
                  </li>
                  <li className="mb-2">
                    <FaFileAlt className="me-2" style={{ color: "#4682b4" }} />
                    Digital fashion portfolios and design drawing
                  </li>
                </ul>
                <p className="mt-4">
                  We offer courses in Digital Fashion Portfolio, Fashion Design
                  Drawing, Pattern Making, Draping, and Sewing for kids, teens,
                  and adults.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fashion;
