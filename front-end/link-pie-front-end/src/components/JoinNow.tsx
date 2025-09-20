import { FaUserAstronaut } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const JoinNow = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signin");
  };

  return (
    <div
      className="relative w-full min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: 'url("/artist4.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute z-10 inset-0 bg-black/20" />

      <div className="relative z-20 flex flex-col justify-center items-center bg-gradient-to-br from-white/90 to-white/60 text-black/90 rounded-3xl py-12 px-12 shadow-2xl backdrop-blur-md max-w-sm w-full">
        <FaUserAstronaut className="w-12 h-12 mb-4" />
        <h1 className="text-[27px] font-semibold mb-8 text-center">
          Start Your Journey <br />
          As
        </h1>
        <button
          className="w-full bg-gradient-to-br hover:from-blue-600 from-blue-700 to-blue-400 text-white font-semibold py-3 rounded-full shadow-lg mb-4 
          cursor-pointer transition-colors duration-200 ease-in-outsss"
          onClick={handleGetStarted}
        >
          Creator
        </button>
        <button
          className="w-full bg-gradient-to-br hover:from-pink-500 from-pink-600 to-red-400 text-white font-semibold py-3 rounded-full shadow-lg mb-5 
          cursor-pointer transition-colors duration-200 ease-in-out"
          onClick={handleGetStarted}
        >
          Fan
        </button>
        <p className="text-gray-600 text-sm text-center">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default JoinNow;
