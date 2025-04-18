// app/page.jsx
"use client";
import React from 'react';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import ProductDetails from '../components/ProductDetails';

const Home = () => {

  const product = {
    id: 'box-premium-001',
    name: 'Achète ta Box',
    price: 6,
    discount: 7,
    description:
      'Notre Box est fabriquée en carton ondulé de haute qualité avec des coins renforcés pour une durabilité accrue. Parfaite pour les déménagements, le stockage ou l’organisation de votre maison ou bureau.',
    features: [
      'Fabriquée à partir de matériaux 100% recyclés',
      'Revêtement résistant à l’eau',
      'Design empilable',
      'Poignées renforcées pour un transport facile',
      'Pliable pour un rangement compact lorsqu’elle n’est pas utilisée',
    ],
    specifications: {
      dimensions: '45,7 × 35,6 × 30,5 cm',
      weight: '0,54 kg',
      material: 'Carton ondulé, construction triple épaisseur',
      loadCapacity: 'Jusqu’à 30 kg',
      color: 'Brun kraft',
    },
    images: [
      '/img/rebox.png',
      '/img/rebox1.png',
      '/img/rebox2.png',
      '/img/rebox3.png',
    ],
    stock: 42,
    rating: 4.8,
    reviewCount: 156,
  }

  return (
    <>
      <title>Re_Box - Re_Fashion</title>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <span className="hover:text-gray-700 cursor-pointer">Produits</span>{' '}
          &gt;{' '}
          <span className="font-medium text-gray-700">Box</span>
        </div>
        {/* Product Main Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
        </div>
        {/* Product Details */}
        <ProductDetails product={product} />
      </div>
    </>
  );
}

export default Home;