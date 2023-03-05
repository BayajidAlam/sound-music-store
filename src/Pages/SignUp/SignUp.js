import React from "react";
import "./SignUp..css";
import loginImg from "../../assets/loginimg.jpg";
import { TbBrandLinktree } from "react-icons/tb";
import { IoLogoGoogle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <section>
      <div
        className="flex items-center
      main-container"
      >
        <div className="w-1/2 bg-main">
          <img className="h-screen w-full" src={loginImg} alt="" />
        </div>
        <div className="w-1/2">
          <div className="flex justify-center items-center">
            <div className="flex flex-col w-full">
              <div className="w-1/8 mx-auto">
                <TbBrandLinktree className="text-3xl" />
              </div>
              <h1 className="text-center text-3xl font-bold">Hello Again!</h1>

              <form onSubmit={handleSubmit(handleSignUp)} className="space-y-3">
                <div className="form-control w-2/3 mx-auto">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <p className="text-main my-1">{errors.name?.message}</p>
                  )}
                </div>

                <div className="form-control w-2/3 mx-auto">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                    })}
                    type="email"
                    placeholder="Type here"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <p className="text-main my-1">{errors.email?.message}</p>
                  )}
                </div>

                <div className="form-control w-2/3 mx-auto">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: "Name is required",
                      minLength: { value: 6, message: 'Password must be 6 character or longer!'}
                    })}
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered"
                  />
                     {errors.password && (
                    <p className="text-main my-1">{errors.password?.message}</p>
                  )}
                </div>

                <div className="form-control w-2/3 mx-auto">
                  <label className="label">
                    <span className="label-text">Choose Role</span>
                  </label>
                  <select
                    {...register("role", {
                      required: "Name is required",
                    })}
                    className="w-full"
                  >
                    <option value="buyer">Buyer</option>
                    <option value="saller">Seller</option>
                  </select>
                </div>

                <div className="flex justify-between items-center w-2/3 mx-auto">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input className="mr-2" type="checkbox" />
                      <span className="label-text">Remember me</span>
                    </label>
                  </div>
                  <button className="font-bold">Forget Password?</button>
                </div>

                <div className="w-2/3 mx-auto">
                  <button className="bg-main text-white w-full py-2 font-bold rounded-md">
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="flex w-2/3 mx-auto items-center my-4 justify-center border p-2 rounded-md">
                <IoLogoGoogle className="text-2xl mr-4" />
                <p>Sign Up with Google</p>
              </div>

              <div className="text-center">
                <p className="text-xl">
                  Already have a account?
                  <Link className="font-bold" to="/v2/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
