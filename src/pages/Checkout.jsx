import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout({setOrder}) {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  

  const navigate = useNavigate()
  const [orderInfo,setOrderInfo] = useState({
    address: "",
    city: "",
    zip:""
})

  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");

  const cart = useSelector((state) => state.cart);
  

  const handleOrder=()=> {
    const newOrder = {
        products: cart.products,
        orderNumber: '112233',
        shippingInformation: orderInfo,
        totalprice: cart.totalprice
    }
    setOrder(newOrder)
    navigate('/Order-Confirmation')
  }

  

  return (
    <div className="container mx-auto min-h-96 py-8 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-bold mb-4">CHECKOUT</h3>
      <div className="flex flex-col justify-between lg:flex-row space-x-10 mt-8">
        <div className="lg:w-2/3 ">
          <div className="border p-2 rounded-md mb-6">
            <div
              className="flex justify-between items-center"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2 ">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700 " htmlFor="">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border rounded-md mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700 " htmlFor="">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border rounded-md mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700 " htmlFor="">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone #"
                  className="w-full px-3 py-2 border rounded-md mt-1"
                />
              </div>
            </div>
          </div>
          {/* Shipping Info */}
          <div className="border p-2 mb-6 rounded-md">
            <div
              className="flex justify-between items-center"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2 ">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700 " htmlFor="">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border rounded-md mt-1"
                  onChange={(e)=>setOrderInfo({...orderInfo, address: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 " htmlFor="">
                  City
                </label>
                <input
                  type="email"
                  placeholder="Enter City"
                  className="w-full px-3 py-2 border rounded-md mt-1"
                  onChange={(e)=>setOrderInfo({...orderInfo, city: e.target.value})}

                />
              </div>
              <div>
                <label className="block text-gray-700 " htmlFor="">
                  Zip Code
                </label>
                <input
                  type="text"
                  placeholder="Enter Zip Code #"
                  className="w-full px-3 py-2 border rounded-md mt-1"
                  onChange={(e)=>setOrderInfo({...orderInfo, zip: e.target.value})}

                />
              </div>
            </div>
          </div>
          {/* Payment Method */}
          <div className="border p-2 mb-6 rounded-md">
            <div
              className="flex justify-between items-center"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2 ">
                Shipping Information
              </h3>
              {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "Cash On Delivery"}
                  onChange={() => setPaymentMethod("Cash On Delivery")}
                />
                <label className="block text-gray-700 ml-3  mb-0.5 " htmlFor="">
                  Cash On Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "Debit Card"}
                  onChange={() => setPaymentMethod("Debit Card")}
                />
                <label className="block text-gray-700 ml-3  mb-0.5" htmlFor="">
                  Debit Card
                </label>
              </div>
              {paymentMethod === "Debit Card" && (
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Debit Information{" "}
                  </h3>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-semibold mb-2"
                      htmlFor=""
                    >
                      Card No
                    </label>
                    <input type="text" className="border p-2 w-full rounded" />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-semibold mb-2"
                      htmlFor=""
                    >
                      Card Name
                    </label>
                    <input type="text" className="border p-2 w-full rounded" />
                  </div>
                  <div className="flex justify-betweenmb-4">
                    <div className="w-1/2 mr-2">
                      <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor=""
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded"
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor=""
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 bg-white rounded-lg p-6 shadow-md border mt-2">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded object-contain "
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      &{product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 mt-4 border-t">
            <div className="flex justify-between">
              <span>Total Price:</span>
              <span className="font-semibold">
                ${cart.totalprice.toFixed(2)}
              </span>
            </div>
          </div>
          <button className="w-full bg-red-600 hover:bg-red-800 py-2 text-white mt-6 cursor-pointer" 
          onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
