import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/brands.json')
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error('Error fetching brand data:', error));
  }, []);

  const handleViewCoupons = (brandId) => {
    const isLoggedIn = Boolean(localStorage.getItem('user')); // Example check for user authentication
    if (isLoggedIn) {
      navigate(`/brand/${brandId}`);
    } else {
      navigate('/login');
    }
  };

  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-5">All Brands</h1>
      <input
        type="text"
        placeholder="Search brands..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-5 border rounded"
      />
      <div className="space-y-5">
        {filteredBrands.map((brand) => (
          <div key={brand._id} className="border p-4 rounded shadow-lg">
            <div className="flex items-center mb-3">
              <img
                src={brand.brand_logo}
                alt={`${brand.brand_name} logo`}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span>{brand.rating}</span>
                </div>
                <h2 className="text-xl font-semibold">{brand.brand_name}</h2>
              </div>
            </div>
            <p className="mb-3">{brand.description}</p>
            {brand.isSaleOn && (
              <p className="text-red-500 animate-bounce font-semibold">Sale is on!</p>
            )}
            <button
              onClick={() => handleViewCoupons(brand._id)}
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Coupons
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;