import { UserRegistrationRequestData } from "../types/UserRegistrationRequestData";

export function trimUserRegistrationFormData(
  data: UserRegistrationRequestData
): UserRegistrationRequestData {
  return {
    ...data,
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email: data.email.trim(),
    phoneNumber: data.phoneNumber.trim(),
  };
}