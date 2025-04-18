// components/RelatedProducts.jsx
import React from 'react';

const RelatedProducts = ({ products }) => {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        You May Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <a href={`/product/${product.id}`} className="block">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-900 font-medium">{product.name}</h3>
                <div className="flex items-center mt-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-500">
                    ({product.reviewCount})
                  </span>
                </div>
                <div className="mt-2 font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
