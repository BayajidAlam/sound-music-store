import { async } from "@firebase/util";
import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { useQuery } from "react-query";
import { AuthContext } from "../../context/AuthProvider";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);

  // get all product for make product name option 
  const { data: prodcuts = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async()=>{
      const res = await fetch('http://localhost:5000/categories')
      const data = await res.json()
      return data;
    }
  })

  return (
    <div>
      <div className="hero flex float-left">
        <div className="hero-content flex p-0 w-full">
          <div className="card  lg:w-full bg-slate-100 rounded-none">
            <form className="card-body">
              <div className="flex items-center justify-between">
                <div className="form-control w-[48%]">
                  <label className="label">
                    <span className="label-text text-base">Title</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Product Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control w-[48%]">
                  <label className="label">
                    <span className="label-text text-base">Seller Name</span>
                  </label>
                  <input
                    type="text"
                    name="sellerName"
                    placeholder="Enter your name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="form-control w-[48%]">
                  <label className="label">
                    <span className="label-text text-base">Seller Email</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered"
                    defaultValue={user?.email}
                    disabled
                  />
                </div>

                <div className="form-control w-[48%]">
                  <label className="label">
                    <span className="label-text text-base">Seller Mobile</span>
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    placeholder="Enter your Mobile number"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="form-control w-[48%]">
                  <label className="label">
                    <span className="label-text text-base">Original Price</span>
                  </label>
                  <input
                    type="number"
                    name="orgPrice"
                    placeholder="Enter original price"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control  w-[48%]">
                  <label className="label">
                    <span className="label-text text-base">Resale Price</span>
                  </label>
                  <input
                    type="number"
                    name="resPrice"
                    placeholder="Enter price"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="form-control w-[48%]">
                  <label className="label">
                    <span className="label-text text-base ">Condition</span>
                  </label>
                  <select
                    name="condition"
                    className="select select-bordered"
                    required
                  >
                    <option defaultValue="excellent" value="excellent">
                      Excellent
                    </option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                  </select>
                </div>

                <div className="form-control  w-[48%]">
                  <label className="label">
                    <span className="label-text text-base">Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter your location"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="form-control w-[48%]">
                  <label className="label">
                    <span className="label-text text-base ">
                      Product Category
                    </span>
                  </label>
                  <select
                    className="p-3 rounded-lg shadow border-base-200"
                    name="cateName"
                    required
                  >
                    {prodcuts.map((product, i) => (
                    <option key={i} value={product.catName}>
                      {product.catName}
                    </option>
                  ))}
                  </select>
                </div>

                <div className="form-control w-[48%]">
                  <label className="label">
                    <span className="label-text text-base">
                      Year of purchage
                    </span>
                  </label>
                  <input
                    type="date"
                    name="purchageYear"
                    placeholder="Enter your location"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Picture</span>
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="file-input w-full h-12"
                  accept="image/*"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base">Description</span>
                </label>
                <textarea
                  name="description"
                  className="w-full rounded-lg h-20 p-2"
                  placeholder="Description..."
                  required
                ></textarea>
              </div>

              <div className="text-center mt-6">
                <button type="submit" className="btn py-1 px-12 bg-main text-white font-bold border-none outline-none rounded-full text-lg">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default AddAProduct;
