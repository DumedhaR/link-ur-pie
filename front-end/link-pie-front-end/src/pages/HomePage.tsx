import HeroFadeSlider from "@/components/HeroFadeSlider";
import CreatorsIntro from "@/components/CreatorsIntro";
import Overview from "@/components/Overview";
import JoinNow from "@/components/JoinNow";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-28">
      <section className="hero-section" style={{ marginTop: 0 }}>
        <HeroFadeSlider />
      </section>
      <section className="greet-section">
        <CreatorsIntro />
      </section>
      <section className="overview-section pb-24">
        <Overview />
      </section>
      <section className="join-now">
        <JoinNow />
      </section>
    </div>
  );
};

export default HomePage;
