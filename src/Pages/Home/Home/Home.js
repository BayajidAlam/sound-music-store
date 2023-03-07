import React from "react";
import Banner from "../../../components/Banner/Banner";
import Brand from "../../../components/Brand/Brand";
import Categories from "../../../components/Categories/Categories";
import ElectricDrum from "../../../components/ElectricDrum/ElectricDrum";
import NewsLetter from "../../../components/NewsLetter/NewsLetter";
import WhatsNew from "../../../components/WhatsNew/WhatsNew";
import WhoWeAre from "../../../components/WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto text-black py-12 placeholder-blue-800">
        <div className="divider text-xl font-bold">Shop by Category</div>
      </div>
      <Categories />
      <ElectricDrum />
      <div className="container mx-auto text-black py-12 placeholder-blue-800">
        <div className="divider text-xl font-bold">Best Sellers</div>
      </div>
      <WhoWeAre />
      <Brand />
      <div className="container mx-auto text-black py-12 placeholder-blue-800">
        <div className="divider text-xl font-bold">What's New</div>
      </div>

      <WhatsNew/>
      <NewsLetter/>
    </div>
  );
};

export default Home;
