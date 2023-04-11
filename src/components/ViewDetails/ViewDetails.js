import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdOutlineCall } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import BookingModal from "../BookingModal/BookingModal";
import { toast, Toaster } from "react-hot-toast";
import { MdReport } from "react-icons/md";

const ViewDetails = () => {
  // load data from loader
  const data = useLoaderData();

  const {
    name,
    postedOn,
    location,
    picture,
    sallerName,
    email,
    mobile,
    resalePrice,
    originalPrice,
    conditions,
    salesStatus,
    useingFrom,
    description,
    reportState,
  } = data;

  // state
  const [booking, setBooking] = useState(null);

  const repoDoc = {
    productReportState: reportState,
  };

  const handleReport = (id) => {
    fetch(`https://sound-music-server.onrender.com/report/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(repoDoc),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("You have reported Successfully");
        }
      });
  };

  return (
    <section className="h-screen">
      <div className="container mx-auto">
        <div>
          <div className="pl-16 py-4">
            <p className="text-xl font-bold">{name}</p>
            <div className="flex">
              <p>{postedOn}</p>,<p>{location}</p>
            </div>
          </div>
          <div className="flex">
            <img className="w-2/4 mx-auto h-80" src={picture} alt="" />
            <div className="w-1/3 p-2 mx-auto">
              <div className="flex flex-col px-2 py-3 border border-main mb-2">
                <p className="font-bold text-lg">{sallerName}</p>
                <div className="flex items-center">
                  <MdAlternateEmail />
                  <p>{email}</p>
                </div>
              </div>
              <div className="flex items-center border border-main px-2 py-3 mb-2">
                <div className="flex items-center justify-center bg-gray-300 p-2 rounded-full mr-2">
                  <MdOutlineCall />
                </div>
                <p>{mobile}</p>
              </div>

              <div className="border-main border mt-1">
                <div className="flex px-2 py-3 items-center">
                  <AiFillSafetyCertificate className="mr-2" />
                  <p className="text-lg font-bold">Safety Tips</p>
                </div>
                <div className="p-2">
                  <ul className="list-disc pl-6">
                    <li>Meet in a safe & public place</li>
                    <li>Don’t pay in advance</li>
                  </ul>
                  <div className="text-center">
                    <button className="text-main mt-2">
                      See all safety tips
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pl-16 py-4">
            <div className="flex justify-between w-1/2 items-center">
              <p className="text-2xl text-main font-bold">TK {resalePrice}</p>

              {reportState !== "reported" && (
                <button onClick={() => handleReport(data._id)}>
                  {" "}
                  <div className="flex w-20 justify-between items-center">
                    <MdReport className="text-main text-xl" />{" "}
                    <p className="text-xl">Report</p>
                  </div>
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 w-1/2 gap-4 mt-2">
              <p className="text-gray-500">Original Price: {originalPrice}</p>
              <p className="text-gray-500 capitalize">
                Condition: {conditions}
              </p>
              <p className="text-gray-500">Purchage Date: {useingFrom}</p>
              <div className="flex">
                {salesStatus === "sold" ? (
                  <p className="bg-main w-16 text-center text-white rounded-full h-7 font-bold">
                    {" "}
                    Sold
                  </p>
                ) : (
                  <p className="bg-main w-16 text-center text-white rounded-full h-7 font-bold">
                    Unsold
                  </p>
                )}
              </div>
            </div>
            <p
              className="text-lg font-bold
            mt-1"
            >
              Description: <br />
              <span className="font-normal capitalize">{description}</span>
            </p>
          </div>
          <div className="text-center">
            <label
              onClick={() => setBooking(data)}
              htmlFor="sound-music-modal"
              className="py-2 px-8 bg-main font-bold text-lg text-white rounded-full hover:shadow-xl"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>

      {booking && <BookingModal booking={booking} setBooking={setBooking} />}
      <Toaster />
    </section>
  );
};

export default ViewDetails;
