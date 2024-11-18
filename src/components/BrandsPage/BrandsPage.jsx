import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const BrandsPage = () => {
  const [brands, setBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch brands data from an API or local file
    fetch('/brands.json')
      .then(response => response.json())
      .then(data => setBrands(data))
      .catch(error => console.error('Error fetching brands data:', error));
  }, []);

  // Filter brands based on the search term
  const filteredBrands = brands.filter(brand =>
    brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold mb-5">All Brands</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search brands..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-5 border border-gray-300 rounded-lg"
      />

      {/* Brands Card Section */}
      <div className="grid gap-5">
        {filteredBrands.map((brand) => (
          <div key={brand._id} className="p-4 border border-gray-200 rounded-lg shadow-md bg-orange-100">
            <div className="flex items-center mb-3">
              {/* Brand Logo */}
              <img src={brand.brand_logo} alt={brand.brand_name} className="w-16 h-16 mr-4 rounded-full" />

              {/* Brand Name and Rating */}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold">{brand.brand_name}</h2>
                <div className="flex items-center text-yellow-400">
                  <i className="fas fa-star mr-1"></i>
                  <span>{brand.rating} / 5</span>
                </div>
              </div>
            </div>

            {/* Brand Description */}
            <p className="mb-3">{brand.description}</p>

            {/* View Coupons Button */}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() => {
                if (user) {
                  navigate(`/brand/${brand._id}`);
                } else {
                  navigate('/login');
                }
              }}
            >
              View Coupons
            </button>

            {/* "Sale is on" Bouncing Text */}
            {brand.isSaleOn && (
              <div className="mt-3 text-red-500 font-semibold animate-bounce">
                Sale is on!
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
