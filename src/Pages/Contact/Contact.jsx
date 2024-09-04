import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaRegClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <div className="container my-4">
                <div className="row ">
                    <div className="col-12 col-md-4 mb-4 text-center text-lg-start">
                        <h2 className="fw-bolder mb-4 border-1 border-black border-bottom py-3">Contact Details</h2>
                        <ul className="list-unstyled">
                            <li className="mb-2 fs-5">
                                <FaPhoneAlt className="me-2" style={{ color: '#32CD32' }} />
                                017xxxxxxxxx
                            </li>
                            <li className="mb-2 fs-5">
                                <FaEnvelope className="me-2" style={{ color: '#FF4500' }} />
                                info@creativeartanddesigninc.com
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 mb-4 text-center text-lg-start">
                        <h2 className="fw-bolder mb-4 border-1 border-black border-bottom py-3">Appointment Scheduling</h2>
                        <Link to="https://calendly.com/event_types/user/me" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary text-white px-4 py-2 rounded shadow w-100">
                                Schedule Appointment
                            </button>
                        </Link>
                    </div>
                    <div className="col-12 col-md-4 mb-4 text-center text-lg-start">
                        <h2 className="fw-bolder mb-4 border-1 border-black border-bottom py-3">Send us a message</h2>
                        <Link to="https://forms.gle/B5Q4Z2WbE1FJeJwA8" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary text-white px-4 py-2 rounded shadow w-100">
                                Send Message
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="row gap-5">
                    <div className="col-12 col-md-4 mb-4 d-flex  align-items-center">
                        <div className="text-center">
                            <h2 className="fw-bolder  py-3 text-center text-lg-start">
                                School Hours
                                <FaRegClock className="ms-2" style={{ color: 'red' }} />
                            </h2>
                            <ul className="list-unstyled text-start">
                                <li className="mb-1 fs-5">Monday: 9:00 a.m. - 7:00 p.m.</li>
                                <li className="mb-1 fs-5">Tuesday: 9:00 a.m. - 7:30 p.m.</li>
                                <li className="mb-1 fs-5">Wednesday: 9:00 a.m. - 8:30 p.m.</li>
                                <li className="mb-1 fs-5">Thursday: 9:00 a.m. - 8:00 p.m.</li>
                                <li className="mb-1 fs-5">Friday: 9:00 a.m. - 3:30 p.m.</li>
                                <li className="mb-1 fs-5">Saturday: 9:30 a.m. - 4:00 p.m.</li>
                                <li className="mb-1 fs-5 fw-bolder" style={{ color: 'red' }}>Sunday: CLOSED</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 mb-4">
                        <h2 className="fw-bolder mb-4 border-1 border-black border-bottom py-3">Directions</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2662.7520787215913!2d89.56075570919447!3d22.800757979243663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ4JzAyLjciTiA4OcKwMzMnNDguMCJF!5e1!3m2!1sen!2sbd!4v1725450259931!5m2!1sen!2sbd"
                            width="100%"
                            height="450"
                            style={{ border: '0' }}
                            className="rounded"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
