const WhyUs = () => {
    return (
        <div className="why-us-container">
            <div className="container" style={{ marginTop: '90px' }}>
                <div className="row d-flex align-items-center gx-5">
                    <div className="col-12 col-md-7 mb-4 mb-md-0">
                        <h2 className="fw-bolder text-center mb-3 ">WHY US??</h2>
                        <p className="common-description ">
                            At Creative Art and Design (CAD), we take immense pride in providing exceptional instruction in a supportive, non-competitive, and enjoyable environment. Our classes are meticulously supervised and structured to foster individual creativity and imagination. Our talented instructors bring diverse educational backgrounds in Fashion, Illustration, Marketing, Painting, Photography, and Sculpture, ensuring a rich and comprehensive learning experience.
                        </p>
                        <p className="common-description">
                            Our primary goal is to nurture individuality and creativity, recognizing the paramount importance of our clients{`'`} needs. Our dedicated staff is committed to meeting those needs, tailoring classes to accommodate schedules and special requirements whenever possible. We value art education as a cultural essential, a natural aspect of human expression, and a means of communication for those who find liberation in visual art.
                        </p>
                        <p className="common-description">
                            We strive to develop both self-expression and technical skills, empowering our students to reach their full potential. We would be honored to earn your trust and deliver the highest quality service in the industry.
                        </p>
                    </div>
                    <div className="col-12 col-md-5">
                        <img
                            src="/Images/why-us.jpg"
                            alt="Why Us"
                            className="img-fluid why-us-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;

