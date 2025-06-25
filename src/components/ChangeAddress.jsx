import React, { useState } from "react";

function ChangeAddress({ setAddress, setIsModelOpen }) {
    const [newAddress,setNewAddress] = useState("")
    const handleAddress =()=>{
        setAddress(newAddress);
        setIsModelOpen(false)
    }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter New Address"
        className="border p-2 mb-4 w-full"
        onChange={(e)=>setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button className="bg-gray-500 text-white py-2 px-4 rounded cursor-pointer mr-2 "
        onClick={()=>setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer "
        onClick={handleAddress}
        >
          Save Address
        </button>
      </div>
    </div>
  );
}

export default ChangeAddress;
