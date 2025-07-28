
export default function WhyUsArea() {
  return (
    <div className="relative w-full min-h-[100vh] flex flex-col font-semibold items-center text-primary-foreground overflow-hidden">
      
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img1.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Top Heading */}
      <h1 className="absolute top-28 left-20 max-w-xl text-6xl z-20 text-left text-white pointer-events-none">
        Your Audience Everywhere
      </h1>

      {/* Bottom Heading */}
      <h1 className="absolute bottom-28 right-20 max-w-md text-6xl text-right z-20 text-white pointer-events-none">
        You link here
      </h1>

      {/* Subheading */}
      <h2 className="absolute bottom-28 left-20 max-w-xl text-lg z-20 text-left text-white font-normal leading-relaxed pointer-events-none">
        We let creators link their social accounts, downloadable files, and media in one place. Grow your audience, share anywhere, and stay in control. Your content, your rules.
      </h2>
    </div>
  );
}
