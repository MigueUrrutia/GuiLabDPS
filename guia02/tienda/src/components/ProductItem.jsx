import React from 'react';

const ProductItem = ({ productId, productName, price, imageUrl }) => {
  return (
    <div className="product-item">
      <img src={imageUrl} alt={productName} />
      <h2>{productName}</h2>
      <p>Precio: ${price}</p>
      <p>ID: {productId}</p>
    </div>
  );
};

export default ProductItem;
