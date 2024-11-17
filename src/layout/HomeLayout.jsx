import Header from "../components/Header";
import SliderComponent from "../components/SliderComponent";
import ReactFastMarquee from 'react-fast-marquee';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeLayout = () => {
  const [brands, setBrands] = useState([]);
  const [coupons, setCoupons] = useState([]); // State for popular coupons

  useEffect(() => {
    fetch('/brands.json')
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error('Error fetching brand data:', error));

    // Fetch coupons data
    fetch('/coupons.json')
      .then((response) => response.json())
      .then((data) => setCoupons(data))
      .catch((error) => console.error('Error fetching coupons data:', error));
  }, []);

  return (
    <div className="min-h-screen max-w-6xl mx-auto">
      <header>
        <Header />
      </header>
      <main>
        {/* Banner Slider */}
        <section>
          <SliderComponent />
        </section>

        {/* Top Brands Marquee */}
        <h2 className="text-2xl font-bold py-5">Top Brands</h2>
        <ReactFastMarquee pauseOnHover gradient={false}>
          {brands.map((brand) => (
            <Link to={`/brand/${brand._id}`} key={brand._id} className="mx-5">
              <img
                className="w-24 h-24 rounded-full border p-2"
                src={brand.brand_logo}
                alt={brand.brand_name}
              />
            </Link>
          ))}
        </ReactFastMarquee>

        {/* Brands on Sale */}
        <h2 className="text-2xl font-bold py-5">Brands on Sale</h2>
        <div className="grid grid-cols-3 gap-5">
          {brands
            .filter((brand) => brand.isSaleOn)
            .map((brand) => (
              <div key={brand._id} className="border p-4 rounded-lg shadow-lg">
                <h3 className="font-semibold">{brand.brand_name}</h3>
                <img
                  className="w-[100px] h-[100px] rounded-lg"
                  src={brand.brand_logo}
                  alt={`${brand.brand_name} logo`}
                />
                <p>Total Coupons: {brand.total_coupons}</p>
                <p>Category: {brand.category}</p>
              </div>
            ))}
        </div>

        {/* Popular Coupons Section */}
        <h2 className="text-2xl font-bold py-5">Popular Coupons</h2>
        <div className="grid grid-cols-2 gap-5">
          {coupons.slice(0, 4).map((coupon) => (
            <div key={coupon.id} className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-semibold">{coupon.title}</h3>
              <p>Discount: {coupon.discount}</p>
              <p>Expiry Date: {coupon.expiry_date}</p>
            </div>
          ))}
        </div>

        {/* Customer Testimonials Section */}
        <h2 className="text-2xl font-bold py-5">What Our Customers Say</h2>
        <div className="space-y-5">
          <div className="p-4 border rounded-lg shadow-md">
            <p>"Amazing discounts and easy to use!"</p>
            <p className="font-semibold">- Alex Johnson</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <p>"Found great deals on my favorite brands."</p>
            <p className="font-semibold">- Priya Singh</p>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
