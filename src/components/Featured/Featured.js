import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Featured = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://sound-music-server.onrender.com/advertised")
      .then((res) => res.json())
      .then((data) => {
        setFeatured(data);
        setLoading(false);
      });
  }, []);

    // skeleton for use while loading 
    const renderSkeleton = () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-80 h-[350px] relative mx-auto image-container">
            <div className="skeleton h-full w-full bg-gray-100" />
          </div>
        ))}
      </div>
    );

  return (
    <section className="pb-20">
      {loading ? (
        renderSkeleton()
      ) : (
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
      )}
    </section>
  );
};

export default Featured;
