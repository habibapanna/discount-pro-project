import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import BrandPage from "../components/BrandPage";
import Brands from "../components/Brands";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    }, 
            {
                path: '/brand/:brandId',
    element: <BrandPage />,
            
       
    },
    {
        path: "/brand",
        element: <Brands></Brands>,
    },
    {
        path: "/profile",
        element: <h1>Profile</h1>,
    },
    {
        path: "/about",
        element: <h1>About</h1>,
    },
    {
        path: "auth",
        element: <h1>Login</h1>,
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    }
])

export default router;