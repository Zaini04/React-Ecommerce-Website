import React, { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();

  useEffect(() => {
    const newItem = products.find((product) => product.id == id);
    setProduct(newItem);
  }, [id]);

  if (!product) {
    return <div className="text-center p-8">Product not found</div>;
  }
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
          <img src={product.image} alt={product.name} className="h-full" />
        </div>
        <div className="md:w-1/2 py-4 shadow-md md:px-16 h-96 flex flex-col items-center gap-y-2">
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-xl text-gray-700 mb-4 font-semibold">
            ${product.price}
          </p>

          <div className="flex items-center gap-x-2 mb-4">
            <input
              type="number"
              min="1"
              id="quantity"
              className="border p-1 w-16 "
            />
            <button className="bg-red-600 text-white py-1.5 px-4 hover:bg-red-800">
              Add to Cart
            </button>
          </div>
          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" />
              Deleiver & Return
            </p>
            <p className="flex items-center">
              <FaQuestion className="mr-1" />
              Ask me a Question
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-3">Product Description</h3>
        <p>Product discription will display here</p>
      </div>
    </div>
  );
}

export default ProductDetail;
