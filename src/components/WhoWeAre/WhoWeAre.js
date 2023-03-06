import React from "react";
import whoWeAre from "../../assets/weAreSound.jpg";

const WhoWeAre = () => {
  return (
    <section>
      <div className="sm:flex  sm:w-2/3 container justify-between mx-auto my-8">
        <img className="sm:w-1/2 h-80" src={whoWeAre} alt="" />
        <div className="sm:w-1/2 ml-4 space-y-6 p-4 lg:p-0">
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
