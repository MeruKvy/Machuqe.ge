import  { AxiosError } from "axios";
import { baseAxios } from "./publicAxios";
import { FormInstance } from 'antd/lib/form';

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

export const logInUser = async (userData: userObjProps, form: FormInstance) => {
  try {
    const response = await baseAxios.post(
      "/auth/login",
      JSON.stringify(userData),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    if (response.data && response.data.email) {
      console.log("Login successful:", response.data);
      window.location.href = "/"; 
    } else {
      console.error("Unexpected response format");
    }
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const status = axiosError.response.status;

      switch (status) {
        case 400:
          form.setFields([
            { name: 'email', errors: ['Invalid email or password'] },
            { name: 'password', errors: ['Invalid email or password'] },
          ]);
          break;
        case 403:
          form.setFields([
            { name: 'password', errors: ['Incorrect password'] },
          ]);
          break;
        default:
          console.error("Login failed with status code:", status);
      }
    } else if (axiosError.request) {
      console.error("No response received from the server");
    } else {
      console.error("Error setting up the request");
    }
  }
};