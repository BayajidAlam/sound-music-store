import React from "react";
import logo from '../../assets/karim-manjra-cW3nDFVpi10-unsplash.jpg';

const Banner = () => {
  return (
    <section>
      <div className="carousel container mx-auto mt-8 h-[550px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={logo}
            className="w-full"
          alt=""/>
          <div className="absolute flex justify-between transform  left-5 right-5 top-1/3">
              <div className="w-1/2 mx-auto space-y-6">
                <p className="text-6xl text-white font-bold text-center">Musical Equipment <br /> & Accessories</p>
                <p className="text-white mx-auto text-xl w-2/3">Here you'll find a huge range of secondhand musical equipment from the biggest world famous brands</p>
                <div className="flex items-center justify-center">
                <button className='uppercase bg-main text-white py-2 px-6 mr-4 font-bold'>Shop now</button>
                <button className='uppercase bg-black text-white py-2 px-6 font-bold'>View items</button>
                </div>
              </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
