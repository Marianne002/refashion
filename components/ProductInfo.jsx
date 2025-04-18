// components/ProductInfo.jsx
import React, { useState } from 'react'

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center">
        <div className="flex text-yellow-400">
          {/* Stars Icon */}
        </div>
        <span className="ml-2 text-sm text-gray-600">
          {product.rating} ({product.reviewCount} avis)
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center">
        <span className="text-2xl font-bold text-gray-900">
          €{product.price.toFixed(2)}
        </span>
        {product.discount && (
          <>
            <span className="ml-3 text-gray-500 line-through">
              €{product.discount.toFixed(2)}
            </span>
            <span className="ml-3 text-sm text-green-600 font-medium">
              Save €{(product.discount - product.price).toFixed(2)}
            </span>
          </>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-700">{product.description}</p>

      {/* Features */}
      <div className="space-y-2">
        <h3 className="font-medium text-gray-900">Caractéristiques principales :</h3>
        <ul className="list-disc pl-5 space-y-1">
          {product.features.map((feature, index) => (
            <li key={index} className="text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Add to cart */}
      <div className="pt-4">
        <div className="flex items-center mb-4">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={decrementQuantity}
              className="p-2 hover:bg-gray-100"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="px-4 py-2 w-12 text-center">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="p-2 hover:bg-gray-100"
              disabled={quantity >= product.stock}
            >
              +
            </button>
          </div>
          <span className="ml-3 text-sm text-gray-500">
            {product.stock} boxs disponibles
          </span>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
          Ajouter au panier - €{(product.price * quantity).toFixed(2)}
        </button>
      </div>

      {/* Shipping and returns */}
      <div className="border-t border-gray-200 pt-6 space-y-4">
        <div className="flex">
          <div>
            <h4 className="font-medium text-gray-900">Livraison Gratuite</h4>
            <p className="text-sm text-gray-600">Livraison offerte à partir de 35 € d’achat</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <h4 className="font-medium text-gray-900">Qualité Garantie</h4>
            <p className="text-sm text-gray-600">
              Satisfait ou remboursé
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <h4 className="font-medium text-gray-900">Retours Faciles</h4>
            <p className="text-sm text-gray-600">
              Retour possible sous 30 jours, sans tracas
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
