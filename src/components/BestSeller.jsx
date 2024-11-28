import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext'; // Ensure correct import of ShopContext
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext); // Access products from the context
    const [bestSeller, setBestSeller] = useState([]); // State to store best seller products

    useEffect(() => {
        if (products && products.length > 0) {
            // Filter products where 'bestseller' field is true
            const bestProduct = products.filter((item) => item.bestseller);
            setBestSeller(bestProduct.slice(0, 10)); // Limit to the first 20 best sellers
        }
    }, [products]); // Added 'products' as dependency to re-run when products change

    return (
        <div className="my-10">
            {/* Title Section */}
            <div className="text-center text-3xl py-8">
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Explore our top-selling products, trusted by customers for their unbeatable quality and style. These fan favorites offer the perfect blend of luxury, durability, and innovation. Don't miss out—find out why they’re the must-haves of the season!
                </p>
            </div>

            {/* Rendering Best Seller Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSeller.map((item, index) => {
                    console.log("Item Image: ", item.image); // Debugging: Check image data
                    const imageUrl = item.image && item.image.length > 0 ? item.image[0] : null;
                    return (
                        <ProductItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            image={imageUrl} // Pass imageUrl correctly
                            price={item.price}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default BestSeller;
