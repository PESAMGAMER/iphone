"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product.id} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col items-center">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-32 h-32 object-contain mb-4 rounded-md"
              />

              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-blue-600">
                ${product.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
