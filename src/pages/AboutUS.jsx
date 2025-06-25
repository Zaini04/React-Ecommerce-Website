import React from "react";

function AboutUS() {
  return (
    <div className="container mx-auto w-11/12 md:w-9/12 lg:w-7/12">
      <h1 className="text-4xl font-bold mt-3 mb-6 text-center text-gray-800">
        About Us
      </h1>
        <div className="shadow-lg p-8 mb-3">

        
      <p className="text-gray-600 text-lg mb-6 text-justify">
        Welcome to <span className="font-semibold text-red-600">E-shop</span>,
        your trusted destination for high-quality, affordable products. We're
        passionate about bringing the best shopping experience directly to your
        screen.
      </p>

      <p className="text-gray-600 text-lg mb-6 text-justify">
        Our journey began with a simple idea: to make online shopping more
        personal, affordable, and convenient. We carefully curate our catalog
        with products we believe in, and we work hard to deliver quality and
        satisfaction to every customer.
      </p>

      <p className="text-gray-600 text-lg mb-6 text-justify">
        Whether you’re here to shop, browse, or learn more about who we are —
        we’re glad you’re here. Thank you for being a part of the{" "}
        <span className="font-semibold text-red-600">E-shop</span> family!
      </p>

      <div className="mt-10 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} E-shop. All rights reserved.
        </p>
      </div>
      </div>
    </div>
  );
}

export default AboutUS;
