import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  // Debugging: Check image value and format
  console.log("Product Image:", image);

  // If `image` is a single string, convert it into an array
  const images = Array.isArray(image) ? image : [image];

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        {images[0] ? (
          <img
            className='hover:scale-110 transition ease-in-out'
            src={images[0]} // Display first image
            alt={name}
          />
        ) : (
          <p className='text-gray-400'>No Image Available</p>
        )}
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>
        {currency || '$'} {price}
      </p>
    </Link>
  );
};

export default ProductItem;
