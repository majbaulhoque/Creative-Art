import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaHandshake,
  FaBullhorn,
  FaLightbulb,
  FaUsers,
  FaComments,
} from "react-icons/fa";

const SocialPresentation = () => {
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
                src="https://www.youtube.com/embed/P4jjVPuGWEM?autoplay=1&mute=1&loop=1&playlist=P4jjVPuGWEM&si=0dYGW5fe4o1a0-Ex"
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
                  CAD <span className="text-main">Social</span> Presentation
                </h3>
                <h4 className="fw-medium">Setting the Stage for Confidence</h4>
                <p className="mt-4 common-description">
                  Unlock the art of effective social skills, communication, and
                  self-expression in our CAD Social Presentation class. This
                  dynamic and interactive program is designed to:
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaHandshake
                      className="me-2"
                      style={{ color: "#ff6347" }}
                    />
                    Foster meaningful connections and a sense of community
                  </li>
                  <li className="mb-2">
                    <FaBullhorn className="me-2" style={{ color: "#4682b4" }} />
                    Develop confident public speaking and presentation skills
                  </li>
                  <li className="mb-2">
                    <FaLightbulb
                      className="me-2"
                      style={{ color: "#32cd32" }}
                    />
                    Encourage critical thinking, creative expression, and
                    respectful debate
                  </li>
                  <li className="mb-2">
                    <FaUsers className="me-2" style={{ color: "#ff1493" }} />
                    Empower individuals to successfully apply these skills in
                    their personal and professional lives
                  </li>
                </ul>
                <p className="mt-4">
                  Through engaging discussions, debates, and presentations,
                  participants will:
                </p>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <FaComments className="me-2" style={{ color: "#ff4500" }} />
                    Build self-assurance and self-expression
                  </li>
                  <li className="mb-2">
                    <FaHandshake
                      className="me-2"
                      style={{ color: "#8a2be2" }}
                    />
                    Develop effective communication and interpersonal skills
                  </li>
                  <li className="mb-2">
                    <FaLightbulb
                      className="me-2"
                      style={{ color: "#ff6347" }}
                    />
                    Cultivate creativity, critical thinking, and problem-solving
                    abilities
                  </li>
                  <li className="mb-2">
                    <FaBullhorn className="me-2" style={{ color: "#4682b4" }} />
                    Enhance their ability to articulate ideas, opinions, and
                    perspectives
                  </li>
                </ul>
                <p className="mt-4">
                  Our supportive environment and expert guidance will help you
                  shine, preparing you to navigate social and professional
                  situations with confidence, poise, and impact.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SocialPresentation;
