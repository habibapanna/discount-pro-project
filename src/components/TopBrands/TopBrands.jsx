import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactFastMarquee from 'react-fast-marquee';


const TopBrands = () => {

    const [brands, setBrands] = useState([]);
    const [coupons, setCoupons] = useState([]); // State for popular coupons
  
    useEffect(() => {
      // Fetch brand data
      fetch('/brands.json')
        .then((response) => response.json())
        .then((data) => setBrands(data))
        .catch((error) => console.error('Error fetching brand data:', error));
  
      // Fetch coupon data
      fetch('/coupons.json')
        .then((response) => response.json())
        .then((data) => setCoupons(data))
        .catch((error) => console.error('Error fetching coupons data:', error));
    }, []);

    return (
        <div>
    
        <h2 className="text-3xl mt-12 font-bold py-10">Top Brands</h2>
        <ReactFastMarquee pauseOnHover gradient={false}>
          {brands.map((brand) => (
            <Link to={`/brand/${brand._id}`} key={brand._id} className="mx-5">
              <img
                className="w-[200px] h-[200px] rounded-xl p-2 mr-5"
                src={brand.brand_logo}
                alt={brand.brand_name}
              />
            </Link>
          ))}
        </ReactFastMarquee>

        {/* Brands on Sale */}
        <h2 className="text-3xl font-bold py-10">Brands on Sale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
          {brands
            .filter((brand) => brand.isSaleOn)
            .map((brand) => (
              <div key={brand._id} className="border-2 p-4  rounded-lg bg-yellow-300 shadow-lg">
                <h3 className="font-bold text-lg mb-5">{brand.brand_name}</h3>
                <img
                  className="mx-auto mb-2 w-[200px] h-[150px] rounded-lg"
                  src={brand.brand_logo}
                  alt={`${brand.brand_name} logo`}
                />
                <p>Total Coupons: {brand.total_coupons}</p>
                <p>Category: {brand.category}</p>
              </div>
            ))}
        </div>

        {/* Popular Coupons Section */}
        <h2 className="text-3xl font-bold py-10">Popular Coupons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {coupons.slice(0, 4).map((coupon) => (
            <div key={coupon.id} className="border bg-yellow-200 p-4 rounded-lg shadow-lg">
              <h3 className="font-bold text-xl">{coupon.title}</h3>
              <p>Discount: {coupon.discount}</p>
              <p>Expiry Date: {coupon.expiry_date}</p>
            </div>
          ))}
        </div>

        {/* Customer Testimonials Section */}
        <h2 className="text-3xl font-bold py-10">What Our Customers Say</h2>
        <div className="space-y-5">
          <div className="p-4 border bg-pink-300 rounded-lg shadow-md">
            <p>"Amazing discounts and easy to use!"</p>
            <p className="font-semibold">- Alex Johnson</p>
          </div>
          <div className="p-4 border bg-pink-300 rounded-lg shadow-md">
            <p>"Found great deals on my favorite brands."</p>
            <p className="font-semibold">- Priya Singh</p>
          </div>
        </div>
        
        </div>
    );
};

export default TopBrands;