import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Category = () => {
  const data = useLoaderData();

  return (
    <section>
      <div className="grid grid-cols-1 container mx-auto py-8">
        {data.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Category;
