import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { picture, name, location, originalPrice, useingFrom, _id } = card;

  return (
    <section>
      <div className="w-1/2 mx-auto flex items-center">
        <img className="w-36 h-36" src={picture} alt="" />
        <div className="w-2/3 flex items-center">
          <div className="px-8 space-y-4">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-gray-500 text-lg">{location}</p>
            <div className="flex items-center text-gray-500">
              <p className="mr-8 text-lg">{originalPrice}</p>
              <p className="text-lg">{useingFrom}</p>
            </div>
          </div>
        </div>

        <div className="w-1/3">
          <Link to={`/viewDetails/${_id}`}>
            <button className="px-6 py-1 bg-main text-white font-bold hover:shadow-xl shadow-main">
              View Details
            </button>
          </Link>
        </div>
      </div>

      <div className="divider w-1/2 mx-auto text-gray-500"></div>
    </section>
  );
};

export default Card;
