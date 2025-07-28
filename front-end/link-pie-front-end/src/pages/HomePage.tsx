import HeroFadeSlider from "@/components/HeroFadeSlider";
import CreatorsIntro from "@/components/CreatorsIntro";
import WhyUsArea from "@/components/WhyUsArea";
import PlatFormOverView from "@/components/PlatFormOverView";

const HomePage = () => {
  return (
    <div>
      <section className="hero-section" style={{ marginTop: 0 }}>
        <HeroFadeSlider/>
      </section>
      <section className='greet-section'>
        <CreatorsIntro/>
      </section>
      <section className='why-us-section'>
       <WhyUsArea/>
      </section>
      <section className='overview-section'>
       <PlatFormOverView/>
      </section>
    </div>
  );
}

export default HomePage;
