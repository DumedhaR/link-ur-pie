import GoogleLoginButton from "../components/SignIn";

export default function SignInPage() {
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="bg-gray-100 h-screen">
        <img
          src="/artist3.jpg"
          alt="Visual"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center items-center p-6 h-screen">
        <div className="w-full max-w-sm text-center">
          <img
            src="/logo_trnsp.png"
            alt="LinkPi Logo"
            className="mx-auto mb-2 w-20 h-20 object-contain"
          />
          <h1 className="text-3xl font-semibold mb-4">Welcome to LinkPi</h1>
          <p className="text-gray-400 mb-4">Login or Signup to continue</p>
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
}
