import {
  FaPalette,
  FaComments,
  FaUserCheck,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";

const AboutOurClasses = () => {
  return (
    <section className="about-our-classes py-5">
      <div className="container">
        <div className="row align-items-center gx-lg-5">
          {/* Text Content */}
          <div className="col-12 col-md-7">
            <h2 className="fw-bolder mb-4">ABOUT OUR CLASSES</h2>
            <p className="common-description mb-4">
              All classes are offered virtually and in person for all ages and
              levels, including total beginners.
            </p>
            <h3 className="fw-bolder fs-4 mb-3">
              CAD Online & In-Person Art Classes for All Abilities, Special
              Needs, Seniors, Ages & Levels
            </h3>
            <p className="common-description mb-4">
              We welcome adults, kids, and teens alike, as well as private
              events for corporate groups and birthday parties! CAD offers a
              LIVE, interactive art class experience from the comfort of your
              home. Taught by our top-notch professional art educators, our
              online classes are live so that you can benefit from social
              connection, creative engagement, and even more hands-on
              demonstrations by our art instructors.
            </p>
            <ul className="list-unstyled ">
              <li className="mb-2">
                <FaPalette
                  className="mr-2 me-2 "
                  style={{ color: "#FF5733" }}
                />
                Learning and practicing new artistic techniques
              </li>
              <li className="mb-2">
                <FaComments
                  className="mr-2 me-2"
                  style={{ color: "#33C3FF" }}
                />
                Group critiques to engage and interact with your classmates
              </li>
              <li className="mb-2">
                <FaUserCheck
                  className="mr-2 me-2"
                  style={{ color: "#28A745" }}
                />
                Individualized one-on-one feedback
              </li>
              <li className="mb-2">
                <FaChalkboardTeacher
                  className="mr-2 me-2"
                  style={{ color: "#FFC107" }}
                />
                Customized instruction based on your needs and interests
              </li>
              <li className="mb-2">
                <FaUsers className="mr-2 me-2" style={{ color: "#6F42C1" }} />
                Connecting to our warm, encouraging art community
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-5 mt-4 mt-md-0">
            {/* <img
              src="/public/images_2/"
              alt="Why Choose Us"
              className="img-fluid rounded shadow"
            /> */}
            <div className="video-responsive mt-5">
              <iframe
                src="https://www.youtube.com/embed/mREHujYIw3I?autoplay=1&mute=1&loop=1&playlist=mREHujYIw3I&si=Nqmcv01kwb26E28Q"
                title="YouTube video player"
                // frameborder="0"
                allow="autoplay"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                // referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
          {/* <iframe
            width="560"
            height="560"
            src="https://player.vimeo.com/video/1006903845"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            className="embed-responsive-item child-artist"
          ></iframe> */}
          <div
          // style="padding:56.25% 0 0 0;position:relative;"
          ></div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </section>
  );
};

export default AboutOurClasses;
