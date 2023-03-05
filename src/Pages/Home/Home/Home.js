import React from "react";
import Banner from "../../../components/Banner/Banner";
import Categories from "../../../components/Categories/Categories";


const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto text-black py-12 placeholder-blue-800">
        <div class="divider text-xl font-bold">Shop by Category</div>
      </div>
      <Categories/>
    </div>
  );
};

export default Home;
