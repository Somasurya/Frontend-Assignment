// src/pages/AddProduct.jsx

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: '',
    subCategory: '',
    sizes: '',
    bestseller: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform product addition logic, e.g., API call to save product
    console.log('Product added:', product);
    toast.success('Product added successfully!');
  };

  return (
    <div className="container">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subCategory"
          placeholder="Sub Category"
          value={product.subCategory}
          onChange={handleChange}
        />
        <input
          type="text"
          name="sizes"
          placeholder="Sizes (comma separated)"
          value={product.sizes}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="bestseller"
          checked={product.bestseller}
          onChange={() => setProduct((prev) => ({ ...prev, bestseller: !prev.bestseller }))}
        />
        <label>Bestseller</label>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
