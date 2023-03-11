import React, { useEffect, useState } from "react";
// icon
import { AiFillStar } from "react-icons/ai";

const Featured = () => {
  // state
  const [featured, setFeatured] = useState([]);

  // get all advertised item
  useEffect(() => {
    fetch("https://sound-music-server-bayajidalam.vercel.app/advertised")
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data);
      });
  }, []);

  return (
    <section className="pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-6">
        {featured.map((feature, i) => (
          <div key={i}>
            <img
              className="w-80 h-[350px] m-auto"
              src={feature.picture}
              alt=""
            />
            <div className="w-80 mx-auto">
              <p className="font-bold">{feature.name}</p>
              <div className="flex justify-between">
                <div className="flex items-center w-20 justify-evenly text-yellow-500">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="text-main font-bold">${feature.resalePrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
