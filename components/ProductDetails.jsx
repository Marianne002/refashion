// components/ProductDetails.jsx
import React, { useState } from 'react';

const ProductDetails = ({ product }) => {
  const [activeTab, setActiveTab] = useState('specifications')

  return (
    <div className="mb-16">
      <div className="border-b border-gray-200">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('specifications')}
            className={`py-4 px-1 font-medium text-sm border-b-2 €{
              activeTab === 'specifications'
                ? 'border-gray-600 text-gray-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Spécifications
          </button>
          <button
            onClick={() => setActiveTab('shipping')}
            className={`py-4 px-1 font-medium text-sm border-b-2 €{
              activeTab === 'shipping'
                ? 'border-gray-600 text-gray-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Livraison & Retours
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-4 px-1 font-medium text-sm border-b-2 €{
              activeTab === 'reviews'
                ? 'border-gray-600 text-gray-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Avis
          </button>
        </div>
      </div>

      <div className="py-6">
        {activeTab === 'specifications' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Spécifications du produit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              {Object.entries(product.specifications).map(([label, value]) => (
                <div key={label} className="border-b pb-3">
                  <dt className="font-medium text-gray-500">
                    {label.charAt(0).toUpperCase() + label.slice(1).replace(/([A-Z])/g, ' ')}
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
                Informations de livraison
              </h3>
              <p className="text-gray-700">
                Nous offrons la livraison standard gratuite pour toutes les commandes supérieures à 35 €. Pour les commandes inférieures, des frais de 5,99 € s’appliquent. La livraison standard prend généralement entre 3 et 5 jours ouvrables selon votre localisation.
              </p>
              <p className="text-gray-700 mt-2">
                Pour une livraison express (1 à 2 jours ouvrables), veuillez sélectionner cette option lors du paiement. Des frais supplémentaires de 12,99 € seront appliqués.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Politique de retour
              </h3>
              <p className="text-gray-700">
                Vous disposez de 30 jours pour retourner votre article si vous n’êtes pas entièrement satisfait. Le remboursement ou l’échange sera effectué après réception du produit.
              </p>
              <p className="text-gray-700 mt-2">
                L’article doit être inutilisé, en parfait état et dans son emballage d’origine pour pouvoir être retourné.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Avis des clients
              </h3>
              <button className="text-sm font-medium text-gray-600 hover:text-gray-500">
                Rédiger un avis
              </button>
            </div>

            {/* Sample Reviews */}
            <div className="space-y-6">
              <div className="border-b pb-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <h4 className="ml-2 text-sm font-medium text-gray-900">
                    Parfait pour déménager !
                  </h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Par Sarah J. le 12 mai 2023
                </p>
                <p className="text-gray-700">
                  Ces boîtes étaient exactement ce dont j'avais besoin pour mon déménagement. Solides, pratiques avec les poignées. J’en rachèterai sans hésiter !
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
                    Bonne qualité, un peu plus petite que prévu
                  </h4>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Par Mike T. le 3 avril 2023
                </p>
                <p className="text-gray-700">
                  Très bonne qualité et elles s'empilent bien. Juste un peu plus petites que ce que j’avais imaginé. Mais globalement très utiles !
                </p>
              </div>
            </div>

            <button className="text-sm font-medium text-gray-600 hover:text-gray-500">
              Charger plus d’avis
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetails
