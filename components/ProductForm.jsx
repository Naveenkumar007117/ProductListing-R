import React, { useState } from "react";

const ProductForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !image) return;
    onAdd({ name, price, image });
    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Product name"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        className="input"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="input"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit" className="btn">➕ Add Product</button>
    </form>
  );
};

export default ProductForm;