import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaRegClock } from 'react-icons/fa'

const Contact = () => {
    return (
        <div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12 col-md-4 mb-4">
                        <h2 className="fw-bolder mb-4 border-1 border-black border-bottom py-3">Contact Details</h2>
                        <div className="col-12">
                            <ul className="list-unstyled">
                                <li className="mb-2 fs-5">
                                    <FaPhoneAlt className="mr-2 me-2" style={{ color: '#32CD32' }} />
                                    017xxxxxxxxx
                                </li>
                                <li className="mb-2 fs-5">
                                    <FaEnvelope className="mr-2 me-2" style={{ color: '#FF4500' }} />
                                    creativeartanddesigninc@gmail.com
                                </li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h2 className="fw-bolder mb-4 border-1 border-black border-bottom py-3">
                                School Hours
                                <FaRegClock className="mr-2 ms-2" style={{ color: 'red' }} />
                            </h2>

                            <ul className="list-unstyled">
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
                    <div className="col-12 col-md-4 mb-4">
                        <h2 className="fw-bolder mb-4 border-1 border-black border-bottom py-3">Appointment Scheduling</h2>
                        <Link to="https://forms.gle/B5Q4Z2WbE1FJeJwA8" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary text-white px-4 py-2 rounded shadow w-100">
                                Contact Us
                            </button>
                        </Link>
                        <div className="col-12" style={{marginTop: '42px'}}>
                            <h2 className="fw-bolder mb-4 border-1 border-black border-bottom py-3 ">Directions</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2662.7520787215913!2d89.56075570919447!3d22.800757979243663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ4JzAyLjciTiA4OcKwMzMnNDguMCJF!5e1!3m2!1sen!2sbd!4v1725450259931!5m2!1sen!2sbd" width="600" height="450" style={{border: '0px'}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <h2 className="fw-bolder mb-4 border-1 border-black border-bottom py-3">Send us a message</h2>
                        <Link to="https://forms.gle/B5Q4Z2WbE1FJeJwA8" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary text-white px-4 py-2 rounded shadow w-100">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
