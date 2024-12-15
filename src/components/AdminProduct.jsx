import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AdminProducts = () => {
  const [product, setProduct] = useState({
    _id: '',
    name: '',
    description: '',
    price: '',
    image: [],
    category: '',
    subCategory: '',
    sizes: [],
    date: Date.now(),
    bestseller: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setProduct({
        ...product,
        [name]: checked,
      });
    } else if (name === 'image') {
      const files = e.target.files;
      const imageUrls = [];
      for (let i = 0; i < files.length; i++) {
        imageUrls.push(URL.createObjectURL(files[i]));
      }
      setProduct({
        ...product,
        [name]: imageUrls,
      });
    } else if (name === 'sizes') {
      const selectedSizes = value.split(',');
      setProduct({
        ...product,
        sizes: selectedSizes,
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.name || !product.description || !product.price || !product.category || !product.subCategory || product.image.length === 0 || product.sizes.length === 0) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/admin/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        toast.success('Product added successfully');
        navigate('/admin/products');
      } else {
        toast.error('Failed to add product');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while adding the product');
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="_id" value={product._id || `prod_${Date.now()}`} />

        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Enter product name"
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Enter product description"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Enter product price"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          multiple
          onChange={handleChange}
        />
        {product.image.length > 0 && (
          <div>
            {product.image.map((img, idx) => (
              <img key={idx} src={img} alt={`Product Preview ${idx}`} width={100} />
            ))}
          </div>
        )}
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Enter product category"
        />
        <input
          type="text"
          name="subCategory"
          value={product.subCategory}
          onChange={handleChange}
          placeholder="Enter product sub-category"
        />
        <input
          type="text"
          name="sizes"
          value={product.sizes.join(',')}
          onChange={handleChange}
          placeholder="Enter product sizes (e.g., M,L,XL)"
        />
        <label>
          Bestseller
          <input
            type="checkbox"
            name="bestseller"
            checked={product.bestseller}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminProducts;
