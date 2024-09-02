

const AdultClass = () => {
    return (
        <section className="adults-section container mt-5">
        <div className="d-flex justify-content-between gap-5  align-items-center mb-5">
          <div className="">
            <img src={"/Images/banner-flower.jpg"} className="img-fluid rounded shadow" alt="Adults Program" />
          </div>
          <div className="">
            <div className="text-center">
              <h2 className="text-center fw-bold">For Adults</h2>
              <p className="text-secondary">
                At Creative Art and Design, we have pioneered a distinctive approach enabling adults,
                regardless of their proficiency levels, to customize a program aligned with their
                individual interests. Our diverse array of art and design courses empowers students to
                engage with a project-oriented syllabus, receiving tailored guidance from esteemed
                educators of international acclaim.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AdultClass;