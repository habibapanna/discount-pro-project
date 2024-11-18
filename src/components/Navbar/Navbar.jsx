import { NavLink } from "react-router-dom";


const Navbar = () => {

  const links = <>

    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/brand">Brands</NavLink></li>
    <li><NavLink to="/profile">My Profile</NavLink></li>
    <li><NavLink to="/about">About Dev</NavLink></li>
    
  </>

  return (
    <div>

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <img className="w-1/12 rounded-full " src="https://i.ibb.co.com/VjPybjQ/logo.webp" alt="" />
          <h1 className="font-bold text-2xl text-red-500"><i>COUPON</i></h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
        {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn"><i class="fa-solid fa-user"></i>Login</a>
        </div>
      </div>
      <div className="text-center">
<h1 className="text-3xl font-bold pt-5 text-blue-500">
Welcome to ...
</h1>
<p className="text-gray-400 text-sm mt-2 mb-12">
Get the latest coupons and discounts <br />
Over 10,000 deals from top brands and stores
</p>

</div>
    </div>
  );
};

export default Navbar;