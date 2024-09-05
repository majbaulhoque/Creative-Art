

const OurVision = () => {
    return (
        <div className="container" style={{ marginTop: '90px' }}>
            <div className="row gx-lg-5">
                <div className="col-12 col-md-5 col-lg-4">
                    <img 
                        src="/Images/our-mission.jpg" 
                        alt="Our Mission"
                        className="img-fluid vision-image shadow" 
                    />
                </div>
                <div className="col-12 col-md-7 col-lg-8">
                    <h2 className="fw-bolder">MISSION CAD: Empowering Creativity, Connecting Communities.</h2>
                    <p className="common-description">
                        At CAD, we believe in the transformative power of arts education. Our mission is to provide a platform for children, teens, and adults to unlock their creative potential, cultivate their talents, and forge meaningful connections with others. By sharing creative experiences, we foster a culture of diversity, inclusivity, and mutual respect, enriching lives and strengthening our community.
                    </p>
                    <h2 className="fw-bolder fs-2">VISION: Equal Access to Arts Education for All</h2>
                    <p className="common-description">
                        We envision a future where every child has equal opportunity to engage in high-quality, meaningful arts education, preparing them for a lifetime of creativity, innovation, and success. By realizing this vision, we aim to create a more vibrant, empathetic, and connected society, where the arts are valued as essential to human expression and growth.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurVision;
