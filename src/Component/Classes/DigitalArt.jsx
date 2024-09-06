/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import {
  FaLaptopCode,
  FaHandsHelping,
  FaTools,
  FaPalette,
} from "react-icons/fa";

function DigitalArt() {
  return (
    <div>
      <Container className="my-5">
        <Row className="align-items-center flex-md-row flex-column-reverse">
          <Col md={6} className="mt-4 mt-md-0">
            <Card className="border-0">
              <Card.Body>
                <h3 className="fw-bold text-md-start text-center">
                  CAD Digital <span className="text-main">Art</span> and{" "}
                  <span className="text-main">Graphic Design</span> Class
                </h3>
                <h4 className="fw-medium text-md-start text-center">
                  Empowering Art-Minded Individuals on the Autism Spectrum
                </h4>
                <p className="mt-4 common-description">
                  Our educational Digital Art and Graphic Design Class is
                  specifically designed for art-minded individuals on the autism
                  spectrum. Our comprehensive program will offer an immersive
                  digital media training experience, focusing on animation and
                  graphic design disciplines.
                </p>
                <p className="mt-4 common-description">
                  Our program's primary objective is to empower autistic adults
                  with employable skills, tailored to meet the needs of
                  autism-friendly employers. By providing a supportive and
                  inclusive learning environment, we aim to bridge the gap
                  between creative talent and career opportunities.
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaLaptopCode
                      className="me-2"
                      style={{ color: "#ff6347" }}
                    />
                    Extensive digital media training in animation and graphic
                    design
                  </li>
                  <li className="mb-2">
                    <FaHandsHelping
                      className="me-2"
                      style={{ color: "#4682b4" }}
                    />
                    Autism-friendly learning environment and resources
                  </li>
                  <li className="mb-2">
                    <FaTools className="me-2" style={{ color: "#32cd32" }} />
                    Focus on developing employable skills for career success
                  </li>
                </ul>
                <p className="mt-4 common-description">
                  Students will have the opportunity to work on building a
                  Student Online Portfolio. We will use a wide range of free
                  application software to display and market skills learned over
                  the course of the program, such as:
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaPalette className="me-2" style={{ color: "#ff4500" }} />
                    Adobe Photoshop
                  </li>
                  <li className="mb-2">
                    <FaPalette className="me-2" style={{ color: "#8a2be2" }} />
                    Adobe Illustrator
                  </li>
                  <li className="mb-2">
                    <FaPalette className="me-2" style={{ color: "#ff6347" }} />
                    2D and 3D Image Production
                  </li>
                  <li className="mb-2">
                    <FaPalette className="me-2" style={{ color: "#4682b4" }} />
                    Video Editing
                  </li>
                  <li className="mb-2">
                    <FaPalette className="me-2" style={{ color: "#32cd32" }} />
                    Image Analysis
                  </li>
                  <li className="mb-2">
                    <FaPalette className="me-2" style={{ color: "#ff1493" }} />
                    Procreate
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col
            className="d-lg-flex justify-content-end align-items-end gap-3 flex-column"
            md={6}
          >
            <Image
              src={"/Images/design-art.jpg"}
              fluid
              className="rounded mt-md-0 mt-5 col-md-9 mb-lg-0 mb-5 responsive-image shadow-lg"
              alt="CAD Art for Seniors"
            />
            <div className="video-responsive col-lg-9 mb-lg-0 ">
              <iframe
                src="https://www.youtube.com/embed/G0zHrD5Cf2o?autoplay=1&mute=1&loop=1&playlist=G0zHrD5Cf2o&si=ZFF3OjTXdMZSew4D"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DigitalArt;
