import GoogleLoginButton from "../components/GoogleSignIn";
import { useParams } from "react-router-dom";
import { allowedRoles } from "@/data/authData";

export default function SignInPage() {
  const { role } = useParams<{ role: string }>();

  if (!role || !allowedRoles.includes(role)) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Oops! Page not found.</p>
      </div>
    );
  }

  return (
    <div className="h-screen grid grid-cols-2">
      <div className="bg-gray-100 h-screen">
        <img
          src="/artist3.jpg"
          alt="Visual"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-full max-w-sm text-center px-6">
          <img
            src="/logo_trnsp.png"
            alt="LinkPi Logo"
            className="mx-auto mb-2 w-20 h-20 object-contain"
          />
          <h1 className="text-3xl font-semibold mb-4">Welcome to LinkPi</h1>
          <p className="text-gray-400 mb-4">Login or Signup to continue</p>
          <GoogleLoginButton role={role} />
        </div>
      </div>
    </div>
  );
}
