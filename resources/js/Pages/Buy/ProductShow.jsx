import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link, usePage } from '@inertiajs/inertia-react';

export default function ProductShow({ product }) {
  function addToCart() {
    Inertia.post(route('buy.cart.add'), { product_id: product.id, qty: 1 });
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-3">{product.description}</p>
      <div className="mt-6">
        <button onClick={addToCart} className="px-4 py-2 bg-blue-600 text-white rounded">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
