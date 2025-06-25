import React from "react";
import { useNavigate } from "react-router-dom";

function Order({ order }) {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h1 className="text-2xl font-bold mb-4">Order Information</h1>
      <h3 className="text-xl font-semibold mb-4">Thank you for your order!</h3>
      <p>Your order has been placed successfully you will get an email soon</p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold">Order Summary</h3>
        <p>Order Number: {order.orderNumber}</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Shipping Information</h3>
          <p>
            {" "}
            <span className="font-semibold mr-2 text-red-500">Address: </span>
            {order.shippingInformation.address}
          </p>
          <p>
            {" "}
            <span className="font-semibold mr-2 text-red-500">City: </span>
            {order.shippingInformation.city}
          </p>
          <p>
            {" "}
            <span className="font-semibold mr-2 text-red-500">
              Zip Code:
            </span>{" "}
            {order.shippingInformation.zip}
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Product Orderded</h3>
          {order.products.map((product) => (
            <div className="flex justify-between mt-2">
              <p>
                {product.name} x {product.quantity}
              </p>
              <p>${product.price * product.quantity}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <span>Total Price</span>
          <span>${order.totalprice}</span>
        </div>
        <div className="mt-6">
          <button className="bg-green-500 text-white px-3 py-2 hover:text-green-800 cursor-pointer">
            Track your order
          </button>
          <button
            className="bg-red-500 ml-4 text-white px-3 py-2 hover:text-red-800 cursor-pointer"
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
