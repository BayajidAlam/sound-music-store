import React from "react";
import img from "../../assets/violins.jpg";

const Violins = () => {
  return (
    <section className="sm:py-8">
      <div className="sm:flex items-center justify-between container mx-auto">
        <img className="h-[490px] w-2/3 mb-4 md:mb-0" src={img} alt="" />
        <iframe
          className="sm:w-[490px] w-1/3 sm:h-[490px] h-60"
          src="https://www.youtube.com/embed/OXzGtZX-ico"
          title="YouTube video player"
        ></iframe>
      </div>
    </section>
  );
};

export default Violins;
