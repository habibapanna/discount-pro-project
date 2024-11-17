import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BrandPage = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    fetch('/brands.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedBrand = data.find((b) => b._id === brandId);
        setBrand(selectedBrand);
      })
      .catch((error) => console.error('Error fetching brand details:', error));
  }, [brandId]);

  if (!brand) return <p>Loading...</p>;

  return (
    <div>
      <h1>{brand.brand_name}</h1>
      <img src={brand.brand_logo} alt={`${brand.brand_name} logo`} />
      <p>{brand.description}</p>
      <button 
        onClick={() => navigate('/')} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default BrandPage;
