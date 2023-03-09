import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../context/AuthProvider";

const MyBuyers = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const { data: sellers = [] } = useQuery({
    queryKey: ["mySeller", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/mySeller?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (sellers.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-main  text-xl font-bold">You Have No Buyer Yet</p>
      </div>
    );
  }

  return (
    <section>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <p>No</p>
              </th>
              <th>Product Details</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={seller.picture} alt="/" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{seller.productName}</div>
                      <div className="text-sm opacity-50">{seller.price}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-gray-900 text-lg">{seller.buyerPhone}</p>
                </td>
                <td>
                  <p className="text-gray-900 text-lg">{seller.buyerEmail}</p>
                </td>
                <th>
                  <p className="text-gray-900 text-lg">{seller.meetLocation}</p>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyBuyers;
