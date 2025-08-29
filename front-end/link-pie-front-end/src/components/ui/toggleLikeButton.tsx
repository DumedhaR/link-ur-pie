import { useState } from "react";
import { Button } from "./button";
import { FaHeart } from "react-icons/fa";
import { getRandomBetween } from "@/utils/mathUtils";
const ToggleLikeButton = () => {
  const [likes, setLikes] = useState(getRandomBetween(50, 200));
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setLikes((prev) => prev + (newLiked ? 1 : -1));
  };

  return (
    <div className="flex gap-0.5">
      <Button
        className={`flex items-center cursor-pointer shadow-md bg-[#2a2a2a] rounded-l-full hover:bg-[#2a2a2a] transition
              ${liked ? "text-[#3ae9baff]" : "text-white hover:text-gray-400"}`}
        onClick={toggleLike}
      >
        <FaHeart className="w-4 h-4" />
      </Button>
      <div className="flex bg-[#2a2a2a] items-center shadow-md px-2 rounded-r-full text-white">
        <span className="text-sm mr-1 pb-0.5">{likes}</span>
      </div>
    </div>
  );
};

export default ToggleLikeButton;
