import React from "react";
import img1 from "../../assets/keyboard.jpg";
import img2 from "../../assets/hat.jpg";
import img3 from "../../assets/listenter.jpg";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const WhatsNew = () => {
  return (
    <section className="pb-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/blogs">
          <div className="flex">
            <img className="w-1/2 h-52 mr-2" src={img1} alt="" />
            <div className="w-1/2">
              <div className="border-t-2 border-main">
                <div className="p-2 space-y-2">
                  <h1
                    className="font-bold text-black    
                  "
                  >
                    Marshall Woburn Bluetooth Speaker
                  </h1>
                  <p>July 25,2023</p>
                  <p>
                    By <span className="font-bold">Jack Black</span>
                  </p>
                  <div>
                    <p className="flex">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                      voluptatem accusa...
                      <span className="bg-main w-4 h-8 flex justify-center items-center text-white rounded-full">
                        <AiOutlineRight />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/blogs">
          <div className="flex">
            <img className="w-1/2 h-52 mr-2" src={img2} alt="" />
            <div className="w-1/2">
              <div className="border-t-2 border-main">
                <div className="p-2">
                  <h1
                    className="font-bold text-black    
                  "
                  >
                    Marshall Woburn Bluetooth Speaker
                  </h1>
                  <p>July 25,2023</p>
                  <p>
                    By <span className="font-bold">Jack Black</span>
                  </p>
                  <div>
                    <p className="flex">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                      voluptatem accusa...
                      <span className="bg-main w-4 h-8 flex justify-center items-center text-white rounded-full">
                        <AiOutlineRight />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link to='/blogs'>
          <div className="flex">
            <img className="w-1/2 h-52 mr-2" src={img3} alt="" />
            <div className="w-1/2">
              <div className="border-t-2 border-main">
                <div className="p-2">
                  <h1
                    className="font-bold text-black    
                  "
                  >
                    Marshall Woburn Bluetooth Speaker
                  </h1>
                  <p>July 25,2023</p>
                  <p>
                    By <span className="font-bold">Jack Black</span>
                  </p>
                  <div>
                    <p className="flex">
                      Sed ut perspiciatis, unde omnis iste natus error sit
                      voluptatem accusa...
                      <span className="bg-main w-4 h-8 flex justify-center items-center text-white rounded-full">
                        <AiOutlineRight />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default WhatsNew;
