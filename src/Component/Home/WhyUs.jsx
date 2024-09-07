const WhyUs = () => {
  return (
    <div className="why-us-container">
      <div className="container" style={{ marginTop: "90px" }}>
        <div style={{ maxHeight: "620px" }} className="row gx-md-5 overflow-hidden">
          <div className="col-md-4 shadow-lg col-12">
            <img
              className="w-100 h-100  object-fit-cover"
              src="/images_2/Why Us-1.jpg"
              alt=""
            />
          </div>
          <div className="col-md-4 shadow-lg border border-light-subtle col-12">
            <img
              className="w-100 h-100 object-fit-cover"
              src="/images_2/Why Us-3.jpg"
              alt=""
            />
          </div>

          <div className="col-md-4 shadow-lg col-12">
            <img
              className="w-100 h-100 object-fit-cover"
              src="/public/images_2/Why US-2.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="row d-flex align-items-center gx-lg-5">
          <div className="col-12 col-md-7 mt-md-5 mb-4 mb-md-0">
            <h2 className="fw-bolder text-center mb-3 ">WHY US??</h2>
            <p className="common-description ">
              At Creative Art and Design (CAD), we take immense pride in
              providing exceptional instruction in a supportive,
              non-competitive, and enjoyable environment. Our classes are
              meticulously supervised and structured to foster individual
              creativity and imagination. Our talented instructors bring diverse
              educational backgrounds in Fashion, Illustration, Marketing,
              Painting, Photography, and Sculpture, ensuring a rich and
              comprehensive learning experience.
            </p>
            <p className="common-description">
              Our primary goal is to nurture individuality and creativity,
              recognizing the paramount importance of our clients{`'`} needs.
              Our dedicated staff is committed to meeting those needs, tailoring
              classes to accommodate schedules and special requirements whenever
              possible. We value art education as a cultural essential, a
              natural aspect of human expression, and a means of communication
              for those who find liberation in visual art.
            </p>
            <p className="common-description">
              We strive to develop both self-expression and technical skills,
              empowering our students to reach their full potential. We would be
              honored to earn your trust and deliver the highest quality service
              in the industry.
            </p>
          </div>
          <div className="col-12 col-md-5">
            <div className="d-flex flex-column gap-3">
              <div className="video-responsive">
                <iframe
                  src="https://www.youtube.com/embed/e3R8pHa-TJc?autoplay=1&mute=1&loop=1&playlist=e3R8pHa-TJc&si=FB6XhMoiKeoj4wv"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
