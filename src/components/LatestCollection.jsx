import React, { useContext, useState, useEffect } from 'react';
import Title from './Title'; // Import Title component
import { ShopContext } from '../context/ShopContext'; // Ensure correct import
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 20)); // Display only the first 20 products
    }
  }, [products]); // Re-run when the products change

  return (
    <div className='my-10'>
      {/* Title Section */}
      <div className='text-center py-8 text-3xl'>
        <Title text1="LATEST " text2="COLLECTIONS" />
        <p className='w-3/4 m-auto text-xs sm:text-xs sm:text-sm md:text-base text-gray-600'>
          Dive into our newest range of products, meticulously curated to bring you the best in style, comfort, and innovation.
        </p>
      </div>

      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((item) => (
          <ProductItem
            key={item._id} // Use unique _id as the key
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
