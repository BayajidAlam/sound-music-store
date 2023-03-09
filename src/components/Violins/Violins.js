import React from "react";
import img from "../../assets/violins.jpg";

const Violins = () => {
  return (
    <section className="sm:py-16">
      <div className="sm:flex items-center justify-between container mx-auto">
        <img className="h-[450px] w-2/3 mb-4 md:mb-0" src={img} alt="" />
        <iframe
          className="sm:w-[450px] w-1/3 sm:h-[450px] h-60"
          src="https://www.youtube.com/embed/OXzGtZX-ico"
          title="YouTube video player"
        ></iframe>
      </div>
    </section>
  );
};

export default Violins;
