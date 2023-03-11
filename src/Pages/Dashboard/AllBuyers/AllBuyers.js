import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { useQuery } from "react-query";

const AllBuyers = () => {
  const {
    data: allBuyer = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: "allBuyer",
    queryFn: async () => {
      const res = await fetch(
        "https://sound-music-server-bayajidalam.vercel.app/allBuyer?role=buyer"
      );
      const data = await res.json();
      return data;
    },
  });

  // delete a user
  const handleDelete = (id) => {
    console.log(id);
    fetch(
      `https://sound-music-server-bayajidalam.vercel.app/deleteBuyer/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    )
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
        <thead>
          <tr>
            <th className="w-1/4">No</th>
            <th className="w-1/4">Name</th>
            <th className="w-1/4">Email</th>
            <th className="w-1/4">Action</th>
          </tr>
        </thead>
        <tbody>
          {allBuyer.map((buyer, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{buyer.name}</td>
              <td>{buyer.email}</td>
              <td>
                {" "}
                <div
                  onClick={() => handleDelete(buyer._id)}
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

export default AllBuyers;
