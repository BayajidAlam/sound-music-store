import React from "react";
import Banner from "../../../components/Banner/Banner";
import BestSelles from "../../../components/BestSelles/BestSelles";
import Brand from "../../../components/Brand/Brand";
import CardCollection from "../../../components/CardCollection/CardCollection";
import Categories from "../../../components/Categories/Categories";
import ElectricDrum from "../../../components/ElectricDrum/ElectricDrum";
import Featured from "../../../components/Featured/Featured";
import NewsLetter from "../../../components/NewsLetter/NewsLetter";
import Violins from "../../../components/Violins/Violins";
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
        <div className="divider text-xl font-bold">Accesories</div>
      </div>

      <BestSelles/>

      <WhoWeAre />
      <Brand />


      <div className="container mx-auto text-black py-12 placeholder-blue-800">
        <div className="divider text-xl font-bold">Featured</div>
      </div>
      <Featured/>

      <CardCollection/>
      <div className="container mx-auto text-black py-12 placeholder-blue-800">
        <div className="divider text-xl font-bold">What's New</div>
      </div>

      <WhatsNew/>
      <Violins/>
      <NewsLetter/>
    </div>
  );
};

export default Home;
