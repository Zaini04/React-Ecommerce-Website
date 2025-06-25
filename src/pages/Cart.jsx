import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emptycart from "../assets/Images/emptycart.jpg";
import { FaTrash } from "react-icons/fa";
import Model from "../components/Model";
import ChangeAddress from "../components/ChangeAddress";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Bosan Road Multan");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTrash = (id)=>{
    dispatch(removeFromCart(id))
setTimeout(() => {
    toast.error("Product removed from cart")
  }, 100)  }
  return (
    <div className="container mx-auto min-h-96 py-8 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-bold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col justify-between lg:flex-row space-x-10 mt-8">
            <div className="lg:w-2/3">
              <div className="flex border-b justify-between items-center mb-4 text-xs font-bold">
                <p>Products</p>
                <div className="flex space-x-11">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>

              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 border-b lg:flex lg:space-x-20"
                >
                  <div className="flex flex-col md:flex-row items-center space-x-4">
                    <img
                      src={product.image}
                      alt=""
                      className="w-16 h-1/6 rounded object-contain"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-xs sm:text-xl font-bold">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex space-x-8 items-center justify-center ">
                    <div className="flex space-x-10 ">
                      <p>${product.price}</p>
                      <div className="flex justify-center items-center border  text-right">
                        <button
                          className="text-xl font-bold px-1.5 border-r cursor-pointer"
                          onClick={()=>dispatch(decreaseQuantity(product.id))}
                        >
                          -
                        </button>
                        <p className="text-[1rem] w-8 px-2 text-red-600 ">
                          {product.quantity}
                        </p>
                        <button
                          className="text-xl border-l px-1 cursor-pointer"
                          onClick={() => dispatch(increaseQuantity(product.id))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex space-x-10">
                      <p className=" w-20  text-right">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                      <button
                        className="text-red-500 hover:text-red-800 cursor-pointer"
                        onClick={()=>handleTrash(product.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-1/3 bg-white rounded-lg p-6 shadow-md border mt-2">
              <h3 className="text-sm font-semibold mb-5">Cart Total:</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Cart Items</span>
                <span>{cart.totalquantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping</p>
                <p className="">
                  Shippint To:
                  <span className="text-xs font-bold ml-2">{address}</span>
                </p>
                <button
                  className="text-blue-500 hover:underline  mt-1"
                  onClick={() => setIsModelOpen(true)}
                >
                  Change Address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price</span>
                <span>${(Number(cart.totalprice) || 0).toFixed(2)}</span>
                {console.log(
                  "cart.totalprice =",
                  cart.totalprice,
                  "typeof =",
                  typeof cart.totalprice
                )}
              </div>
              <button
                className="bg-red-600 hover:bg-red-800 text-white py-2 w-full cursor-pointer"
                onClick={() => navigate("/checkout")}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
          <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModelOpen={setIsModelOpen}
            />
          </Model>
        </div>
      ) : (
        <div className="flex justify-center ">
          <img src={emptycart} alt="" className="h-96" />
        </div>
      )}
    </div>
  );
}

export default Cart;
