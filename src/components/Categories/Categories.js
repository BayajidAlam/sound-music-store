import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  // state
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  // fetch all category
  useEffect(() => {
    fetch("https://sound-music-server.onrender.com/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  // skeleton for use while loading 
  const renderSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="h-36 w-80 relative mx-auto image-container">
          <div className="skeleton h-full w-full bg-gray-100" />
        </div>
      ))}
    </div>
  );

  return (
    <section className="pb-8">
      {loading ? (
        renderSkeleton()
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
          {categories.map((category, i) => (
            <div key={i} className="h-36 w-80 relative mx-auto image-container">
              <Link to={`/category/${category.name}`}>
                <img className="h-full w-full" src={category.picture} alt="" />
                <div className="absolute top-1/2 left-1/3">
                  <p className="text-white text-xl font-bold uppercase">
                    {category.name}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="text-center py-4">
        <button className="uppercase font-bold bg-main text-white px-6 py-2">
          View all
        </button>
      </div>
    </section>
  );
};

export default Categories;
