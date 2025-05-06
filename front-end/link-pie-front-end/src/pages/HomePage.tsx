import Hero from "../components/Hero";
import FeatureRowNew from "../components/FeatureRowNew";
import HowItWorks from "../components/HowItWorks";
import JoinNow from "../components/JoinNow";

const features = [
  {
    title: 'Share Your Work, Get Discovered',
    forArtist:
      'Share your work and connect all your socials in one place. Every drop becomes a new path for discovery.',
    forFans:
      'Explore fresh talents and unique creations across music, art, and media, all in one scroll',
    image:'/C2.png',

  },
  {
    title: 'Free Access, No Barriers',
    forArtist: 'Get direct access to rare songs, art, and videos with just one click. No login needed.',
    forFans: 'Get direct access to rare songs, art, and videos with just one click. No login needed.',
    image:'/C1.png',
  },
   {
    title: 'Unlock Through Social Interaction',
    forArtist: 'Let fans unlock songs, videos, or downloads by liking, following, or subscribing, you choose the action.',
    forFans: 'Support creators directly and unlock contents, downloads, or videos through simple actions.',
    image:'/C1.png',
  },
  {
    title: 'Sell Your Work, No Middleman',
    forArtist: ' Upload and sell your content directly to fans. No middle platforms.',
    forFans: 'Support your favorite creators by buying content straight from them.',
    image:'/C2.png',
  },
];

const HeroImage: string = "/cover5.png"; 

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="hero-section h-[calc(100vh-64px)]">
        <Hero CoverImg={HeroImage} />
      </section>
      <section className='feature-section px-4 md:px-36 pt-20 pb-22'>
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 text-center mb-12 capitalize">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureRowNew key={index} feature={feature} />
          ))}
        </div>
      </section>
      <section className="how-it-works-section px-4 md:px-36 pt-20 pb-22 bg-white">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 text-center mb-12 capitalize">How it works</h2>
          <HowItWorks/>
      </section>
      <section className="min-h-screen flex items-center justify-center px-4 py-12 md:px-36">
          <JoinNow/>
      </section>
    </div>
  );
}

export default HomePage;
