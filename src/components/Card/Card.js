import React from "react";
import { Link } from "react-router-dom";
import { HiLocationMarker } from 'react-icons/hi';

const Card = ({ card }) => {
  const { picture, name, location, originalPrice, useingFrom, _id,conditions } = card;
console.log(card);
  return (
    <section>
      <div className="lg:w-[400px] md:w-[360px] mx-auto flex flex-col shadow-xl">
        <div className="relative">
        <img className="lg:w-full md:w-[360px] h-60" src={picture} alt="" />
        <div className="absolute top-0 left-0 -translate-x-6 -translate-y-6">
            <p className="text-white bg-main px-4 py-1 rounded-full font-bold">{conditions}</p>
        </div>
        </div>
        <div className="px-4 py-4">
         <p className="text-xl font-bold">{name}</p>
          <div className="flex items-center justify-between">
            <p className="my-4 text-lg">Price: {originalPrice}</p>
            <div className="flex items-center">
              <HiLocationMarker/>
              <p className="text-lg">{location}</p>
            </div>
          </div>
        </div>

        <div className="text-center pb-6">
          <Link to={`/viewDetails/${_id}`}>
            <button className="px-6 py-1 bg-main text-white font-bold hover:shadow-xl shadow-main">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
