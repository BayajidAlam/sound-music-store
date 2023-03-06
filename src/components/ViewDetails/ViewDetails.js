import React from "react";
import { useLoaderData } from "react-router-dom";
import { MdOutlineCall } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";

const ViewDetails = () => {
  // load data from loader
  const data = useLoaderData();
  console.log(data);
  const { name, postedOn, location, picture, sallerName, email, mobile } = data;
  return (
    <section>
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
                <p>{email}</p>
              </div>
              <div className="flex items-center border border-main px-2 py-3 mb-2">
                <div className="flex items-center justify-center bg-gray-300 p-2 rounded-full mr-2">
                  <MdOutlineCall />
                </div>
                <p>{mobile}</p>
              </div>

              <div className="border-main border mt-1">
                <div className="flex px-2 py-3 items-center">
                  <AiFillSafetyCertificate className="mr-2"/>
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
      </div>
    </section>
  );
};

export default ViewDetails;
