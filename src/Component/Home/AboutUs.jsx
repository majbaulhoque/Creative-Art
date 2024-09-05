const AboutUs = () => {
    return (
        <div className="container" style={{ marginTop: '90px' }} >
            <div className="row d-flex align-items-center my-5">
                <div className="col-12 col-md-6 col-lg-5 mb-3 mb-md-0">
                    <div className="d-flex flex-column gap-3">
                        <img
                            src="/Images/about-us.jpg"
                            alt="Child Artist"
                            className="img-fluid child-artist"
                        />
                        <video
                            className="img-fluid child-artist"
                            controls loop autoPlay
                        >
                            <source src="/Images/AboutUs.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="col-12 col-md-7 col-lg-7">
                    <h1 className="fw-bolder">Every child is an artist
                    </h1>
                    <div className="mx-4">
                        <p className="">Famous quote by Pablo Picasso,
                        </p>
                        <p className="common-description fs-6">Creative Art and Design (CAD) is a vibrant platform that empowers individuals of all ages and skill levels to unlock their artistic potential. We believe that art is a universal language that can be learned and enjoyed by everyone. Our accessible and inclusive approach fosters a supportive environment where artists can grow, experiment, and flourish.
                        </p>
                        <h5>As a comprehensive studio program, CAD offers a wide range of resources, including:
                        </h5>
                        <ul>

                            <li>A spacious, well-equipped studio</li>
                            <li>Professional development workshops</li>
                            <li>A public gallery featuring annual exhibitions
                            </li>
                            <li>Peer feedback and career mentorship
                            </li>
                            <li>A community of artists, curators, instructors, and students who support and encourage each other.
                            </li>

                        </ul>
                        <h5>At CAD, we celebrate creativity, diversity, and inclusivity. Join us and discover a world of artistic expression, growth, and opportunity.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
