import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  // fetch all booking
  const { data: booings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
console.log(booings);
  // make an order
  const handleOrder = (booking) => {
    const order = {
      productId: booking._id,
      productName: booking.productName,
      customer: booking.buyerName,
      email: booking.buyerEmail,
      phone: booking.buyerPhone,
      price: booking.price,
      location: booking.meetLocation,
    };
    // send to server
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);
      });
  };

  if (booings.length === 0) {
    return (
      <div className="mt-4">
        <p className="font-bold text-main">You have no bookings</p>
      </div>
    );
  }
  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Details</th>
              <th>Seller Email</th>
              <th>Price</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {booings.map((booking, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  {" "}
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={booking.picture} alt="/" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking.productName}</div>
                      <div className="text-sm opacity-50">
                        {booking.meetLocation}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{booking.sellerEmail}</td>
                <td>{booking.price}</td>
                <td>
                  <button
                    onClick={() => handleOrder(booking)}
                    className="py-1 px-4 bg-main text-white rounded-full"
                  >
                    Pay Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyOrders;
