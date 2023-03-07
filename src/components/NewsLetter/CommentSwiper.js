import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { RiDoubleQuotesL } from "react-icons/ri";

// images
import img1 from "../../assets/cmnt1.jpg";
import img2 from "../../assets/cmnt2.jpg";
import img3 from "../../assets/cmnt3.jpg";

const CommentSwiper = () => {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="w-4/5 mx-auto">
            <div className="w-3/4 mx-auto text-center">
              <RiDoubleQuotesL className="text-main text-xl" />
              <p className="text-white">
                "I love this website. It has a great selection of innovative
                products. I will be a returning customer for ever! Especially
                since the shipping is fast! Very impressed with prices and free
                shipping. Thank you!"
              </p>
            </div>

            <div className="flex justify-center w-2/5 items-center mx-auto">
              <img className="w-20 h-20 rounded-full mr-2" src={img1} alt="" />
              <div>
                <p className="font-bold uppercase text-white">Kelly webb</p>
                <p className="text-gray-200">Singer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-4/5 mx-auto">
            <div className="w-3/4 mx-auto text-center">
              <RiDoubleQuotesL className="text-main text-xl" />
              <p className="text-white">
              It’s been a while since I used this last and a lot has changed. I only had to enter some very basic information and was immediately contacted to have my query resolved. Excellent high touch customer experience.
              </p>
            </div>

            <div className="flex justify-center w-2/5 items-center mx-auto">
              <img className="w-20 h-20 rounded-full mr-2" src={img2} alt="" />
              <div>
                <p className="font-bold uppercase text-white">Sarah Jefferson</p>
                <p className="text-gray-200">Singer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-4/5 mx-auto">
            <div className="w-3/4 mx-auto text-center">
              <RiDoubleQuotesL className="text-main text-xl" />
              <p className="text-white">
                "Found this place yesterday. Ordered some instruments and was very pleased with the quick ship time and great communication. This was my very first time to purchase instruments online instead of in a physical store."
              </p>
            </div>

            <div className="flex justify-center w-2/5 items-center mx-auto">
              <img className="w-20 h-20 rounded-full mr-2" src={img3} alt="" />
              <div>
                <p className="font-bold uppercase text-white">Victor vega</p>
                <p className="text-gray-200">Singer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CommentSwiper;
