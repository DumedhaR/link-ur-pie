import HeroSection from "../components/HeroSection";
import FeatureRow from "../components/FeatureRow";
import HowItWorks from "../components/HowItWorksSection";

const features = [
  {
    title: 'Get Discovered, Get Supported',
    forArtist:
      'Find unique content, support artists directly, and enjoy personalized access to media that matters to you.',
    forFans:
      'Find unique content, support artists directly, and enjoy personalized access to media that matters to you.',
    artistImage: '/F1.png',
    fanImage: '/f.png'
  },
  {
    title: 'Exclusive Access, No Barriers',
    forArtist: 'Get direct access to rare songs, art, and videos with just one click. No login needed.',
    forFans: 'Get direct access to rare songs, art, and videos with just one click. No login needed.',
    artistImage: '/b.png',
    fanImage:'/F5.png'
  },
  {
    title: 'Turn Likes into Rewards',
    forArtist: 'Show your support by following or subscribing and instantly unlock premium content.',
    forFans: 'Show your support by following or subscribing and instantly unlock premium content.',
    artistImage: '/A4.png',
    fanImage: '/F7.png'
  },
];

const HeroImage: string = "/cover5.png"; 
const HomePage: React.FC = () => {
    
  return(
    <div>
      <div className="h-[calc(100vh-64px)]">
        <HeroSection CoverImg={HeroImage}/>
      </div>
      <div className='Services bg-neutral-50 py-16'>
            <h2 className='text-3xl font-bold text-center'>WHY JOIN?</h2>
            <section className="px-4 md:px-40">
              {features.map((feature, index) => (
                <FeatureRow key={index} feature={feature} index={index} />
              ))}
            </section>   
      </div>
      <div>
        <HowItWorks/>
      </div>
      
    </div>
  );
}
export default HomePage;
