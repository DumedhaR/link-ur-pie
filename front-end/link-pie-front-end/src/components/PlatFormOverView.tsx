import { FaArrowDown } from "react-icons/fa";

export default function PlatformOverview() {
  return (
    <div className="bg-[#0b0b0b] text-white py-20 px-6 relative overflow-hidden">
      {/* Top Text + Cards */}
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          One platform. Endless ways<br />
          to share your creativity.
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Link your social accounts, host downloadable files, and showcase your content — all in one place, your way.
        </p>

        {/* Grid of UI Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 justify-items-center">
          <Card title="Dashboard" label="Stats • Earnings" />
          <Card title="Links" label="YouTube • Patreon" />
          <ProfileCard name="Jane Doe" title="Buy tools" />
          <Card title="Upload files" label="Drag & drop or select" />
          <ProfileCard name="Jane Doe" title="Creator" />
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center my-12">
        <FaArrowDown className="text-gray-500 animate-bounce" size={20} />
      </div>

      {/* Middle Content */}
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

      {/* Bottom: Sell Products */}
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

const Card = ({ title, label }) => (
  <div className="bg-[#1a1a1a] px-4 py-5 rounded-lg w-40 h-24 text-left shadow-md border border-[#2a2a2a]">
    <h4 className="text-white text-sm font-semibold">{title}</h4>
    <p className="text-xs text-gray-400 mt-2">{label}</p>
  </div>
);

const ProfileCard = ({ name, title }) => (
  <div className="bg-[#1a1a1a] px-4 py-5 rounded-lg w-40 h-24 text-left shadow-md border border-[#2a2a2a] flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-gray-500"></div>
    <div>
      <p className="text-sm font-medium">{name}</p>
      <p className="text-xs text-gray-400">{title}</p>
    </div>
  </div>
);

const ProductCard = ({ title, price }) => (
  <div className="bg-[#1a1a1a] px-6 py-4 rounded-lg w-40 text-center border border-[#2a2a2a]">
    <h4 className="text-white text-sm font-semibold">{title}</h4>
    <p className="text-blue-400 mt-2 font-bold">{price}</p>
  </div>
);
