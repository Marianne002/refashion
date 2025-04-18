// app/page.jsx
"use client";
import React from 'react'

import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import ProductDetails from '../components/ProductDetails';
import RelatedProducts from '../components/RelatedProducts';

const Home = () => {

  const product = {
    id: 'box-premium-001',
    name: 'Premium Storage Box',
    price: 49.99,
    discount: 59.99,
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
      'https://images.unsplash.com/photo-1595079676341-c7f30680f423?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1607166452427-5b577d4e7be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
    stock: 42,
    rating: 4.8,
    reviewCount: 156,
  }
  // Mock related products
  const relatedProducts = [
    {
      id: 'box-small-001',
      name: 'Small Storage Box',
      price: 29.99,
      image:
        'https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.5,
      reviewCount: 87,
    },
    {
      id: 'box-large-001',
      name: 'Large Storage Box',
      price: 69.99,
      image:
        'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviewCount: 112,
    },
    {
      id: 'box-decorative-001',
      name: 'Decorative Storage Box',
      price: 39.99,
      image:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.3,
      reviewCount: 64,
    },
    {
      id: 'box-set-001',
      name: 'Box Set (3 Pieces)',
      price: 99.99,
      image:
        'https://images.unsplash.com/photo-1594016114659-0564f7c115ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviewCount: 203,
    },
  ]

  return (
    <>
      <title>Re_Box - Re_Fashion</title>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <span className="hover:text-gray-700 cursor-pointer">Home</span> &gt;{' '}
          <span className="hover:text-gray-700 cursor-pointer">Products</span>{' '}
          &gt;{' '}
          <span className="font-medium text-gray-700">Premium Storage Box</span>
        </div>
        {/* Product Main Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
        </div>
        {/* Product Details */}
        <ProductDetails product={product} />
        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </div>
    </>
  );
}

export default Home;