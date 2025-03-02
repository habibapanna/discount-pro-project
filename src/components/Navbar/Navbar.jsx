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
      <li><NavLink to="/about">About Us</NavLink></li>
    </>
  );

  return (
    <div className=" sticky top-0 z-50 backdrop-blur-md bg-white">
<div className="navbar flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
  {/* Logo and menu button */}
  <div className="flex items-center gap-2">
    <button
      className="lg:hidden ml-4"
      onClick={toggleMenu}
      aria-label="Toggle navigation menu"
    >
      <i className="fas fa-bars text-2xl text-blue-500"></i>
    </button>
    <img
      className="w-8 h-8 rounded-full ml-2"
      src="https://i.postimg.cc/k4vLKprw/gift-voucher.png"
      alt="Logo"
    />
    <h1 className="font-bold text-2xl text-blue-500 font-mono">coupon</h1>
  </div>

  {/* Centered Navigation Links */}
  <div className="hidden lg:flex flex-1 justify-center">
    <ul className="menu menu-horizontal px-1 flex space-x-6">
      {links}
    </ul>
  </div>

  {/* User authentication section */}
  <div className="flex items-center space-x-4">
    {user && user.email ? (
      <>
        <div className="flex items-center space-x-2">
          <img
            src={user.photoURL || "https://i.ibb.co.com/0CpDp01/download-8.jpg"}
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-gray-700 text-sm font-extralight">
            {user.email}
          </span>
        </div>
        <button
          onClick={logOut}
          className="btn btn-sm bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          <i className="fa-solid fa-sign-out-alt"></i> Log Out
        </button>
      </>
    ) : (
      <>
        <Link
          to="/login"
          className="btn btn-sm bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 border-none"
        >
          <i className="fa-solid fa-sign-in-alt"></i> Login
        </Link>
        <Link
          to="/register"
          className="btn btn-sm bg-green-500 text-white py-2 rounded hover:bg-green-600 border-none"
        >
          <i className="fa-solid fa-user-plus"></i> Register
        </Link>
      </>
    )}
  </div>
</div>


      {/* Dropdown menu for smaller screens */}
      {menuOpen && (
        <div className="lg:hidden mt-2 p-4 shadow-2xl rounded-md">
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
