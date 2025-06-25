import React, { Children } from "react";

function Model({isModelOpen,setIsModelOpen,children}) {
    if(!isModelOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800/75 flex items-center justify-center z-50">
      <div className="bg-white rounded-l-2xl shadow-lg p-6 w-full max-w-md">
        <button
          className="absolute top-4 right-4 text-gray-300 text-3xl cursor-pointer"
          onClick={()=>setIsModelOpen(false)}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Model;
