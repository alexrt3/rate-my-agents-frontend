import { useState } from "react";
import { registerUser } from "../api/auth";

interface UserRegistrationRequestData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  isAgent: boolean;
}

export const UserRegistrationForm: React.FC = () => {
  const [userRegistrationForm, setUserRegistrationForm] =
    useState<UserRegistrationRequestData>({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      isAgent: false,
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserRegistrationForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await registerUser(userRegistrationForm);
      console.log("User registered successfully:", data);
    } catch {
        console.error("Error registering user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-x-6">
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-black text-start font-semibold text-sm">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={userRegistrationForm.firstName}
            onChange={handleChange}
            className="border border-black rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-black text-start font-semibold text-sm">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={userRegistrationForm.lastName}
            onChange={handleChange}
            className="border border-black rounded-md p-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-6">
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-black text-start font-semibold text-sm">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={userRegistrationForm.email}
            onChange={handleChange}
            className="border border-black rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-black text-start font-semibold text-sm">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={userRegistrationForm.phoneNumber}
            onChange={handleChange}
            className="border border-black rounded-md p-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-black text-start font-semibold text-sm">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={userRegistrationForm.password}
          onChange={handleChange}
          className="border border-black rounded-md p-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-black text-start font-semibold text-sm">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={userRegistrationForm.confirmPassword}
          onChange={handleChange}
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
              checked={userRegistrationForm.isAgent === true}
              onChange={() =>
                setUserRegistrationForm((prev) => ({
                  ...prev,
                  isAgent: true,
                }))
              }
              className="border-black"
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isAgent"
              value="no"
              checked={userRegistrationForm.isAgent === false}
              onChange={() =>
                setUserRegistrationForm((prev) => ({
                  ...prev,
                  isAgent: false,
                }))
              }
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
  );
};
