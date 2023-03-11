import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../context/AuthProvider";
import { FcAdvertising } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import { toast, Toaster } from "react-hot-toast";
import { TiTick } from "react-icons/ti";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);

  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myProduct", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://sound-music-server-bayajidalam.vercel.app/myProduct/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  // update a product to advertise
  const handleUpdate = (id) => {
    const updatedDoc = {
      state: "advertised",
    };
    fetch(
      `https://sound-music-server-bayajidalam.vercel.app/advertisement/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedDoc),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Added to advertised");
        }
      });
  };

  // delete a product
  const handleDelete = (id) => {
    fetch(`https://sound-music-server-bayajidalam.vercel.app/delete/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("User deleted Successfully!");
        }
      });
  };

  if (isLoading) {
    return (
      <div className="center">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-main  text-xl font-bold">
          You Have No Product Yet, Please Add Product first
        </p>
      </div>
    );
  }

  return (
    <section>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="w-1/5">
                <p>No</p>
              </th>
              <th className="w-1/5">Product Details</th>
              <th className="w-1/5">Status</th>
              <th className="w-1/5">Advertise</th>
              <th className="w-1/5">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product.picture} alt="/" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                      <div className="text-sm opacity-50">
                        {product.resalePrice}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-lg font-bold text-gray-700">
                  {product.salesStatus}
                </td>
                <td>
                  {product.addState === "advertised" ? (
                    <button className="w-12 bg-green-500 flex justify-center items-center h-12 rounded-full">
                      <TiTick className="text-white text-xl" />
                    </button>
                  ) : (
                    <div
                      onClick={() => handleUpdate(product._id)}
                      className="flex items-center justify-between bg-gray-200 rounded-full w-12 h-12"
                    >
                      <FcAdvertising className="text-xl w-12" />
                    </div>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-ghost hover:bg-white"
                  >
                    <div className="flex items-center justify-between bg-gray-200 rounded-full w-12 h-12 text-main">
                      <AiFillDelete className="text-xl w-12" />
                    </div>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster />
    </section>
  );
};

export default MyProduct;
