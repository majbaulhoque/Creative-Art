import AboutUs from "../../Component/Home/AboutUs";
import Banner from "../../Component/Home/Banner/Banner";
import Curriculum from "../../Component/Home/Curriculum.JSX";
import OurVision from "../../Component/Home/OurVision";
import WhyUs from "../../Component/Home/WhyUs";



const Home = () => {
    return (
        <div className="" >
            <section>
                <Banner />
                <AboutUs />
                <WhyUs />
                <OurVision />
                <Curriculum />
            </section>
        </div>
    );
};

export default Home;
