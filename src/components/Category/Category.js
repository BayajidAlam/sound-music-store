import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Category = () => {
  const data = useLoaderData();

  // if there is no product in any category 
  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center font-bold text-main text-xl">No Item Found!</p>
      </div>
    );
  }

  return (
    <section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 container mx-auto py-12 ">
        {data.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </div>
      a
    </section>
  );
};

export default Category;
