import { FaUserAstronaut } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const JoinNow = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signin");
  };

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center text-center text-white"
      style={{
        backgroundImage: 'url("/fan2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center bg-white/94 text-black rounded-4xl p-14 shadow-sm">
        <FaUserAstronaut className="w-12 h-12 mb-4" />
        <h1 className="text-[27px] font-semibold mb-8">
          Start Your Journey <br />
          As
        </h1>
        <button
          className="w-full bg-gradient-to-br from-blue-600 to-blue-400 text-white font-semibold py-3 rounded-full shadow-md cursor-pointer mb-3"
          onClick={handleGetStarted}
        >
          Creator
        </button>
        <button
          className="w-full bg-gradient-to-br from-pink-600 to-red-400 text-white font-semibold py-3 rounded-full shadow-md cursor-pointer"
          onClick={handleGetStarted}
        >
          Fan
        </button>
        <p className="mt-4 text-gray-600">
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
