// app/page.jsx
"use client";
import React from 'react';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import ProductDetails from '../components/ProductDetails';

const Home = () => {

  const product = {
    id: 'box-premium-001',
    name: 'Box',
    price: 6,
    discount: 7,
    description:
      'Our Premium Storage Box is crafted from high-quality corrugated cardboard with reinforced corners for extra durability. Perfect for moving, storage, or organizing your home or office.',
    features: [
      'Made from 100% recycled materials',
      'Water-resistant coating',
      'Stackable design',
      'Reinforced handles for easy carrying',
      'Collapsible for easy storage when not in use',
    ],
    specifications: {
      dimensions: '18" × 14" × 12"',
      weight: '1.2 lbs',
      material: 'Corrugated cardboard, 3-ply construction',
      loadCapacity: 'Up to 65 lbs',
      color: 'Kraft brown',
    },
    images: [
      '/img/rebox.png',
      '/img/rebox.png',
      '/img/rebox.png',
      '/img/rebox.png',
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
          <span className="hover:text-gray-700 cursor-pointer">Products</span>{' '}
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