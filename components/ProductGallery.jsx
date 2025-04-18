// components/ProductGallery.jsx
import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
        <img
          src={mainImage}
          alt="Product main view"
          className="w-full h-auto object-contain aspect-square"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`border-2 rounded-md overflow-hidden ${
              mainImage === image ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <img
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="w-full h-auto object-cover aspect-square"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery;