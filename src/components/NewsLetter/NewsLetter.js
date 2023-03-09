import React from "react";
import CommentSwiper from "./CommentSwiper";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section className="py-8">
      <div className="sm:flex container mx-auto">
        <div className="sm:w-1/2 bg-black py-20">
          <div className="w-4/5 mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold text-white">
              Subscribe to our Newsletter
            </h1>
            <p className="text-white w-1/2 mx-auto">
              Subscribe to our newsletter to get latest news about our products,
              events and sales.
            </p>
            <div className="flex">
              <input
                className="w-full py-2 px-4"
                type="text"
                placeholder="Your email address"
              />
              <button className="py-2 px-4 bg-black text-white font-bold">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 bg-guiter  py-12">
          <CommentSwiper />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
