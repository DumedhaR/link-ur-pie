import HeroFadeSlider from "@/components/HeroFadeSlider";
import BuiltForCreators from "@/components/BuiltForCreators";
import WhyUsSection from "@/components/WhyUsBanner";

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
        <WhyUsSection/>
      </section>
    </div>
  );
}

export default HomePage;
