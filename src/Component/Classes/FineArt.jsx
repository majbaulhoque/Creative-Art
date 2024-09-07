import {
  FaSpa,
  FaLightbulb,
  FaCogs,
  FaPalette,
  FaTint,
  FaPaintBrush,
  FaPencilAlt,
  FaPastafarianism,
  FaUserFriends,
  FaUserGraduate,
  FaBirthdayCake,
} from "react-icons/fa";

const FineArt = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        paddingTop: "90px",
        paddingBottom: "90px",
      }}
    >
      <div className="container">
        <div className="row justify-content-between align-items-center gx-lg-5">
          {/* Image */}
          <div className="col-12 col-md-5 mt-4 mt-md-0">
            <img
              src="https://i.ibb.co.com/MgGbPtB/Fine-Art.jpg"
              alt="Find Art"
              className="img-fluid rounded shadow mb-4 mb-md-5"
            />
            <div className="video-responsive mt-3">
              <iframe
                src="https://www.youtube.com/embed/W_r_qKNwcYU?autoplay=1&mute=1&loop=1&playlist=W_r_qKNwcYU&si=yagQVvUF0n8ed9gw"
                title="YouTube video player"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            {/* <video
              className="img-fluid child-artist mt-4"
              controls
              loop
              autoPlay
            >
              <source src="/videoes/Fine Art.mp4" type="video/mp4" />
            </video> */}
          </div>
          {/* Text Content */}
          <div className="col-12 col-md-6">
            <h2 className="fw-bolder mb-4 text-center text-md-start">
              CAD Fine Art Classes
            </h2>
            <p className="common-description mb-4">
              Join our intimate and supportive group classes, tailored for
              experienced students seeking a deeper exploration of their
              artistic voice. Our expert instructors provide personalized
              guidance, inspiration, and a fun, social atmosphere that fosters:
            </p>

            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <FaSpa className="me-2" style={{ color: "#17A2B8" }} />
                Relaxation and stress relief
              </li>
              <li className="mb-2">
                <FaLightbulb className="me-2" style={{ color: "#FFC107" }} />
                Creative inspiration and growth
              </li>
              <li className="mb-2">
                <FaCogs className="me-2" style={{ color: "#FF5733" }} />
                Advanced technique development
              </li>
            </ul>

            <h3 className="fw-bolder fs-5 mb-3">
              Enjoy the flexibility to work in various mediums, including:
            </h3>
            <ul className="list-unstyled mb-4 d-flex gap-3">
              <li className="mb-2">
                <FaPalette className="me-2" style={{ color: "#FF6347" }} />
                Acrylic
              </li>
              <li className="mb-2">
                <FaTint className="me-2" style={{ color: "#FFD700" }} />
                Oil
              </li>
              <li className="mb-2">
                <FaPaintBrush className="me-2" style={{ color: "#1E90FF" }} />
                Watercolor
              </li>
              <li className="mb-2">
                <FaPencilAlt className="me-2" style={{ color: "#808080" }} />
                Graphite
              </li>
              <li className="mb-2">
                <FaPastafarianism
                  className="me-2"
                  style={{ color: "#FFB6C1" }}
                />
                Pastel
              </li>
            </ul>

            <h3 className="fw-bolder fs-5 mb-3">Our classes cater to:</h3>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <FaUserFriends className="me-2" style={{ color: "#28A745" }} />
                Adults, kids, and teens
              </li>
              <li className="mb-2">
                <FaUserGraduate className="me-2" style={{ color: "#007BFF" }} />
                Total beginners to advanced artists
              </li>
              <li className="mb-2">
                <FaBirthdayCake className="me-2" style={{ color: "#FF5733" }} />
                Private events for corporate teams and birthday parties
              </li>
            </ul>

            <p className="common-description mb-4">
              Choose from virtual or in-person classes, designed to accommodate
              all ages and skill levels. Take your art to the next level with
              our unique program, led by professional artists dedicated to
              nurturing your creative journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FineArt;
