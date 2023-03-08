import React from "react";
import img1 from "../../assets/karim-manjra-cW3nDFVpi10-unsplash.jpg";
import img2  from "../../assets/Germany.jpg";
import img3  from "../../assets/music_show.jpg";
import img4  from "../../assets/banner.jpg";

import "./Banner.css";
import BannerItem from "./BannerItem";

const bannerData = [
  {
      image: img1,
      prev: 4,
      id: 1,
      next: 2
  },
  {
      image: img2,
      prev: 1,
      id: 2,
      next: 3
  },
  {
      image: img3,
      prev: 2,
      id: 3,
      next: 4
  },
  {
      image: img4,
      prev: 3,
      id: 4,
      next: 1
  },
  
]

const Banner = () => {
  return (
    <section>
      <div className="carousel container mx-auto mt-8 h-[550px]">
     
        {
          bannerData.map(slide=><BannerItem
          key={slide.id}
          slide={slide}
          ></BannerItem>)
        }
      </div>
    </section>
  );
};

export default Banner;
