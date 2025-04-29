import React from "react";
import { Link } from "react-router-dom";

export const SignupPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="flex flex-col">
        <div>
          <div className="font-bold text-xl mb-4">Create an Account</div>
        </div>
        <form className="">
          <div className="grid grid-cols-2 gap-x-6">
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-black font-semibold text-sm">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="border border-black rounded-md p-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-black font-semibold text-sm">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="border border-black rounded-md p-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6">
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-black font-semibold text-sm">Email</label>
              <input
                type="text"
                name="email"
                className="border border-black rounded-md p-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 mb-4">
              <label className="text-black font-semibold text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                className="border border-black rounded-md p-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-black font-semibold text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="border border-black rounded-md p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-1text-black font-semibold text-sm">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="border border-black rounded-md p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-center mb-4">
            <label className="text-black font-semibold text-sm mb-2">
              Are you an agent?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isAgent"
                  value="yes"
                  className="border-black"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isAgent"
                  value="no"
                  className="border-black"
                />
                No
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#152F3F] text-white font-semibold py-3 px-6 rounded-md w-full hover:bg-[#1b3a4d] transition-colors mb-1"
          >
            Create Account
          </button>
        </form>
        <div className="text-end text-sm">
          <span>Already have an account? </span>
          <Link to="/login" className="text-blue-500 underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};
