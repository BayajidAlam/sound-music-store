import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({ booking, setBooking }) => {
  const { name, resalePrice, email, picture } = booking;
  // context
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const buyerName = user?.displayName;
    const sellerEmail = email;
    const buyerEmail = user?.email;

    const meetLocation = form.location.value;
    const buyerPhone = form.phone.value;

    // make a object of mooking details
    const bookingData = {
      productName: name,
      price: resalePrice,
      buyerEmail,
      buyerName,
      buyerPhone,
      meetLocation,
      sellerEmail,
      picture,
    };

    // post to server
    fetch("https://sound-music-server-bayajidalam.vercel.app/booking", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setBooking(null);
          updateBookingStatus(booking._id);
          toast.success("Thank you, successful booked!");
          navigate("/v3/dashboard");
        }
      });
  };

  const updateBookingStatus = (id) => {
    const doc = {
      salesStatus: "booked",
    };
    fetch(`https://sound-music-server-bayajidalam.vercel.app/setbooked/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

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
            <form onSubmit={handleBooking} className="space-y-4">
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
                  <input
                    className="w-full border py-1 px-2"
                    type="text"
                    defaultValue={resalePrice}
                    readOnly
                  />
                </div>
              </div>
              <div>
                <p className="mb-1 text-black">Location</p>
                <input
                  type="text"
                  name="location"
                  className="border py-1 px-2 w-full"
                  placeholder="Enter your location"
                  required
                />
              </div>
              <div>
                <p className="mb-1 text-black">Phone</p>
                <input
                  type="number"
                  name="phone"
                  className="border py-1 px-2 w-full"
                  placeholder="Enter your number"
                  required
                />
              </div>
              <div className="text-center font-bold">
                <button
                  type="submit"
                  className="bg-main text-white py-1 px-6 rounded-full hover:shadow-xl"
                >
                  Procced Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
