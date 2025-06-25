import React, { useEffect } from "react";
import { Categories,ProductsItems } from "../assets/mockData";
import hero from "../assets/Images/hero.jpg";
import InfoSection from "../components/InfoSection";
import CategoriesComp from "../components/CategoriesComp";
import { setProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";


const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product)
    useEffect(()=>{
        dispatch(setProducts(ProductsItems))
    })



  return (
    <div className="scroll-smooth">
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 ">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-4/12 ">
          <div className="uppercase bg-red-600 text-white font-bold text-xs px-2 py-2.5">
            Shop By Categories
          </div>
          <ul className="bg-gray-100 space-y-4 p-3  flex flex-col items-start justify-start">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center justify-center font-semibold text-xs cursor-pointer hover:text-blue-900 transition hover:underline">
                <div className="w-2 h-2 rounded-full mr-2 border border-red-500"></div>
                {category}
                </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={hero} alt=""  className="h-full w-full rounded-2xl"/>
          <div className="absolute top-16 left-8 flex flex-col items-start justify-start">
            <p className="text-gray-600 font-medium mb-4">Products by Zain</p>
            <h2 className="text-[1.5rem] sm:text-3xl md:text-[1.5rem] lg:text-3xl text-gray-900 font-bold">WELCOME TO E-SHOP</h2>
            <h4 className="text-xl font-bold mt-3 text-gray-800">Million+Products</h4>
            <button className="bg-red-600 px-8 mt-4 py-1.5 font-bold text-white hover:bg-red-800 transform transition-transform duration-300 hover:scale-105">SHOP NOW</button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategoriesComp />

      <div className="container mx-auto py-12">
        <h2 className="text-2xl mb-6 font-bold text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {
                products.products.slice(0,5).map(((product,index)=>(
                    <ProductCard product={product} key={index} />
                )))
            }
        </div>
      </div>
    </div>
    <Shop />
    </div>

  );
};

export default Home;
