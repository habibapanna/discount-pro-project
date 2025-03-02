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
        <div className="container mx-auto px-4">
    
        <h2 className="text-3xl mt-12 font-bold py-10">Top Brands</h2>
        <ReactFastMarquee pauseOnHover gradient={false}>
          {brands.map((brand) => (
            <Link to={`/brand/${brand._id}`} key={brand._id} className="mx-5">
              <img
                className="w-[200px] h-[200px] rounded object-cover mr-5"
                src={brand.brand_logo}
                alt={brand.brand_name}
              />
            </Link>
          ))}
        </ReactFastMarquee>

        {/* Brands on Sale */}
        <h2 className="text-3xl font-bold py-10">Brands on Sale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
          {brands
            .filter((brand) => brand.isSaleOn)
            .map((brand) => (
              <div key={brand._id} className="border p-  rounded-lg bg-white shadow-lg">
                <img
                  className="mx-auto w-full h-[250px] lg:w-[300px] lg:h-[200px] rounded-t object-cover "
                  src={brand.brand_logo}
                  alt={`${brand.brand_name} logo`}
                />
                <h3 className="font-bold text-lg mt-2">{brand.brand_name}</h3>
                
                <p>Total Coupons: {brand.total_coupons}</p>
                <p className='mb-5'>Category: {brand.category}</p>
              </div>
            ))}
        </div>

        {/* Popular Coupons Section */}
        <h2 className="text-3xl font-bold py-8 text-center">Popular Coupons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coupons.slice(0, 4).map((coupon) => (
          <div
            key={coupon.id}
            className="border bg-yellow-200 p-5 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <h3 className="font-bold text-xl">{coupon.title}</h3>
            <p className="text-sm">Discount: {coupon.discount}</p>
            <p className="text-sm">Expiry Date: {coupon.expiry_date}</p>
          </div>
        ))}
      </div>

        {/* Customer Testimonials Section */}
        <h2 className="text-3xl font-bold py-8 text-center">What Our Customers Say</h2>
      <div className="space-y-5 max-w-3xl mx-auto">
        <div className="p-5 border bg-pink-300 rounded-lg shadow-md">
          <p className="text-lg">"Amazing discounts and easy to use!"</p>
          <p className="font-semibold text-right">- Alex Johnson</p>
        </div>
        <div className="p-5 border bg-pink-300 rounded-lg shadow-md">
          <p className="text-lg">"Found great deals on my favorite brands."</p>
          <p className="font-semibold text-right">- Priya Singh</p>
        </div>
      </div>
        
        </div>
    );
};

export default TopBrands;