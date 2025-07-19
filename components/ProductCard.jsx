import React, { useState } from "react";

const ProductCard = ({ product, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(product.name);
  const [editedPrice, setEditedPrice] = useState(product.price);
  const [editedImage, setEditedImage] = useState(product.image);

  const handleUpdate = () => {
    onUpdate({ ...product, name: editedName, price: editedPrice, image: editedImage });
    setIsEditing(false);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              type="text"
              className="input"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <input
              type="number"
              className="input"
              value={editedPrice}
              onChange={(e) => setEditedPrice(e.target.value)}
            />
            <input
              type="text"
              className="input"
              value={editedImage}
              onChange={(e) => setEditedImage(e.target.value)}
            />
            <div className="card-buttons">
              <button className="btn" onClick={handleUpdate}>✅ Save</button>
              <button className="btn" onClick={() => setIsEditing(false)}>❌ Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h3>{product.name}</h3>
            <p>💰 ${product.price}</p>
            <div className="card-buttons">
              <button className="btn" onClick={() => setIsEditing(true)}>✏️ Edit</button>
              <button className="btn" onClick={() => onDelete(product.id)}>🗑️ Delete</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;