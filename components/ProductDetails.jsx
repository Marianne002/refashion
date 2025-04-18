// components/ProductDetails.jsx
import React, { useState } from 'react'
// Si tu veux utiliser les étoiles, assure-toi d'avoir installé et importé un set d’icônes
// import { StarIcon } from 'lucide-react' ou tout autre lib d’icônes

const ProductDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState('specifications')

  return (
    <div className="mb-16">
      <div className="border-b border-gray-200">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('specifications')}
            className={`py-4 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'specifications'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Specifications
          </button>
          <button
            onClick={() => setActiveTab('shipping')}
            className={`py-4 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'shipping'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Shipping & Returns
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-4 px-1 font-medium text-sm border-b-2 ${
              activeTab === 'reviews'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Reviews
          </button>
        </div>
      </div>

      <div className="py-6">
        {activeTab === 'specifications' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Product Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              {Object.entries(product.specifications).map(([label, value]) => (
                <div key={label} className="border-b pb-3">
                  <dt className="font-medium text-gray-500">
                    {label.charAt(0).toUpperCase() + label.slice(1).replace(/([A-Z])/g, ' $1')}
                  </dt>
                  <dd className="mt-1 text-gray-900">{value}</dd>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'shipping' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Shipping Information
              </h3>
              <p className="text-gray-700">
                We offer free standard shipping on all orders over $35. For orders under $35, a flat shipping rate of $5.99 applies. Standard shipping typically takes 3-5 business days, depending on your location.
              </p>
              <p className="text-gray-700 mt-2">
                For expedited shipping options, please select the appropriate option at checkout. Express shipping (1-2 business days) is available for an additional $12.99.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Return Policy
              </h3>
              <p className="text-gray-700">
                We offer a 30-day return policy on all our products. If you're not completely satisfied with your purchase, you can return it within 30 days of delivery for a full refund or exchange.
              </p>
              <p className="text-gray-700 mt-2">
                To be eligible for a return, the item must be unused and in the same condition that you received it, and must be in the original packaging.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Customer Reviews
              </h3>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                Write a Review
              </button>
            </div>

            {/* Sample Reviews */}
            <div className="space-y-6">
              <div className="border-b pb-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span> // Remplace par <StarIcon /> si tu veux des icônes
                    ))}
                  </div>
                  <h4 className="ml-2 text-sm font-medium text-gray-900">
                    Perfect for moving!
                  </h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  By Sarah J. on May 12, 2023
                </p>
                <p className="text-gray-700">
                  These boxes were exactly what I needed for my recent move. They're sturdy enough to hold books and dishes, and the handles make them easy to carry. Would definitely buy again!
                </p>
              </div>

              <div className="border-b pb-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    <span className="text-gray-300">★</span>
                  </div>
                  <h4 className="ml-2 text-sm font-medium text-gray-900">
                    Good quality, slightly smaller than expected
                  </h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  By Mike T. on April 3, 2023
                </p>
                <p className="text-gray-700">
                  The quality of these boxes is excellent, and they stack really well. My only complaint is that they were slightly smaller than I expected based on the dimensions. Still very useful though!
                </p>
              </div>
            </div>

            <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
              Load More Reviews
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetails
