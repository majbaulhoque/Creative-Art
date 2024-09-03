import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes/Classes";
import MainLayout from "../Layout/MainLayout";
import AboutUs from "../Component/Home/AboutUs";
import WhyUs from "../Component/Home/WhyUs";
import OurVision from "../Component/Home/OurVision";
import Curriculum from "../Component/Home/Curriculum.JSX";
import AboutOurClasses from "../Component/Classes/AboutOurClasses";
import FineArt from "../Component/Classes/FineArt";
import VisualArt from "../Component/Classes/VisualArt";


const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <AboutUs />,
            },
            {
                path: '/whyUs',
                element: <WhyUs />,
            },
            {
                path: '/vision',
                element: <OurVision />,
            },
            {
                path: '/curriculum',
                element: <Curriculum />,
            },
            {
                path :"/classes",
                element : <Classes />,
            },
            {
                path :"/aboutOurClasses",
                element : <AboutOurClasses />,
            },
            {
                path :"/fineArt",
                element : <FineArt />,
            },
            {
                path :"/visualArt",
                element : <VisualArt />,
            },
        ],
    },
])
export default Route;