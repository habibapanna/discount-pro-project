import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen max-w-6xl mx-auto">
            <Navbar></Navbar>
            <main className="flex-grow">
            <Outlet></Outlet>
            </main>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;