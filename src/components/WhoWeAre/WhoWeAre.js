import React from "react";
import whoWeAre from "../../assets/weAreSound.jpg";

const WhoWeAre = () => {
  return (
    <section className="pt-4">
      <div className="sm:flex  lg:w-3/4 container justify-between mx-auto mb-16 mt-8 items-center">
        <img className="md:w-1/2 w-full  h-96 lg:mr-4" src={whoWeAre} alt="" />
        <div className="md:w-1/2 w-full  ml-4 space-y-8 p-4 lg:p-0">
          <div>
            <h1 className="text-2xl font-bold mb-2">Hello, We are SOUND.</h1>
            <hr className="text-black border-2 w-2/4" />
          </div>
          <p>
            Duis aute irure dolor in reprehenderit luptate velit esse cillum
            dolore eu fugiat nulla paritur. Excepteur sint occaecat cupidatat
            non prent, sunt in culpa qui officia deseunt mollit anim id est
            laborum. Sed ut perspiciatis undemnis iste natus error uptatem
            accusantium doloremque laudantiu quae ab illo inventore veritatis et
            quasi archite dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni undemnis iste natus error uptatem .
          </p>

          <button className="uppercase text-sm py-2 px-6 text-white bg-main">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
