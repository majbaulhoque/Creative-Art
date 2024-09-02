import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Classes from "../Pages/Classes/Classes";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },






































































        //    classes

            {
                path:'classes',
                element:<Classes/>
            }
        ]
    }
])
export default Route;