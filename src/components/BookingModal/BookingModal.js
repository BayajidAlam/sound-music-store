import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({ booking }) => {
  const { name, resalePrice
  } = booking;
  // context
  const { user } = useContext(AuthContext);
  console.log(booking);
  return (
    <>
      <input type="checkbox" id="sound-music-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative rounded-none">
          <label
            htmlFor="sound-music-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-main text-white"
          >
            ✕
          </label>
          <div>
            <h1 className="w-full bg-main text-white font-bold text-xl text-center my-2">
              Booking for {booking.name}
            </h1>
            <form className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-[48%]">
                  <p className="mb-1 text-black">Name</p>
                  <input
                    className="border py-1 px-2 w-full"
                    type="text"
                    defaultValue={user?.displayName}
                    readOnly
                  />
                </div>

                <div className="w-[48%]">
                  <p className="mb-1 text-black">Email</p>
                  <input
                    className="border py-1 px-2 w-full"
                    type="text"
                    defaultValue={user?.email}
                    readOnly
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-[48%]">
                  <p className="mb-1 text-black">Product name</p>
                  <input
                    className="w-full border py-1 px-2"
                    type="text"
                    defaultValue={name}
                    readOnly
                  />
                </div>
                <div className="w-[48%]">
                  <p className="mb-1 text-black">Product Price</p>
                  <input className="w-full border py-1 px-2" type="text" 
                  defaultValue={resalePrice}
                  readOnly
                  />
                </div>
              </div>
              <div>
                <p className="mb-1 text-black">Location</p>
                <input
                  type="text"
                  className="border py-1 px-2 w-full"
                  placeholder="Enter your location"
                />
              </div>
              <div>
                <p className="mb-1 text-black">Phone</p>
                <input
                  type="number"
                  className="border py-1 px-2 w-full"
                  placeholder="Enter your number"
                />
              </div>
              <div className="text-center font-bold">
                <button className="bg-main text-white py-1 px-6 rounded-full hover:shadow-xl">Procced Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
