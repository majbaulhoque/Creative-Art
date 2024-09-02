/* eslint-disable react/no-unescaped-entities */
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../src/assets/Css/Home/Banner/Banner.css";

const Banner = () => {
  return (
    <section className="hero-section   mt-5 d-flex align-items-center">
      <div className="  d-flex container flex-lg-row gap-5 flex-column-reverse justify-content-between align-items-center  ">
        <div className="hero-text ">
          <h1 className="display-4 fw-bold">
            We do the designs so you don't have to
          </h1>
          <p className="text-secondary-emphasis my-4">
            Get a trusted design partner for one flat monthly rate and access
            skilled and talented designers to take care of all your design
            projects under one roof.
          </p>
          <div className="hero-buttons">
            <a
              href="#"
              className="btn text-white px-4 py-2 rounded-3 btn-primary-custom me-3"
            >
              Get Started
            </a>
            <a href="#" className="btn border border-black text-black">
              Watch A Demo
            </a>
          </div>
          <div className="hero-benefits text-nowrap d-flex flex-lg-row flex-column mt-4">
            <p className="me-3">✔ Experienced designers</p>
            <p className="me-3">✔ Unlimited scalability</p>
            <p>✔ Quick turnaround</p>
          </div>
        </div>
        <div className="hero-images   ">
          <img
            className="image-1"
            width={200}
            src="/Images/banner-flower.jpg"
            alt="Creative Art Product Design"
          />
          <img
            className="image-2"
            width={200}
            src={"/Images/banner-icecream2.jpg"}
            alt="Creative Art Product Design"
          />
          <img
            className="image-3"
            width={200}
            src={"/Images/banner-1.jpg"}
            alt="Creative Art Product Design"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
