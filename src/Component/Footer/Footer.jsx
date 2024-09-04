import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';


const Footer = () => {
  return (
    <div style={{ marginTop: '120px' , backgroundColor:"#001F3F" }} className="">
      <footer className="text-center container text-lg-start text-white">
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Creative  Art  Design</h6>
                <p>
                We welcome adults, kids, teens, and private events, offering live, interactive art classes with top-notch instructors for a creative, social, and hands-on experience from home.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <Link to="#" className="text-white text-decoration-none">MDBootstrap</Link>
                </p>
                <p>
                  <Link to="#" className="text-white text-decoration-none">MDWordPress</Link>
                </p>
                <p>
                  <Link to="#" className="text-white text-decoration-none">BrandFlow</Link>
                </p>
                <p>
                  <Link to="#" className="text-white text-decoration-none">Bootstrap Angular</Link>
                </p>
              </div> */}

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                <p>
                  <Link to="/classes" className="text-white text-decoration-none">Your Classes</Link>
                </p>
                <p>
                  <Link to="/events" className="text-white text-decoration-none">Events</Link>
                </p>
                <p>
                  <Link to="/" className="text-white text-decoration-none">Home</Link>
                </p>
                <p>
                  <Link to="#" className="text-white text-decoration-none">Contact us</Link>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><FaHome className="mr-3" /> New York, NY 10012, US</p>
                <p><FaEnvelope className="mr-3" /> info@gmail.com</p>
                <p><FaPhone className="mr-3" /> + 01 234 567 88</p>
                <p><FaPrint className="mr-3" /> + 01 234 567 89</p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2024 Copyright:
                  <Link className="text-white text-decoration-none" to="/"> creative art</Link>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button">
                  <FaFacebookF />
                </a>
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button">
                  <FaTwitter />
                </a>
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button">
                  <FaGoogle />
                </a>
                <a className="btn btn-outline-light btn-floating m-1" href="#" role="button">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
