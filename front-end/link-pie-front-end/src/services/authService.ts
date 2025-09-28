import apiClient from "./apiClient";
import { GoogleUser } from "@/data/authData";

export const googleSignUpOrIn = async (userAccData: GoogleUser) => {
  const res = await apiClient.post("/api/v1/users/login", userAccData);
  return res;
};
