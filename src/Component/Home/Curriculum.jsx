
import { Card, Container, } from "react-bootstrap";
import {
  FaPaintBrush,
  FaFilm,
  FaPencilRuler,
  FaCircle,
  FaSquare,
  FaCube,
  FaPalette,
  FaLine,
  FaLaptop,
  FaCogs,
} from "react-icons/fa";
import "../../../src/assets/Css/Home/Curriculam/Curriculam.css"; // Import custom CSS for additional styling
import { MdTexture } from "react-icons/md";
import { FaScissors } from "react-icons/fa6";
import { TbBrandVisualStudio } from "react-icons/tb";
import { SiElement } from "react-icons/si";

const Curriculum = () => {
  return (
    <section style={{ marginTop: "120px" }} className="our-curriculum py-5">
      <Container>
        <div className="mb-5">
          <h2 className="text-center fw-bold mb-2">Our Curriculum</h2>
          <p className="text-center fs-5  text-secondary">
            Our curriculum encompasses a wide range of artistic disciplines,
            providing a solid foundation in:
          </p>
        </div>
        {/* forst */}
        <div className="d-flex mt-5 justify-content-around gap-5 flex-column flex-lg-row align-items-center">
          <img
           className="col-lg-4"
            src="/Images/banner-flower.jpg"
            alt=""
          />
          <Card
            style={{ height: "max-content", backgroundColor: 'transparent' }}
            className="border-0 shadow-md rounded card-height"
          >
            <Card.Body className="text-center">
              <SiElement size={50} className="text-main mb-3" />
              <Card.Title>Elements of Visual Art</Card.Title>
              <Card.Text className="text-center">
                Mastering the fundamentals of:
                <ul
                  style={{ marginLeft: "10%" }}
                  className="list-unstyled    mt-4 d-flex flex-wrap "
                >
                  <li className="d-flex align-items-center col-6 col-md-4 mb-2">
                    <FaLine className="me-2" style={{ color: "#ff6347" }} />{" "}
                    Line
                  </li>
                  <li className="d-flex align-items-center col-6 col-md-4 mb-2">
                    <FaSquare className="me-2" style={{ color: "#4682b4" }} />{" "}
                    Shape
                  </li>
                  <li className="d-flex align-items-center col-6 col-md-4 mb-2">
                    <FaCube className="me-2" style={{ color: "#32cd32" }} />{" "}
                    Form
                  </li>
                  <li className="d-flex align-items-center col-6 col-md-4 mb-2">
                    <FaPalette className="me-2" style={{ color: "#ff1493" }} />{" "}
                    Color & Tone
                  </li>
                  <li className="d-flex align-items-center col-6 col-md-4 mb-2">
                    <FaCircle className="me-2" style={{ color: "#ff4500" }} />{" "}
                    Pattern
                  </li>
                  <li className="d-flex align-items-center col-6 col-md-4 mb-2">
                    <MdTexture className="me-2" style={{ color: "#8a2be2" }} />{" "}
                    Texture
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/* forst */}
        <div className="d-flex mt-5 justify-content-around  gap-5 flex-column-reverse flex-lg-row align-items-center">

          <Card
            style={{ height: "max-content", backgroundColor: 'transparent' }}
            className="border-0 shadow-md rounded card-height"
          >
            <Card.Body className="text-center ">
              <TbBrandVisualStudio size={50} className="text-main mb-3" />
              <Card.Title>Forms of Visual Art</Card.Title>
              <Card.Text className="text-center">
                Developing skills in various mediums, including:
                <ul
                  style={{ marginLeft: "10%" }}
                  className="list-unstyled    mt-4 d-flex flex-wrap "
                >
                  <li className="d-flex align-items-center col-6 col-md-4 mb-2">
                    <FaPencilRuler
                      className="me-2"
                      style={{ color: "#ff6347" }}
                    />{" "}
                    Drawing
                  </li>
                  <li className="d-flex align-items-center col-6 col-md-4 mb-2">
                    <FaPaintBrush
                      className="me-2"
                      style={{ color: "#4682b4" }}
                    />{" "}
                    Painting
                  </li>
                  <li className="d-flex align-items-center col-6 col-md-4 mb-2">
                    <FaScissors className="me-2" style={{ color: "#32cd32" }} />{" "}
                    Craft
                  </li>
                  <li className="d-flex align-items-center col-6 col-md-4 mb-2">
                    <FaCube className="me-2" style={{ color: "#ff1493" }} />{" "}
                    Sculpture
                  </li>
                  <li className="d-flex align-items-center col-6 col-md-4 mb-2">
                    <FaLaptop className="me-2" style={{ color: "#ff4500" }} />{" "}
                    Animation
                  </li>
                  <li className="d-flex align-items-center col-6 col-md-4 mb-2">
                    <FaCogs className="me-2" style={{ color: "#8a2be2" }} /> And
                    more
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <img
           className="col-lg-4"
            src="/Images/design-art.jpg"
            alt=""
          />
        </div>
        {/* forst */}
        <div className="d-flex mt-5 justify-content-around gap-5 flex-column flex-lg-row align-items-center">
          <img
           className="col-lg-4"
            src="/Images/banner-1.jpg"
            alt=""
          />
          <Card
            style={{ height: "max-content", backgroundColor: 'transparent' }}
            className="border-0 shadow-md rounded card-height"
          >
            <Card.Body className="text-center">
              <FaFilm size={50} className="text-main mb-3" />
              <Card.Title>Art & Culture</Card.Title>
              <Card.Text>
                Understanding the historical and cultural context of art
                through:
                <ul className="list-unstyled d-flex flex-lg-row flex-column justify-content-around items-center gap-3 mt-2">
                  <li>
                    <FaFilm className="me-2  text-main" /> Presentations
                  </li>
                  <li>
                    <FaFilm className="me-2 text-main" /> Audio visuals
                  </li>
                  <li>
                    <FaFilm className="me-2 text-main" /> Video lectures
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/* forst */}
        <div className="d-flex mt-5 justify-content-around gap-5 flex-column-reverse flex-lg-row align-items-center">

          <Card
            style={{ height: "max-content", backgroundColor: 'transparent' }}
            className="border-0 shadow-md rounded card-height"
          >
            <Card.Body className="text-center">
              <FaPaintBrush size={50} className="text-main mb-3" />
              <Card.Title>Specialization</Card.Title>
              <Card.Text>
                Opportunity to specialize in one or more forms of art, fostering
                expertise and creativity.
              </Card.Text>
            </Card.Body>
          </Card>
          <img
           className="col-lg-4"
            src="/Images/writing-art.jpg"
            alt=""
          />
        </div>
      </Container>
    </section>
  );
};

export default Curriculum;
