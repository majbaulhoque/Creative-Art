
import whyUsImage from '../../../public/Images/whyUs.jpg';

const AboutOurClasses = () => {
    return (
        <section className="about-our-classes py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Text Content */}
                    <div className="col-12 col-md-7">
                        <h2 className="fw-bolder mb-4">ABOUT OUR CLASSES</h2>
                        <p className="common-description mb-4">
                            All classes are offered virtually and in person for all ages and levels, including total beginners.
                        </p>
                        <h3 className="fw-bolder fs-4 mb-3">
                            CAD Online & In-Person Art Classes for All Abilities, Special Needs, Seniors, Ages & Levels
                        </h3>
                        <p className="common-description mb-4">
                            We welcome adults, kids, and teens alike, as well as private events for corporate groups and birthday parties! CAD offers a LIVE, interactive art class experience from the comfort of your home. Taught by our top-notch professional art educators, our online classes are live so that you can benefit from social connection, creative engagement, and even more hands-on demonstrations by our art instructors.
                        </p>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                Learning and practicing new artistic techniques
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                Group critiques to engage and interact with your classmates
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                Individualized one-on-one feedback
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                Customized instruction based on your needs and interests
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                Connecting to our warm, encouraging art community
                            </li>
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="col-12 col-md-5 mt-4 mt-md-0">
                        <img
                            src={whyUsImage}
                            alt="Why Choose Us"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOurClasses;
