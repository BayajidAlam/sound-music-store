import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import tick from "../../assets/tick.gif";

const PaymentSuceess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transactionId = query.get("transactionId");

  // state
  const [order, setOrder] = useState({});

  // fetch
  useEffect(() => {
    fetch(
      `https://sound-music-server.onrender.com/orders/by-transaction-id/${transactionId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [transactionId]);
  console.log(order);
  return (
    <section className="h-screen">
      <div className="flex flex-col items-center py-12">
        <div className="bg-green-500 p-2 rounded-full mb-2">
          <img className="w-16" src={tick} alt="" />
        </div>
        <p className="text-4xl font-bold ">Payment Successful</p>
      </div>
      <div>
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Transaction Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-1/3 mx-auto">{order.productName}</td>
                  <td className="w-1/3 mx-auto">{order.price}</td>
                  <td className="w-1/3 mx-auto">{order.transactionId}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <button
          onClick={() => window.print()}
          className="text-white bg-main px-8 text-xl
         font-bold rounded-full py-1"
        >
          Print
        </button>
      </div>
    </section>
  );
};

export default PaymentSuceess;
