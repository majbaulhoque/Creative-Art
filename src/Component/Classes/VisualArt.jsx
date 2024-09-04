import { FaBookOpen, FaBrush, FaChalkboardTeacher, FaCube, FaPaintBrush, FaPalette, FaRulerCombined, FaTabletAlt } from 'react-icons/fa';

const VisualArt = () => {
    return (
        <div>
            <section className="about-our-classes py-5">
                <div className="container">
                    <div className="row align-items-center gx-5" >

                        {/* Image */}
                        <div className="col-12 col-md-5 order-1 order-sm-2 mt-4 mt-md-0">
                            <img
                                src='/Images/visual.jpg'
                                alt="Why Choose Us"
                                className="img-fluid rounded shadow"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="col-12 col-md-7 order-2 order-sm-1">
                            <h2 className="fw-bolder mb-4 text-center text-md-start">CAD Visual Art Classes</h2>
                            <p className="common-description mb-4">
                                In our comprehensive Visual Art classes, students embark on a journey to explore the rich world of art, culture, and creativity. Our expert instructors guide students through a structured curriculum that covers:
                            </p>
                            <p className="common-description mb-4 fw-bolder">Art History and Appreciation</p>
                            <ul className="list-unstyled visual-ul">
                                <li className="mb-2 visual-li">
                                    <FaBrush className="mr-2 me-2" style={{ color: '#FF6347' }} />
                                    Exploring famous artists, movements, and styles (Impressionism, Modernism, Pop Art, etc.)
                                </li>
                            </ul>
                            <p className="common-description mb-4 fw-bolder">
                                Visual Art Elements and Principles:
                            </p>
                            <ul className="list-unstyled visual-ul">
                                <li className="mb-2 visual-li">
                                    <FaPalette className="mr-2 me-2" style={{ color: '#FF6347' }} />
                                    Color theory, composition, form, light, and texture
                                </li>
                                <li className="mb-2 visual-li">
                                    <FaRulerCombined className="mr-2 me-2" style={{ color: '#1E90FF' }} />
                                    Principles of Design, Scale, Perspective, and Proportion
                                </li>
                            </ul>
                            <p className="common-description mb-4 fw-bolder">Painting Techniques:</p>
                            <ul className="list-unstyled visual-ul">
                                <li className="mb-2 visual-li">
                                    <FaPalette className="mr-2 me-2" style={{ color: '#FF6347' }} />
                                    Mastering methods inspired by Van Gogh, Hokusai, Georgia O{`'`}Keeffe, and more
                                </li>
                                <li className="mb-2 visual-li">
                                    <FaBookOpen className="mr-2 me-2" style={{ color: '#1E90FF' }} />
                                    Learning perspective, proportions, composition, color mixing, and form
                                </li>
                            </ul>
                            <p className="common-description mb-4 fw-bolder">Paper Craft and 3D Art:</p>
                            <ul className="list-unstyled visual-ul">
                                <li className="mb-2 visual-li">
                                    <FaCube className="mr-2 me-2" style={{ color: '#FF4500' }} />
                                    Creating 3D Pop-up books and paper sculptures inspired by Van Gogh and Vasarely
                                </li>
                                <li className="mb-2 visual-li">
                                    <FaPaintBrush className="mr-2 me-2" style={{ color: '#1E90FF' }} />
                                    Learning perspective, proportions, composition, color mixing, and form
                                </li>
                            </ul>
                            <p className="common-description mb-4 fw-bolder">Digital Art:</p>
                            <ul className="list-unstyled visual-ul">
                                <li className="mb-2 visual-li">
                                    <FaTabletAlt className="mr-2 me-2" style={{ color: '#FF4500' }} />
                                    Bringing paper craft to life through digital tools and techniques
                                    <br />
                                    <FaChalkboardTeacher className="mr-2 me-2" style={{ color: '#1E90FF' }} />
                                    Through project-based learning, students develop critical thinking, creativity, and cultural awareness. Our classes foster a deep appreciation for art, enabling students to analyze, interpret, and create meaningful works of art.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisualArt;
