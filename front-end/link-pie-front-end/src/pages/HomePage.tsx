import HeroFadeSlider from "@/components/HeroFadeSlider";
import CreatorsIntro from "@/components/CreatorsIntro";
import Overview from "@/components/Overview";

const HomePage = () => {
  return (
    <div>
      <section className="hero-section" style={{ marginTop: 0 }}>
        <HeroFadeSlider/>
      </section>
      <section className='greet-section'>
        <CreatorsIntro/>
      </section>
      <section className='overview-section'>
      <Overview/>
      </section>
    </div>
  );
}

export default HomePage;
