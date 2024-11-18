import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/brand">Brands</NavLink></li>
      {user && user.email && <li><NavLink to="/profile">My Profile</NavLink></li>}
      <li><NavLink to="/about">About Dev</NavLink></li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-md">
        <div className="navbar-start flex items-center">
            {/* Dropdown button for smaller screens */}
          <button
            className="lg:hidden ml-4"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <img className="w-12 h-12 rounded-full" src="https://i.ibb.co/VjPybjQ/logo.webp" alt="Logo" />
          <h1 className="font-bold text-2xl text-red-500 ml-2"><i>COUPON</i></h1>     
        </div>

        {/* Center navigation links (hidden on small screens) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex space-x-4">
            {links}
          </ul>
        </div>

        {/* Right side - User authentication */}
        <div className="navbar-end flex items-center space-x-4">
          {user && user.email ? (
            <>
              <div className="flex items-center space-x-2">
                <img src={user.photoURL || "https://i.ibb.co.com/0CpDp01/download-8.jpg"} alt="User" className="w-10 h-10 rounded-full" />
                <span className="text-gray-700">{user.email}</span>
              </div>
              <button onClick={logOut} className="btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                <i className="fa-solid fa-sign-out-alt mr-2"></i>Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                <i className="fa-solid fa-sign-in-alt mr-2"></i>Login
              </Link>
              <Link to="/register" className="btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                <i className="fa-solid fa-user-plus mr-2"></i>Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Dropdown menu for smaller screens */}
      {menuOpen && (
        <div className="lg:hidden mt-2 bg-base-100 p-4 shadow rounded-md">
          <ul className="menu">
            {links}
          </ul>
        </div>
      )}

      {user && user.email && (
        <div className="text-center mt-5">
          <h1 className="text-3xl font-bold text-blue-500">Welcome {user.displayName || "User"}</h1>
          <p className="text-gray-500 text-sm mt-2 mb-5">
            Get the latest coupons and discounts<br />
            Over 10,000 deals from top brands and stores
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
