export interface GoogleUser {
  name: string;
  email: string;
  picture: string;
  sub: string; // Google user ID
}

export const allowedRoles = ["creator", "fan"];
