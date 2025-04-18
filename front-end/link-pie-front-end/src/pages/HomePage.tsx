import HeroSection from "../components/HeroSection";
import FeatureRow from "../components/FeatureRow";

const features = [
  {
    title: 'Discover and support your favorite creators.',
    description:
      'Find unique content, support artists directly, and enjoy personalized access to media that matters to you.',
    image: '/F1.png',
  },
  {
    title: 'Download exclusive content easily.',
    description: 'Get direct access to rare songs, art, and videos with just one click. No login needed.',
    image: '/F5.png',
  },
  {
    title: 'Follow/Subscribe to unlock content.',
    description: 'Show your support by following or subscribing and instantly unlock premium content.',
    image: '/A5.png',
  },
];

const HeroImage: string = "/cover5.png"; 
const HomePage: React.FC = () => {
    
  return(
    <div>
      <HeroSection CoverImg={HeroImage}/>
      <div className='Services'>
            <h1 className='content-header text-4xl font-bold pt-20'>WHY JOIN?</h1>
            <section className="px-4 md:px-40 py-12">
      {features.map((feature, index) => (
        <FeatureRow key={index} feature={feature} index={index} />
      ))}
    </section>
            
        </div>
    </div>
  );
}
export default HomePage;
