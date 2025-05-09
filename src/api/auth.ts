import { UserLoginRequestData } from "../types/UserLoginRequestData";
import { UserRegistrationRequestData } from "../types/UserRegistrationRequestData";
import api from "./axios";

export const registerUser = async (formData: UserRegistrationRequestData) => {
  const response = await api.post("/auth/register", formData);
  return response.data;
};
export const loginUser = async (formData: UserLoginRequestData) => {
  const response = await api.post("/auth/login", formData);
  return response.data;
};
export const userEmailExists = async (userEmail: String) => {
  const response = await api.get("/user/email", {
    params: { userEmail },
  });
  return response.data;
};
export const userPhoneNumberExists = async (userPhoneNumber: String) => {
  const response = await api.get("/user/phonenumber", {
    params: { userPhoneNumber },
  });
  return response.data;
};
