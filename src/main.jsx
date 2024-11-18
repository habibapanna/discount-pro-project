import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import BrandsPage from './components/BrandsPage/BrandsPage';
import MyProfile from './components/MyProfile/MyProfile';
import About from './components/About/About';
import TopBrands from './components/TopBrands/TopBrands';
import BrandDetails from './components/BrandDetails/BrandDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/brand',
        element: <BrandsPage></BrandsPage>,
      },
      {
        path: 'brand/:brandId',
        element: <BrandDetails></BrandDetails>
      },
      {
        path: '/profile',
        element: <MyProfile></MyProfile>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
