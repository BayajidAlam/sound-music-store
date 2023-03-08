import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Category = () => {
  const data = useLoaderData();

  return (
    <section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 container mx-auto py-8 h-screen">
        {data.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Category;
