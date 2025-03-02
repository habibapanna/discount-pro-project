import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify'; // Ensure you import ToastContainer
import 'react-toastify/dist/ReactToastify.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const BrandDetails = () => {
  const { brandId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [brand, setBrand] = useState(null);
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    fetch('/brands.json') // Update with the actual data source if needed
      .then(response => response.json())
      .then(data => {
        const selectedBrand = data.find(brand => brand._id === brandId);
        if (selectedBrand) {
          setBrand(selectedBrand);
          setCoupons(selectedBrand.coupons);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching brand data:', error);
        setLoading(false);
      });
  }, [brandId, user, navigate]);

  if (loading) {
    return <p>Loading brand details...</p>;
  }

  if (!brand) {
    return <p>Brand not found.</p>;
  }

  return (
<div className='px-12'>
<div className='text-center max-w-4xl mx-auto border shadow-xl rounded-lg p-5'>
      <ToastContainer /> {/* Ensure ToastContainer is rendered */}
      
     <div className='flex flex-col md:flex-row gap-5 w-full'>
     <div className='md:w-1/2'>
      <img
        src={brand.brand_logo}
        alt={brand.brand_name}
        className="w-full rounded-lg mx-auto h-full object-cover"
      />
      </div>
      <div className='text-left md:w-1/2'>
      <h1 className='text-2xl font-semibold'>{brand.brand_name}</h1>
      <p className='mb-2'>Rating: {brand.rating}</p>
      <p className='mb-2'>{brand.description}</p>
      <p className='mb-2'>Category: {brand.category}</p>
      <p className='mb-5'>Total Coupons: {coupons.length}</p>

      </div>
     </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
        {coupons.map((coupon, index) => (
          <div key={index} className='bg-white p-4 border rounded shadow-md'>
            <h3 className='text-lg font-semibold'>{coupon['coupon-code']}</h3>
            <p>Details: {coupon.description}</p>
            <p className='text-gray-600'>Code: <span className='font-mono'>{coupon['coupon-code']}</span></p>
            <div className='mt-3'>
              <CopyToClipboard text={coupon['coupon-code']} onCopy={() => toast.success('Coupon code copied!')}>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                  Copy Code
                </button>
              </CopyToClipboard>
              <button
                onClick={() => window.open(brand['shop-Link'], '_blank')}
                className='bg-green-500 text-white px-4 py-2 ml-2 rounded hover:bg-green-600'
              >
                Use Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default BrandDetails;
