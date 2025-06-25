import React from "react";

function Contact() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-2xl font-bold mb-4">Contact US</h2>
        <h5 className="text-sm ">We will reach you soon!</h5>
        <form className=" w-full md:w-8/12 lg:w-5/12 shadow-lg p-3">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border "
              placeholder="Enter Name"
              type="text"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border "
              placeholder="Enter Email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border "
              placeholder="Enter Password"
              type="password"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 cursor-pointer"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
