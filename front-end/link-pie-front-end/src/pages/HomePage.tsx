import HeroFadeSlider from "@/components/HeroFadeSlider";
import BuiltForCreators from "@/components/BuiltForCreator";

// const features = [
//   {
//     title: 'Share Your Work, Get Discovered',
//     forArtist:
//       'Share your work and connect all your socials in one place. Every drop becomes a new path for discovery.',
//     forFans:
//       'Explore fresh talents and unique creations across music, art, and media, all in one scroll',
//     image:'/C2.png',

//   },
//   {
//     title: 'Free Access, No Barriers',
//     forArtist: 'Get direct access to rare songs, art, and videos with just one click. No login needed.',
//     forFans: 'Get direct access to rare songs, art, and videos with just one click. No login needed.',
//     image:'/C1.png',
//   },
//    {
//     title: 'Unlock Through Social Interaction',
//     forArtist: 'Let fans unlock songs, videos, or downloads by liking, following, or subscribing, you choose the action.',
//     forFans: 'Support creators directly and unlock contents, downloads, or videos through simple actions.',
//     image:'/C1.png',
//   },
//   {
//     title: 'Sell Your Work, No Middleman',
//     forArtist: ' Upload and sell your content directly to fans. No middle platforms.',
//     forFans: 'Support your favorite creators by buying content straight from them.',
//     image:'/C2.png',
//   },
// ];

// const HeroImage: string = "/cover5.png"; 

const HomePage = () => {
  return (
    <div>
      <section className="hero-section" style={{ marginTop: 0 }}>
        <HeroFadeSlider/>
      </section>
      <section className='feature-section'>
        <BuiltForCreators/>
      </section>
    </div>
  );
}

export default HomePage;
