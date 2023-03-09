import React, { useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // get all product for make product name option
  const { data: prodcuts = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  // get user role
  const { data: profileUser } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const sallerName = form.sellerName.value;
    const originalPrice = form.orgPrice.value;
    const resalePrice = form.resPrice.value;
    const conditions = form.condition.value;
    const catName = form.cateName.value;
    const mobile = form.mobile.value;
    const location = form.location.value;
    const description = form.description.value;
    const useingFrom = form.purchageYear.value;
    const postedOn = new Date();
    const image = form.image.files[0];
    const email = user?.email;
    const reportState = "not reported";

    // host img to imgbb
    const formData = new FormData();
    formData.append("image", image);

    const url =
      "https://api.imgbb.com/1/upload?expiration=600&key=3bb493647a4888b5907ecc8363177833";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // let's make an object of our total product details
        const product = {
          picture: imgData.data.url,
          resalePrice,
          originalPrice,
          name,
          location,
          useingFrom,
          sallerName,
          postedOn,
          catName,
          mobile,
          conditions,
          description,
          email,
          salesStatus: "unsold",
          reportState,
        };

        // again check seller
        if (profileUser.role === "seller") {
          // send to db
          fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Product Added Successfully!");
                form.reset();
                navigate("/v3/dashboard/myProduct");
              }
            });
        }
      });
  };

  return (
    <div>
      <div className="hero flex float-left">
        <div className="hero-content flex p-0 w-full">
          <div className="card  lg:w-full bg-slate-100 rounded-none">
            <form onSubmit={handleSubmit} className="card-body">
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
                      <option key={i} value={product.name}>
                        {product.name}
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
                <button
                  type="submit"
                  className="btn py-1 px-12 bg-main text-white font-bold border-none outline-none rounded-full text-lg hover:bg-black"
                >
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
