import Hero from "../components/Hero";
import FeatureRowNew from "../components/FeatureRowNew";
import HowItWorks from "../components/HowItWorks";

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
    title: 'Exclusive Access, No Barriers',
    forArtist: 'Get direct access to rare songs, art, and videos with just one click. No login needed.',
    forFans: 'Get direct access to rare songs, art, and videos with just one click. No login needed.',
    image:'/C1.png',
  },
  {
    title: 'Turn Likes into Rewards',
    forArtist: 'Show your support by following or subscribing and instantly unlock premium content.',
    forFans: 'Show your support by following or subscribing and instantly unlock premium content.',
    image:'/C1.png',
  },
];

const HeroImage: string = "/cover5.png"; 

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="hero-section h-[calc(100vh-64px)]">
        <Hero CoverImg={HeroImage} />
      </section>
      <section className='feature-section px-4 md:px-40 py-18'>
        <h2 className="text-4xl font-bold text-center mb-12 capitalize">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureRowNew key={index} feature={feature} />
          ))}
        </div>
      </section>
      <section className="how-it-works-section px-4 md:px-40 py-18 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12 capitalize">How it works</h2>
          <HowItWorks />
      </section>
    </div>
  );
}

export default HomePage;
