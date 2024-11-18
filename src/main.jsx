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
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';

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
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>,
      },
      {
        path: '/update-profile',
        element: <UpdateProfile></UpdateProfile>,
      },   
      {
        path: '/about',
        element: <About></About>,
      },   
      {
        path: '/login',
        element: <Login></Login>,
      },   
      {
        path: '/register',
        element: <Register></Register>,
      },   
      {
        path: '/forgot',
        element: <ForgotPassword></ForgotPassword>,
      },   
    ], 
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
    </AuthProvider>
      
  </StrictMode>
);
