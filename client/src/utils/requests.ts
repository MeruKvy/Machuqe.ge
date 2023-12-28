import axios, { AxiosError } from "axios";
import { baseAxios } from "./publicAxios";

export interface userObjProps {
  email: string;
  password: string;
  username?: string;
}

export const registerUser = async (userData: userObjProps) => {
  try {
    console.log("eshveba");
    const responce = await baseAxios.post(
      "/auth/register",
      JSON.stringify(userData),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    console.log("Registration successful:", responce.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      console.error(
        "Registration failed with status code:",
        axiosError.response.status
      );
      console.error("Response data:", axiosError.response.data);
    } else if (axiosError.request) {
      console.error("No response received from the server");
    } else {
      console.error("Error setting up the request");
    }
  }
};
