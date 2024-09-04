import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaRegClock } from 'react-icons/fa';
import FormfacadeEmbed from "@formfacade/embed-react";

const Contact = () => {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-12 col-md-6 mb-4">
                    <h2 className="fw-bolder mb-4 border-bottom py-3 border-2 border-dark text-center text-md-start">Contact Details</h2>
                    <ul className="list-unstyled">
                        <li className="mb-3 fs-5 d-flex align-items-center">
                            <FaPhoneAlt className="me-3" style={{ color: '#32CD32' }} />
                            <span>017xxxxxxxxx</span>
                        </li>
                        <li className="mb-3 fs-5 d-flex align-items-center">
                            <FaEnvelope className="me-3" style={{ color: '#FF4500' }} />
                            <span>info@creativeartanddesigninc.com</span>
                        </li>
                    </ul>
                    <div className="text-center text-md-start">
                        <h2 className="fw-bolder mb-4 border-bottom py-3 border-2 border-dark">Appointment Scheduling</h2>
                        <Link to="https://calendly.com/event_types/user/me" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary text-white px-5 py-2 rounded shadow-lg">
                                Schedule Appointment
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className="col-12 col-md-6 mb-4">
                    <h2 className="fw-bolder mb-4 border-bottom py-3 border-2 border-dark text-center text-md-start">
                        School Hours
                        <FaRegClock className="ms-2" style={{ color: 'red' }} />
                    </h2>
                    
                    <ul className="list-unstyled">
                        <li className="mb-2 fs-5">Monday: 9:00 a.m. - 7:00 p.m.</li>
                        <li className="mb-2 fs-5">Tuesday: 9:00 a.m. - 7:30 p.m.</li>
                        <li className="mb-2 fs-5">Wednesday: 9:00 a.m. - 8:30 p.m.</li>
                        <li className="mb-2 fs-5">Thursday: 9:00 a.m. - 8:00 p.m.</li>
                        <li className="mb-2 fs-5">Friday: 9:00 a.m. - 3:30 p.m.</li>
                        <li className="mb-2 fs-5">Saturday: 9:30 a.m. - 4:00 p.m.</li>
                        <li className="mb-2 fs-5 fw-bolder" style={{ color: 'red' }}>Sunday: CLOSED</li>
                    </ul>
                </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-4">
                <div className="col-12 col-md-5 mb-4">
                    <FormfacadeEmbed
                        formFacadeURL="https://formfacade.com/include/100219976322488119961/form/1FAIpQLSctbcf7UWK-TK22XB8S5TUT0-RFH5e7jii-Z3yp3-aeKPBwZA/classic.js/?div=ff-compose"
                        onSubmitForm={() => console.log('Form submitted')}
                    />
                </div>
                <div className="col-12 col-md-6 mb-4">
                    <h2 className="fw-bolder mb-4 text-center text-md-start">Directions</h2>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2662.7520787215913!2d89.56075570919447!3d22.800757979243663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ4JzAyLjciTiA4OcKwMzMnNDguMCJF!5e1!3m2!1sen!2sbd!4v1725450259931!5m2!1sen!2sbd"
                            width="100%"
                            height="450"
                            style={{ border: '2px solid #ddd', borderRadius: '10px' }}
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Directions"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
