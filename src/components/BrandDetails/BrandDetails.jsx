import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BrandDetails = () => {
  const { brandId } = useParams();
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch brand data based on the ID
    fetch(`/brands.json`) // Replace this path with your actual data source
      .then(response => response.json())
      .then(data => {
        const selectedBrand = data.find(brand => brand._id === brandId);
        setBrand(selectedBrand);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching brand data:', error);
        setLoading(false);
      });
  }, [brandId]);

  if (loading) {
    return <p>Loading brand details...</p>;
  }

  if (!brand) {
    return <p>Brand not found.</p>;
  }

  return (
    <div className='text-center max-w-4xl mx-auto bg-yellow-300 border shadow-xl rounded-lg'>
      <h1 className='text-xl font-bold py-5'>{brand.brand_name}</h1>
      <img src={brand.brand_logo} alt={brand.brand_name} className="w-64 h-64 rounded-lg mb-4 mx-auto" />
      <p>{brand.description}</p>
      <p>Category: {brand.category}</p>
      <p className='mb-5'>Total Coupons: {brand.total_coupons}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default BrandDetails;
