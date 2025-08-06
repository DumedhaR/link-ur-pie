import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { FiPlay, FiHeart, FiEye, FiLayers } from "react-icons/fi";
import { FaVideo, FaImage, FaBookOpen, FaArrowDown, FaHeart, FaFacebookF, FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa"
import ImgSlider from "./ui/imgSlider";
import { getRandomBetween } from "@/utils/mathUtils";
import { trimTextByWords } from "@/utils/textUtils";

const slids = ["/slider1.jpg", "/slider4.jpg", "/slider3.jpg", "/slider2.jpg" ];

const videoData: CardMediaProps = {
  src: ["/video1.jpg",],
  type: "video",
  title: "Midnight Run (80s Mix)",
  desc: "Just finished this track inspired by synthwave and the feeling of drifting through time, let me know what you think.",
  creator: "Morty Smith",
  proImg: "/morty.png",
};

const imgData: CardMediaProps = {
  src: slids,
  type: "image",
  title: "Seven Seas",
  desc: "Hi guys, checkout my new digital art collection.",
  creator: "Jessica Rose",
  proImg: "/rose.jpg",
};

const storyData: CardDocsProps = {
  cover: "/story.jpg",
  type: "story",
  title: "Behind Her Screen",
  summary: `Maya is a lonely teenage girl living on the edge. Clever, beautiful, sharp-tongued, and two-faced by design. Online, she becomes anyone. Behind the screen, she crafts illusions, 
            manipulates emotions, and cashes in, treating strangers like pawns in her digital game. But her latest mark isn’t like the rest. He’s kind. Genuine. And worst of all, he sees her. 
            As blurred feelings crack her carefully built facade, Maya slips into something terrifyingly real. But just as she lets her guard down, the trap snaps shut. Someone has been watching. 
            Someone who knows her secrets. Someone who’s been waiting`,
  creator: "Kevil Max",
  proImg: "/kavil.jpg",
};

export default function Overview() {
  return (
    <div className="text-white pt-26 pb-28 px-6 sm:px-12 lg:px-20 relative overflow-hidden">

      {/* Overview Section 1 */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-semibold leading-none">
          <span className="block"> One platform. Endless ways</span>
          <span className="block">to share your creativity.</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base pt-6">
          Link your social accounts, host downloadable files, and showcase your content — all in one place, your way.
        </p>

       {/* Account Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-5 mt-14 items-start">
          
        <div className="md:col-span-1 justify-items-center">
          <CardProfile />
        </div>

        <div className="md:col-span-1 justify-items-center">
          <CardSocials />
        </div>

        <div className="md:col-span-2 md:row-span-2 justify-items-center">
          <CardMedia {...videoData} />
        </div>

        <div className="md:col-span-2 md:row-span-2 justify-items-center">
          <CardMedia {...imgData} />
        </div>

        <div className="md:col-span-2 md:row-span-2 justify-items-center">
          <CardDocs {...storyData} />
        </div>
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

interface CardMediaProps {
  src: string[];
  type: 'image' | 'video';
  title?: string;
  desc?: string;
  creator: string;
  proImg: string;
}

const CardMedia = ({src, type, title, desc, creator, proImg} : CardMediaProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(getRandomBetween(50, 200));

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setLikes(prev => prev + (newLiked ? 1 : -1));
  };
  return (
    <Card className="w-full h-full bg-[#1a1a1a] rounded-lg text-left shadow-md border border-[#2a2a2a]">
      <CardContent className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden">
            <Avatar className="w-12 h-12 absolute top-4 left-4 cursor-pointer z-10 ring-2 ring-[#2c2c2c]/80">
            <AvatarImage
              className="object-cover"
              src={proImg}
              alt={creator}
            />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          {type === 'video' ? (
            <>
              <button className="absolute bottom-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md 
              cursor-pointer p-4 rounded-full text-white">
              <FiPlay className="w-6 h-6" />
              </button>
              <div className="absolute bg-white bottom-4 left-4 p-1 rounded-sm shadow-sm">
                <FaVideo className="w-3 h-3 text-background"/>
              </div>
              <img
              src={src[0]}
              alt='tumb'
              className="w-full h-full object-cover"
              /> 
            </>
          ) : (
            <>
              <div className="absolute bg-white bottom-4 left-4 p-1 rounded-sm shadow-sm z-20">
                <FaImage className="w-3 h-3 text-background"/>
              </div>
              <div className="w-full h-full">
                <ImgSlider slides={src}/>
              </div>
            </>
          )} 
        </div>
        <div className="flex flex-col mt-3">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-md font-medium text-white">{title}</h2>
              <p className="text-sm text-gray-400 cursor-pointer">{creator}</p>
              <div className="flex flex-row text-sm text-gray-400 items-center">
                <span>268 views</span>
                <span className="mx-1 text-xs">•</span>
                <span>2 hour ago</span>
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
            <p>{desc}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 

interface CardDocsProps {
  cover: string;
  type: 'document' | 'story';
  title?: string;
  summary: string;
  creator: string;
  proImg: string;
}

const CardDocs = ({cover, type, title, summary, creator, proImg} : CardDocsProps) => {

  const trimmedSummary = trimTextByWords(summary, 75);

  return (
    <Card className="bg-[#1a1a1a] rounded-lg text-left shadow-md border border-[#2a2a2a] md:col-span-2">
      <CardContent className="flex flex-row w-full gap-5">
        <div className="relative w-2/5 overflow-hidden">
            <Avatar className="w-12 h-12 absolute top-4 left-4 cursor-pointer z-10 ring-2 ring-[#2c2c2c]/80">
            <AvatarImage
              className="object-cover"
              src={proImg}
              alt={creator}
            />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          {type === 'story' ? (
            <>
              <div className="absolute bg-white bottom-4 left-4 p-1 rounded-sm shadow-sm">
                <FaBookOpen className="w-3 h-3 text-background"/>
              </div>
              <div className="w-full h-full aspect-[4/6] rounded-l-lg overflow-hidden">
              <img src={cover} alt="thumb" className="w-full h-full object-cover" />
            </div> 
            </>
          ) : (
            <></>
          )} 
        </div>
        <div className="flex flex-col w-3/5 gap-1 py-2">
          <h2 className="text-md font-medium text-white cursor-pointer">{title}</h2>
          <p className="text-sm text-gray-400 cursor-pointer">{creator}</p>
          <div className="flex flex-row text-sm text-gray-400 items-center gap-4">
            <div className="flex items-center gap-1">
              <FiEye className="w-4 h-4 " />
              <span>268</span>
            </div>
            <div className="flex items-center gap-1">
              <FiHeart className="w-4 h-4 " />
              <span className="text-sm">321</span>
            </div>
            <div className="flex items-center gap-1">
              <FiLayers className="w-4 h-4 " />
              <span>10 parts</span>
            </div>
          </div>
          <div className="text-white text-sm">
            <p>{trimmedSummary}<span className="text-gray-400"> ...more</span></p>
          </div>
          <div className="flex flex-wrap gap-1 text-sm text-gray-400 items-center mt-2 mb-1">
              <Badge variant="default">dark romance</Badge>
              <Badge variant="secondary">obsession</Badge>
              <Badge variant="destructive">revenge</Badge>
              <Badge variant="outline">5+</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 

interface ProductCardProps {
  title: string;
  price: string;
}

const ProductCard = ({ title, price } : ProductCardProps) => {
return (<div className="bg-[#1a1a1a] px-6 py-4 rounded-lg w-40 text-center border border-[#2a2a2a]">
    <h4 className="text-white text-sm font-semibold">{title}</h4>
    <p className="text-blue-400 mt-2 font-bold">{price}</p>
  </div>
);
}

