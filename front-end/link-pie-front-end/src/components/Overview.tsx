import { useState } from "react";
import { FaArrowDown, FaHeart } from "react-icons/fa";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Button } from "./ui/button";
import { FiPlay } from "react-icons/fi";

export default function Overview() {
  return (
    <div className="text-white pt-26 pb-28 px-6 md:px-20 relative overflow-hidden">

      {/* Overview Section 1 */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[3rem] sm:text-[4rem] md:text-6xl font-semibold leading-none">
          <span className="block"> One platform. Endless ways</span>
          <span className="block">to share your creativity.</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base pt-6">
          Link your social accounts, host downloadable files, and showcase your content — all in one place, your way.
        </p>

       {/* Account Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-12 justify-items-center items-start">
          <CardProfile />
          <CardSocials />
          <CardMedia />
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
      <Avatar className="w-20 h-20 mb-3 ring-3 ring-[#2a2a2a]">
        <AvatarImage
          className="object-cover"
          src="/morty.png"
          alt="Morty Smith"
        />
        <AvatarFallback>MS</AvatarFallback>
      </Avatar>
      <div className="text-white mb-4">
        <h2 className="text-lg font-medium">Morty Smith</h2>
        <p className="text-sm text-gray-400">Musician</p>
      </div>
      <Button
        variant="outline"
        className="bg-[#2a2a2a] border-none text-white w-full flex shadow-md justify-center cursor-pointer py-5 hover:bg-[#2a2a2a] hover:text-white"
      >
        Edit
      </Button>
        </CardContent>
  </Card>
);

const CardMedia = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(204);

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setLikes(perv => perv + (newLiked ? 1 : -1));
  };
  return (
    <Card className="bg-[#1a1a1a] rounded-lg text-left shadow-md border border-[#2a2a2a] md:col-span-2">
      <CardContent className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden">
            <Avatar className="w-12 h-12 absolute top-4 left-4 z-10 ring-2 ring-[#2a2a2a]">
            <AvatarImage
              className="object-cover"
              src="/morty.png"
              alt="Morty Smith"
            />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <button className="absolute bottom-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
            <FiPlay className="w-6 h-6" />
          </button>
          <img
          src='/video1.jpg'
          alt='tumb'
          className="w-full h-full object-cover"
          /> 
        </div>
        <div className="flex flex-col mt-3">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-md font-medium text-white">Midnight Run (80s Mix)</h2>
              <p className="text-sm text-gray-400">Morty Smith</p>
              <div className="flex flex-row text-sm text-gray-400 items-center">
                <span>268 views</span>
                <span className="mx-1 text-xs">•</span>
                <span>4 comments</span>
                <span className="mx-1 text-xs">•</span>
                <span>1 hour ago</span>
              </div>
            </div>
            <Button 
              className={`flex items-center cursor-pointer shadow-md gap-1 bg-[#2a2a2a] rounded-full hover:bg-[#2a2a2a] transition
              ${liked ? "text-pink-500" : "text-white hover:text-gray-400"}` }
              onClick={toggleLike}>
              <FaHeart className="w-4 h-4 " />
              <span className="text-sm">{likes}</span>
            </Button>
          </div>
          <div className="text-white text-sm mt-2">
            <p>Just finished this track inspired by synthwave and the feeling of drifting through time, 
              let me know if you feel the same.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

} 
const ProductCard = ({ title, price }) => (
  <div className="bg-[#1a1a1a] px-6 py-4 rounded-lg w-40 text-center border border-[#2a2a2a]">
    <h4 className="text-white text-sm font-semibold">{title}</h4>
    <p className="text-blue-400 mt-2 font-bold">{price}</p>
  </div>
);
