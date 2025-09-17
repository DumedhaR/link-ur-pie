import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FiPlay, FiHeart, FiEye, FiLayers, FiFile } from "react-icons/fi";
import {
  FaVideo,
  FaImage,
  FaMusic,
  FaBookOpen,
  FaArrowDown,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaSpotify,
  FaGlobe,
  FaLock,
} from "react-icons/fa";
import ImgSlider from "./ui/imgSlider";
import { trimTextByWords } from "@/utils/textUtils";
import WaveAudioPlayer from "./ui/waveAudioPlayer";
import { AudioPlayerProp } from "@/types/types";
import ToggleLikeButton from "./ui/toggleLikeButton";

const slids = ["/slider1.jpg", "/slider3.jpg", "/slider4.jpg", "/slider2.jpg"];

const videoData: CardMediaProps = {
  src: ["/video1.jpg"],
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

// const podcastData: CardMediaProps = {
//   src: ["podcast1.jpg"],
//   type: "podcast",
//   title: "Vodcast EP09 - Dark Truth of Modern Tech",
//   desc: "Exploring the hidden truths and impacts of modern technology. Join with us to dives deep into the tech world.",
//   creator: "Rick Sanchez",
//   proImg: "/ricky.jpg",
// };

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

const audioData: AudioPlayerProp = {
  src: "/demo_track_avicii.wav",
  songName: "Rock Bottom",
  coverArt: "/cover_art1.png",
  artist: {
    name: "Morty Smith",
    avatar: "/morty.png",
  },
};

const productDataImage: ProductCardProps = {
  title: "Whispers of the Stars - Image Collection",
  price: 10,
  quantity: 10,
  cover: "/product10.png",
  creator: "Jessica Rose",
  proImg: "/rose.jpg",
  contentType: "Image",
  unlockType: "Pay",
  accessType: "Download",
};

const productDataVideo: ProductCardProps = {
  title: "Whispers of the Green Forest EP03",
  cover: "/product4.png",
  creator: "Anton Jole",
  proImg: "/Anton.jpg",
  contentType: "Video",
  unlockType: "Subscription",
  accessType: "Unlock",
};

const productDataAudio: ProductCardProps = {
  title: "Heart is King (Retro 80s Mix)",
  price: 15,
  quantity: 1,
  contentType: "Audio",
  cover: "/product2.jpg",
  creator: "Morty Smith",
  proImg: "/morty.png",
  unlockType: "Pay",
  accessType: "Download",
};

export default function Overview() {
  return (
    <div className="text-white pb-28 px-6 sm:px-12 lg:px-18 relative overflow-hidden">
      {/* Overview Section 1 */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-semibold leading-none">
          <span className="block"> One platform. Endless ways</span>
          <span className="block">to share your creativity.</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg pt-6">
          Link your social accounts, host downloadable files, and showcase your
          content — all in one place, your way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-14 items-start justify-items-center">
          <div className="w-full h-full lg:col-span-2">
            <CardMedia {...videoData} />
          </div>
          <div className="w-full h-full lg:col-span-2 lg:row-span-1">
            <CardMedia {...imgData} />
          </div>
          {/* <div className="w-full h-full lg:col-span-2 lg:row-span-1">
            <CardMedia {...podcastData} />
          </div> */}
          <div className="w-full h-full md:col-span-2 lg:row-span-1">
            <CardDocs {...storyData} />
          </div>
          <div className="w-full h-full md:col-span-2 lg:row-span-1">
            <WaveAudioPlayer {...audioData} />
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center my-16">
        <FaArrowDown className="text-gray-500 animate-bounce" size={21} />
      </div>

      {/* Overview Section 2 */}
      <div className="flex max-w-6xl mx-auto gap-16 items-center">
        <div className="text-left flex-1">
          <h3 className="text-3xl md:text-5xl font-semibold mb-8">
            Build Your <br />
            Creator Hub
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-6 text-left text-lg max-w-xl">
            <li>
              Easily link all your social channels, personal websites, and
              content in one smart page.
            </li>
            <li>
              Host and share your content and downloadable media files securely,
              controlling access based on your rules.
            </li>
            <li>
              Use your Creator Hub as a smart virtual space, add it as a link in
              bio on your social accounts, and centralize all your work.
            </li>
            <li>
              Customize your virtual space and decide what to showcase with your
              unique style.
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <CreatorProfileCard />
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center my-16">
        <FaArrowDown className="text-gray-500 animate-bounce" size={21} />
      </div>

      {/* Overview Section 3 */}
      <div className="flex mx-auto gap-16 items-center max-w-6xl">
        <div className="flex-1 grid grid-cols-7 items-start gap-5 relative">
          {/* First Card */}
          <div className="row-span-2 col-span-3 place-self-center z-20 -translate-y-6">
            <ProductCard {...productDataAudio} />
          </div>

          {/* Second Card overlapping */}
          <div className="col-span-4 z-30">
            <ProductCard {...productDataVideo} />
          </div>

          {/* Third Card overlapping */}
          <div className="col-span-4 z-10">
            <ProductCard {...productDataImage} />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-left mt-8 flex-1 pb-16">
          <h3 className="text-3xl md:text-5xl font-semibold mb-8">
            Turn Your Content
            <br />
            into Revenue
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-6 text-left text-lg max-w-xl">
            <li>
              Control how your content is accessed. Let people pay to access it
              or download files, all under your terms.
            </li>
            <li>
              Everything has value. You set the price for your work and get paid
              exactly what you ask for.
            </li>
            <li>
              Manage your content and track revenue, downloads, views, and
              feedback easily with our creator tools.
            </li>
            <li>
              Keep full ownership of your work and the income it generates,
              without middlemen cuts.
            </li>
          </ul>
        </div>
      </div>
      {/* Arrow */}
      <div className="flex justify-center my-16">
        <FaArrowDown className="text-gray-500 animate-bounce" size={21} />
      </div>

      {/* Overview Section 4 */}
      <div className="flex max-w-6xl mx-auto gap-16 items-center">
        {/* Text Section */}
        <div className="text-left flex-1">
          <h3 className="text-3xl md:text-5xl font-semibold mb-8">
            Turn Views into
            <br />
            Followers and Subscribers
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-6 text-left text-lg max-w-xl">
            <li>
              Not all content has to be free or paid. Host files on our platform
              and let fans unlock them through social interactions.
            </li>
            <li>
              Add unlock links to your posts on other platforms, such as in
              descriptions or comments, allowing fans to download content files
              once they complete the required actions.
            </li>
            <li>
              Going viral, having millions of views, doesn&apos;t always
              guarantee new fans. Social unlocks give viewers an incentive to
              follow or subscribe to your account.
            </li>
            <li>
              Currently supported: Instagram, TikTok, YouTube, and spotify with
              more platforms coming soon.
            </li>
          </ul>
        </div>

        <div className="flex-1">
          {/* First Card */}
          <div className="max-w-xl">
            <SocialUnlocker />
          </div>
        </div>
      </div>
    </div>
  );
}

// const CardProfile = () => (
//   <Card className="w-full h-full max-w-sm md:max-w-md bg-[#1a1a1a] rounded-lg text-center shadow-md border border-[#2a2a2a]">
//     <CardContent className="flex flex-col items-center w-full">
//       <Avatar className="w-20 h-20 mb-3 ring-3 ring-[#2a2a2a]">
//         <AvatarImage
//           className="object-cover"
//           src="/morty.png"
//           alt="Morty Smith"
//         />
//         <AvatarFallback>MS</AvatarFallback>
//       </Avatar>
//       <div className="text-white mb-4">
//         <h2 className="text-lg font-medium">Morty Smith</h2>
//         <p className="text-sm text-gray-400">Musician</p>
//       </div>
//       <Button
//         variant="outline"
//         className="bg-[#2a2a2a] border-none text-white w-full flex shadow-md justify-center cursor-pointer py-5 hover:bg-[#2a2a2a] hover:text-white"
//       >
//         Edit
//       </Button>
//     </CardContent>
//   </Card>
// );

interface CardMediaProps {
  src: string[];
  type: "image" | "video" | "podcast";
  title?: string;
  desc?: string;
  creator: string;
  proImg: string;
}

const CardMedia = ({
  src,
  type,
  title,
  desc,
  creator,
  proImg,
}: CardMediaProps) => {
  return (
    <Card className="w-full h-full bg-[#1a1a1a] rounded-lg text-left shadow-md border border-[#2a2a2a] ">
      <CardContent className="flex h-full flex-col w-full gap-3">
        <div className="relative w-full flex-1 overflow-hidden aspect-[5/3]">
          <Avatar className="w-12 h-12 absolute top-4 left-4 cursor-pointer z-10 ring-2 ring-[#2c2c2c]/90">
            <AvatarImage className="object-cover" src={proImg} alt={creator} />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          {type === "video" || type === "podcast" ? (
            <>
              <button
                className="absolute bottom-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md 
              cursor-pointer p-4 rounded-full text-white"
              >
                <FiPlay className="w-6 h-6" />
              </button>
              <div className="absolute bg-white bottom-4 left-4 p-1 rounded-sm shadow-sm">
                <FaVideo className="w-3 h-3 text-background" />
              </div>
              <img
                src={src[0]}
                alt="tumb"
                className="w-full h-full object-cover"
              />
            </>
          ) : (
            <>
              <div className="absolute bg-white bottom-4 left-4 p-1 rounded-sm shadow-sm z-20">
                <FaImage className="w-3 h-3 text-background" />
              </div>
              <div className="w-full h-full">
                <ImgSlider slides={src} />
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col">
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
            <ToggleLikeButton />
          </div>
          <div className="text-white text-sm mt-2">
            <p>{desc}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface CardDocsProps {
  cover: string;
  type: "document" | "story";
  title?: string;
  summary: string;
  creator: string;
  proImg: string;
}

const CardDocs = ({
  cover,
  type,
  title,
  summary,
  creator,
  proImg,
}: CardDocsProps) => {
  return (
    <Card className="w-full h-full bg-[#1a1a1a] rounded-lg text-left shadow-md border border-[#2a2a2a] md:col-span-2">
      <CardContent className="flex flex-col md:flex-row w-full h-full gap-3 md:gap-5">
        <div className="relative flex-2 overflow-hidden">
          <Avatar className="w-12 h-12 absolute top-4 left-4 cursor-pointer z-10 ring-2 ring-[#2c2c2c]/90">
            <AvatarImage className="object-cover" src={proImg} alt={creator} />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          {type === "story" ? (
            <>
              <div className="absolute bg-white bottom-4 left-4 p-1 rounded-sm shadow-sm">
                <FaBookOpen className="w-3 h-3 text-background" />
              </div>
              <div className="w-full h-full lg:aspect-[4/6] rounded-l-lg overflow-hidden">
                <img
                  src={cover}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col flex-3 gap-1 md:py-2">
          <h2 className="text-md font-medium text-white cursor-pointer">
            {title}
          </h2>
          <p className="text-sm text-gray-400 cursor-pointer">{creator}</p>
          <div className="flex flex-row text-sm text-gray-400 items-center gap-4">
            <div className="flex items-center gap-1">
              <FiEye className="w-4 h-4 " />
              <span>654</span>
            </div>
            <div className="flex items-center gap-1">
              <FiHeart className="w-4 h-4 " />
              <span className="text-sm">311</span>
            </div>
            <div className="flex items-center gap-1">
              <FiLayers className="w-4 h-4 " />
              <span>10 parts</span>
            </div>
          </div>
          <div className="text-white text-sm">
            <p className="inline sm:hidden">{trimTextByWords(summary, 51)}</p>
            <p className="hidden sm:inline">{trimTextByWords(summary, 61)}</p>
            <span className="text-gray-400"> ...more</span>
          </div>
          <div className="flex flex-wrap gap-1 text-sm text-gray-400 items-center mt-2.5 mb-1">
            <Badge variant="default">dark romance</Badge>
            <Badge variant="secondary">obsession</Badge>
            <Badge variant="destructive">revenge</Badge>
            <Badge variant="outline">5+</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
const CreatorProfileCard = () => (
  <Card className="bg-[#1a1a1a] rounded-lg shadow-md border border-[#2a2a2a] overflow-hidden">
    <CardContent className="flex flex-col gap-5 text-white">
      <div className="flex md:items-start gap-4">
        <Avatar className="w-14 h-14 ring-3 ring-[#2a2a2a]">
          <AvatarImage
            className="object-cover"
            src="/morty.png"
            alt="Morty Smith"
          />
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-left mt-1">
          <h2 className="text-md font-semibold text-white cursor-pointer">
            Morty Smith
          </h2>
          <p className="text-sm text-gray-400 mb-2">Musician · Composer</p>
        </div>
      </div>

      <div className="flex flex-col text-left gap-5">
        <div>
          <h3 className="text-md font-medium mb-4">Recent Works</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-[#2a2a2a] rounded-sm p-2 cursor-pointer border border-[#2a2a2a] shadow-md">
              <img
                src="/video1.jpg"
                alt="Video 1"
                className="w-full h-24 object-cover mb-1"
              />
              <p className="text-xs text-gray-300 truncate">
                Music Video - Midnight Run
              </p>
            </div>
            <div className="bg-[#2a2a2a] rounded-sm p-2 cursor-pointer border border-[#2a2a2a] shadow-md">
              <img
                src="/cover_art2.jpg"
                alt="Artwork 1"
                className="w-full h-24 object-cover mb-1"
              />
              <p className="text-xs text-gray-300 truncate">
                Music Video - Sunset Dreams
              </p>
            </div>
            <div className="bg-[#2a2a2a] rounded-sm p-2 cursor-pointer border border-[#2a2a2a] shadow-md">
              <img
                src="/cover_art1.png"
                alt="Song 1"
                className="w-full h-24 object-contain mb-1 bg-[#3ae9baff]"
              />
              <p className="text-xs text-gray-300 truncate">
                Single - Rock Bottom
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-md font-medium mb-4">Find Me On</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 bg-[#2a2a2a] px-4 py-3 rounded-sm cursor-pointer shadow-md">
              <FaGlobe className="text-lg text-green-400" />
              <span className="text-xs">Official Website</span>
            </div>
            <div className="flex items-center gap-3 bg-[#2a2a2a] px-4 py-3 rounded-sm cursor-pointer shadow-md">
              <FaSpotify className="text-lg text-green-500" />
              <span className="text-xs">Listen on Spotify</span>
            </div>
            <div className="flex items-center gap-3 bg-[#2a2a2a] px-4 py-3 rounded-sm cursor-pointer shadow-md">
              <FaYoutube className="text-lg text-red-500" />
              <span className="text-xs">Watch on YouTube</span>
            </div>
            <div className="flex items-center gap-3 bg-[#2a2a2a] px-4 py-3 rounded-sm cursor-pointer shadow-md">
              <FaInstagram className="text-lg text-pink-500" />
              <span className="text-xs">Instagram</span>
            </div>
            <div className="flex items-center gap-3 bg-[#2a2a2a] px-4 py-3 rounded-sm cursor-pointer shadow-md">
              <FaTiktok className="text-lg text-white" />
              <span className="text-xs">TikTok</span>
            </div>
            <div className="flex items-center gap-3 bg-[#2a2a2a] px-4 py-3 rounded-sm cursor-pointer shadow-md">
              <FaFacebookF className="text-lg text-blue-500" />
              <span className="text-xs">Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

interface ProductCardProps {
  title: string;
  price?: number;
  desc?: string;
  quantity?: number;
  cover: string;
  creator: string;
  proImg: string;
  contentType: "Video" | "Audio" | "Docs" | "Image";
  unlockType: "Pay" | "Social" | "Subscription";
  accessType: "Download" | "Unlock";
}

const ProductCard = ({
  title,
  price,
  quantity,
  cover,
  creator,
  proImg,
  contentType,
  unlockType,
  accessType,
}: ProductCardProps) => {
  return (
    <Card className="bg-[#1a1a1a] rounded-lg shadow-md border border-[#2a2a2a] overflow-hidden">
      <CardContent className="flex flex-col gap-4 text-white">
        <div
          className={`relative w-full overflow-hidden rounded-sm ${
            contentType === "Image"
              ? "aspect-[4/3]"
              : contentType === "Video"
                ? "aspect-[5/3]"
                : "aspect-[1/1]"
          }`}
        >
          <Avatar className="w-9 h-9 absolute top-3 left-3 cursor-pointer z-10 ring-2 ring-[#2c2c2c]/90">
            <AvatarImage className="object-cover" src={proImg} alt={creator} />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <div
            className="flex absolute bottom-3 right-3 z-10 bg-white/10 backdrop-blur-md cursor-pointer p-2 
          rounded-md text-white gap-1.5 items-center text-xs"
          >
            <FaLock className="w-3 h-3" />
            <span>Locked</span>
          </div>
          <div className="absolute bg-white bottom-3 left-3 p-1 rounded-sm shadow-sm z-20">
            {contentType === "Image" ? (
              <FaImage className="w-2.5 h-2.5 text-background" />
            ) : contentType === "Video" ? (
              <FaVideo className="w-2.5 h-2.5 text-background" />
            ) : contentType === "Audio" ? (
              <FaMusic className="w-2.5 h-2.5 text-background" />
            ) : (
              <FaBookOpen className="w-2.5 h-2.5 text-background" />
            )}
          </div>
          <img
            src={cover}
            alt="tumb"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col text-left gap-3.5">
          <div className="flex items-start flex-col">
            <h2 className="text-sm font-medium text-white mb-0.5">{title}</h2>
            <p className="text-xs text-gray-400 cursor-pointer mb-1">
              {creator}
            </p>
            <div className="flex flex-row text-xs text-gray-400 items-center gap-3">
              <div className="flex items-center gap-1">
                {accessType === "Download" ? (
                  <>
                    <FiFile className="w-3 h-3" />
                    <span>{quantity}</span>
                  </>
                ) : (
                  <>
                    <FiEye className="w-3 h-3" />
                    <span>51k</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-1">
                <FiHeart className="w-3 h-3" />
                <span>311</span>
              </div>
              <div className="flex items-center gap-1">23 August</div>
            </div>
          </div>
          {unlockType === "Pay" ? (
            <div className="flex text-white justify-between items-center">
              <p className="text-md font-bold text-green-300">{price}$</p>
              <button
                className="flex text-sm font-medium w-fit bg-white/10 backdrop-blur-md 
              cursor-pointer p-2.5 rounded-md text-white gap-2 items-center shadow-md"
              >
                <span>Buy to Unlock</span>
              </button>
            </div>
          ) : unlockType === "Social" ? (
            <button
              className="flex text-sm font-medium w-fit self-end bg-white/10 backdrop-blur-md 
              cursor-pointer p-2.5 rounded-md text-white gap-2 items-center shadow-md"
            >
              <FaInstagram className="w-5 h-5" />
              <span>Follow to Unlock</span>
            </button>
          ) : (
            <div className="flex text-white justify-between items-center">
              <p className="text-sm font-semibold text-green-300">
                Members Only
              </p>
              <button
                className="flex text-sm font-medium w-fit bg-white/10 backdrop-blur-md 
              cursor-pointer p-2.5 rounded-md text-white gap-2 items-center shadow-md"
              >
                <span>Sub to Unlock</span>
              </button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const SocialUnlocker = () => {
  return (
    <Card className="relative bg-[#1a1a1a] rounded-lg shadow-md border border-[#2a2a2a] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/cover_art.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(40px) brightness(0.50)",
        }}
      />
      <div className="absolute z-20 inset-0 bg-black/50" />
      <CardContent className="relative z-40 flex flex-col gap-5 text-white items-center justify-center">
        <div className="w-full flex items-center justify-center pt-8">
          <div className="flex flex-col items-center">
            <img
              src="/cover_art1.png"
              alt="Cover Art"
              className="w-52 h-52 rounded-lg shadow-lg"
            />
            <h1 className="text-white mt-6 text-2xl font-bold">
              Content Title
            </h1>
          </div>
        </div>
        <div className="px-20">
          <p className="mb-7 text-center">
            Please complete at least 2 steps below to download the file.
          </p>
          {/* Actions */}
          <div className="flex flex-col gap-4 w-full text-sm pb-8 px-4">
            <button className="flex items-center justify-center gap-3 bg-green-500 py-3 rounded-full shadow-lg hover:opacity-90 transition">
              <FaSpotify className="text-xl" />
              <span className="font-medium">Follow on Spotify</span>
            </button>
            <button className="flex items-center justify-center gap-3 bg-red-600 py-3 rounded-full shadow-lg hover:opacity-90 transition">
              <FaYoutube className="text-xl" />
              <span className="font-medium">Subscribe on YouTube</span>
            </button>
            <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-orange-500 py-3 rounded-full shadow-lg hover:opacity-90 transition">
              <FaInstagram className="text-xl" />
              <span className="font-medium">Follow on Instagram</span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
