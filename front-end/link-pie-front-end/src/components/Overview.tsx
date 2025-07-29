import { FaArrowDown } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Button } from "./ui/button";

export default function Overview() {
  return (
    <div className="text-white pt-26 pb-28 px-6 md:px-20 relative overflow-hidden">

      {/* Overview Section 1 */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[3rem] sm:text-[4rem] md:text-6xl font-semibold leading-none">
          <span className="block"> One platform. Endless ways</span>
          <span className="block">to share your creativity.</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base pt-6">
          Link your social accounts, host downloadable files, and showcase your content — all in one place, your way.
        </p>

       {/* Account Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 justify-items-center items-start">
          <CardSocials/>
          <CardProfile/>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center my-14">
        <FaArrowDown className="text-gray-500 animate-bounce" size={20} />
      </div>

      {/* Overview Section 2 */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold">Share your content</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["Video", "Resources", "Recourses", "Podcast"].map((item, idx) => (
            <div key={idx} className="bg-[#1c1c1c] px-6 py-3 rounded-lg text-sm border border-[#2c2c2c]">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center my-12">
        <FaArrowDown className="text-gray-500 animate-bounce" size={20} />
      </div>

      {/* Overview Section 3 */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold">Sell digital products</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <ProductCard title="E-book" price="$9" />
          <ProductCard title="Album.zip" price="$5" />
          <ProductCard title="Photo Pack" price="$15" />
        </div>
      </div>
    </div>
  );
}

const CardSocials = () => (
  <Card className="w-full max-w-sm bg-[#1a1a1a] rounded-lg text-left shadow-md border border-[#2a2a2a]">
      <CardContent>
      <div className="flex flex-col gap-1 text-white text-2xl">
      <div className="flex items-center gap-2 cursor-pointer bg-[#1c1c1c] px-6 py-3 rounded-lg text-sm border border-[#2c2c2c]">
        <FaFacebookF className="text-xl text-blue-500" />
        <span className="text-sm">Facebook</span>
      </div>

      <div className="flex items-center gap-2 cursor-pointer bg-[#1c1c1c] px-6 py-3 rounded-lg text-sm border border-[#2c2c2c]">
        <FaInstagram className="text-xl text-pink-500" />
        <span className="text-sm">Instagram</span>
      </div>

      <div className="flex items-center gap-2 cursor-pointer bg-[#1c1c1c] px-6 py-3 rounded-lg text-sm border border-[#2c2c2c]">
        <FaTiktok className="text-xl text-black" />
        <span className="text-sm">TikTok</span>
      </div>

      <div className="flex items-center gap-2 cursor-pointer bg-[#1c1c1c] px-6 py-3 rounded-lg text-sm border border-[#2c2c2c]">
        <FaYoutube className="text-xl text-red-500" />
        <span className="text-sm">YouTube</span>
      </div>
    </div>
      </CardContent>
    </Card>
);

const CardProfile = () => (
  <Card className="w-full max-w-sm bg-[#1a1a1a] rounded-lg text-center shadow-md border border-[#2a2a2a]">
    <CardContent className="flex flex-col items-center w-full">
      <Avatar className="w-20 h-20 mb-3">
        <AvatarImage
          className="object-cover"
          src="/img1.jpg"
          alt="Jane Doe"
        />
        <AvatarFallback>MS</AvatarFallback>
      </Avatar>
      <div className="text-white mb-4">
        <h2 className="text-lg font-medium">Morty Smith</h2>
        <p className="text-sm text-gray-400">Creator</p>
      </div>
      <Button
        variant="outline"
        className="bg-[#2a2a2a] border-none text-white w-full flex justify-center py-5 hover:bg-[#2a2a2a] hover:text-white"
      >
        Edit
      </Button>
        </CardContent>
  </Card>
);

const ProductCard = ({ title, price }) => (
  <div className="bg-[#1a1a1a] px-6 py-4 rounded-lg w-40 text-center border border-[#2a2a2a]">
    <h4 className="text-white text-sm font-semibold">{title}</h4>
    <p className="text-blue-400 mt-2 font-bold">{price}</p>
  </div>
);
