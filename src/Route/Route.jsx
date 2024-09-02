import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import AboutUs from "../Component/Home/AboutUs";
import WhyUs from "../Component/Home/WhyUs";
import OurVision from "../Component/Home/OurVision";
import Curriculum from "../Component/Home/Curriculum.JSX";

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
        ],
    },
])
export default Route;