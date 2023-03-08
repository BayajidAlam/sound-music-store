import React from "react";
// icons
import { FiFacebook } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { BsTwitch } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <section className="bg-black text-white py-8 mt-12">
      <div className="w-2/3 mx-auto">
        <div className="lg:flex">
          <div className="lg:flex items-center w-1/2">
            <p className="mr-4 font-semibold">Home</p>
            <p className="mr-4 font-semibold">About Us</p>
            <p className="mr-4 font-semibold">Our Services</p>
            <p className="mr-4 font-semibold">Shop</p>
            <p className="mr-4 font-semibold">News</p>
            <p className="mr-4 font-semibold">Contact</p>
          </div>
          <div className="lg:flex items-center lg:w-1/3  w-8 justify-evenly ">
            <div className="bg-gray-400 p-2 hover:bg-main mb-1 md:mb-1 lg:mb-0">
              <FiFacebook />
            </div>
            <div className="bg-gray-400 p-2 hover:bg-main  mb-1 md:mb-1 lg:mb-0">
              <FaTwitter />
            </div>
            <div className="bg-gray-400 p-2 hover:bg-main mb-1 md:mb-1 lg:mb-0">
              <BsTwitch />
            </div>
            <div className="bg-gray-400 p-2 hover:bg-main  mb-1 md:mb-1 lg:mb-0">
              <AiFillInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex items-center w-2/3 mx-auto mt-2">
        <h4 className="mr-1 font-bold">Sound Music Studio</h4>
        <p className="text-gray-300">© 2023 All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
