import React from "react";
import img from "../../assets/Electric_drum.jpg";

const ElectricDrum = () => {
  return (
    <section className="bg-[#F8F8F8] py-20 mt-4">
      <div className="container mx-auto sm:flex justify-center items-center">
        <img className="sm:w-1/2" src={img} alt="" />
        <div className="sm:w-1/2">
          <div className="w-2/3 mx-auto text-center space-y-8">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-black">
              Electronic Drum <br /> Set Neutral
            </h1>
            <p>
              Design based on input from professional players such as vinnie
              paul, Andey solway and many more
            </p>
            <p>Get Second hand for 40% of new</p>
            <button className="uppercase font-bold py-2 px-6 bg-main text-white">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricDrum;
