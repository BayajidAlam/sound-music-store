import React from "react";

const BannerItem = ({slide}) => {

  const { image, prev,next, id } = slide


  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div style={{ backgroundImage: `url(${image})` }} className="img-gradient ">
        
      </div>
      <div className="absolute flex justify-between transform  left-5 right-5 top-1/3">
        <div className="w-1/2 mx-auto space-y-6">
          <p className="text-6xl text-white font-bold text-center">
            Musical Equipment <br /> & Accessories
          </p>
          <p className="text-white mx-auto text-xl w-2/3">
            Here you'll find a huge range of secondhand musical equipment from
            the biggest world famous brands
          </p>
          <div className="flex items-center justify-center">
            <button className="uppercase bg-main text-white py-2 px-6 mr-4 font-bold">
              Shop now
            </button>
            <button className="uppercase bg-black text-white py-2 px-6 font-bold">
              View items
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`}  className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
