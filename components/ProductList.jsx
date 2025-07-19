import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onDelete, onUpdate }) => {
  if (products.length === 0) {
    return <p style={{ textAlign: "center", color: "#777" }}>No products found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default ProductList;