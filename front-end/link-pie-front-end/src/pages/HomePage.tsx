import HeroFadeSlider from "@/components/HeroFadeSlider";
import BuiltForCreators from "@/components/BuiltForCreators";
import TopFeatureBanner from "@/components/TopFeatureBanner";

const HomePage = () => {
  return (
    <div>
      <section className="hero-section" style={{ marginTop: 0 }}>
        <HeroFadeSlider/>
      </section>
      <section className='greet-section'>
        <BuiltForCreators/>
      </section>
      <section>
        <TopFeatureBanner/>
      </section>
    </div>
  );
}

export default HomePage;
