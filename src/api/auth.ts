import { UserRegistrationRequestData } from "../types/UserRegistrationRequestData";
import api from "./axios";

export const registerUser = async (formData: UserRegistrationRequestData) => {
  const response = await api.post("/user/register", formData);
  return response.data;
};
