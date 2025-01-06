import React from "react";
import { FaDove } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

function Popup({ orderPopup, setOrderPopup }) {
  return (
    <>
      {orderPopup && (
        <div className="popup ">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md duration-200 w-[300px]">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1>Order Nov </h1>
                </div>
                <div>
                  <IoIosClose
                    className="text-2xl cursor-pointer"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* form Section */}
              <div>
                <div>
                  <form>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Alamat
                      </label>
                      <input
                        type="text"
                        className="w-full px-2 py-1 border rounded text-sm"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Jumlah Order
                      </label>
                      <input
                        type="password"
                        className="w-full px-2 py-1 border rounded text-sm"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-1 rounded text-sm hover:bg-yellow-600"
                    >
                      Confirm
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
