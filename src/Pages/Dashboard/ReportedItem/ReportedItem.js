import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "react-query";

const ReportedItem = () => {
  const {
    data: reportedItem = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: "reportedItem",
    queryFn: async () => {
      const res = await fetch(
        "https://sound-music-server.onrender.com/reportedItem"
      );
      const data = res.json();
      return data;
    },
  });

  // delete a user
  const handleDelete = (id) => {
    fetch(`https://sound-music-server.onrender.com/deleteReported/${id}`, {
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

  // if loading
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

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th className="w-1/5">NO</th>
            <th className="w-1/5">Product Details</th>
            <th className="w-1/5">Price</th>
            <th className="w-1/5">Action</th>
          </tr>
        </thead>
        <tbody>
          {reportedItem.map((reported, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={reported.picture} alt="/" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{reported.catName}</div>
                    <div className="text-sm opacity-50">{reported.name}</div>
                  </div>
                </div>
              </td>
              <td>{reported.resalePrice}</td>
              <td>
                {" "}
                <div
                  onClick={() => handleDelete(reported._id)}
                  className="w-12 h-12 bg-main rounded-full flex justify-center items-center"
                >
                  <AiFillDelete className="text-xl text-white" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster />
    </div>
  );
};

export default ReportedItem;
