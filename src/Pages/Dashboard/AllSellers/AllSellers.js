import React from "react";
import { useQuery } from "react-query";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";

const AllSellers = () => {
  const {
    data: allSellers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const res = await fetch(
        "https://sound-music-server.onrender.com/allSellers?role=seller"
      );
      const data = await res.json();
      return data;
    },
  });

  // delete a user
  const handleDelete = (id) => {
    fetch(`https://sound-music-server.onrender.com/deleteSeller/${id}`, {
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
    <section>
      <div className="overflow-x-auto">
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
            {allSellers.map((seller, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  <div
                    onClick={() => handleDelete(seller._id)}
                    className="w-12 h-12 bg-main rounded-full flex justify-center items-center"
                  >
                    <AiFillDelete className="text-xl text-white" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllSellers;
