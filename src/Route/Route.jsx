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
import SocialPresentation from "../Component/Classes/SocialPresentation";
import AdultsDevelopment from "../Component/Classes/AdultsDevelopment";
import DigitalArt from "../Component/Classes/DigitalArt";
import ArtForSenior from "../Component/Classes/ArtForSenior";
import Events from "../Pages/Events/Events";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/whyUs",
        element: <WhyUs />,
      },
      {
        path: "/vision",
        element: <OurVision />,
      },
      {
        path: "/curriculum",
        element: <Curriculum />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/aboutOurClasses",
        element: <AboutOurClasses />,
      },
      {
        path: "/fineArt",
        element: <FineArt />,
      },
      {
        path: "/visualArt",
        element: <VisualArt />,
      },
      {
        path: "/social-presentation",
        element: <SocialPresentation />,
      },
      {
        path: "/digital-art",
        element: <DigitalArt />,
      },
      {
        path: "/adults-development",
        element: <AdultsDevelopment />,
      },
      {
        path: "/art-for-senior",
        element: <ArtForSenior />,
      },
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
]);
export default Route;
