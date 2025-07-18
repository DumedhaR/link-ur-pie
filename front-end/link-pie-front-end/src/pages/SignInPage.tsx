/* eslint-disable react/react-in-jsx-scope */
import GoogleLoginButton from "../components/SignIn";

export default function SignInPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="bg-gray-100 flex items-center justify-center">
        <img
          src="/g.png"
          alt="Visual"
          className="w-full h-full object-cover"
        />
        {/* <video src="/intro.mp4" autoPlay loop muted className="w-full h-full object-cover" /> */}
      </div>

      <div className="flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-sm text-center">
          <h1 className="text-3xl font-semibold mb-4">Welcome to LinkPi</h1>
          <p className="text-gray-600 mb-6">Sign in or sign up with your Google account to continue</p>
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
}
