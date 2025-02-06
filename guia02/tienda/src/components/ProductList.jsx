import React, { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products] = useState([
    { productId: 1, productName: 'Arroz San Pedro', price: 4.25, imageUrl: 'https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/1bb2cc79-9c9e-4000-9cc6-e4ece3abeced/content' },
    { productId: 2, productName: 'Aceite de oliva Borges', price: 10, imageUrl: 'https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/e1e3d58d-9da2-4f27-80d5-3b8ee225e333/content' },
    { productId: 3, productName: 'Café soluble Nescafé', price: 5, imageUrl: 'https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/0d2a2ed8-0519-43f5-8d03-33c762dc678b/content' },
    { productId: 4, productName: 'Cerveza Corona Extra', price: 4.85, imageUrl: 'https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/8f0cac62-1fef-4e90-9dc8-43187270495c/content' },
    { productId: 5, productName: 'Coca Cola', price: 3.05, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFTM5IFisdRKuTCRpEOwKN0fTIxWWlSAQyQ&s' },
    { productId: 6, productName: 'Leche en polvo Pinito', price: 7.75, imageUrl: 'https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/deb1ba57-7770-4559-85cd-e8ca22757402/content' },
    { productId: 7, productName: 'Papel Higienico Scott', price: 9.80, imageUrl: 'https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/afb9d0b9-7b21-496d-8a21-99f3f02499e5/content' },
    { productId: 8, productName: 'Crema dental Colgate Max White', price: 9.25, imageUrl: 'https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/5ce809f5-1e70-4320-98b8-0ed6c2baa84f/content' },
    { productId: 9, productName: 'Comida para gato Purina Catchow Gatitos', price: 15.46, imageUrl: 'https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/d74806bb-a292-4a75-9b30-d9077b6bc8cc/content' },
    { productId: 10, productName: 'Comida para perro Dog Chow Adulto', price: 4.99, imageUrl: 'https://bitworks-multimedia.superselectos.com/api/selectos/multimedia/79524e6a-d2e7-4eeb-84a2-c3c2ca5afc88/content' },
  ]);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem
          key={product.productId}
          productId={product.productId}
          productName={product.productName}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;
