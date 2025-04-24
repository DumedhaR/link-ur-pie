import HeroSection from "../components/HeroSection";
import FeatureRow from "../components/FeatureRow";
import HowItWorks from "../components/HowItWorksSection";

const features = [
  {
    title: 'Discover and support your favorite creators.',
    forArtist:
      'Find unique content, support artists directly, and enjoy personalized access to media that matters to you.',
    forFans:
      'Find unique content, support artists directly, and enjoy personalized access to media that matters to you.',
    artistImage: '/F1.png',
    fanImage: '/f.png'
  },
  {
    title: 'Spend Your time with rare, exclusive content.',
    forArtist: 'Get direct access to rare songs, art, and videos with just one click. No login needed.',
    forFans: 'Get direct access to rare songs, art, and videos with just one click. No login needed.',
    artistImage: '/b.png',
    fanImage:'/F5.png'
  },
  {
    title: 'Follow, subscribe or like to unlock content.',
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
      <HeroSection CoverImg={HeroImage}/>
      <div className='Services bg-neutral-50 py-16'>
            <h2 className='text-3xl font-bold text-center'>WHY JOIN?</h2>
            <section className="px-4 md:px-40">
              {features.map((feature, index) => (
                <FeatureRow key={index} feature={feature} index={index} />
              ))}
            </section>   
      </div>
      <HowItWorks/>
    </div>
  );
}
export default HomePage;
