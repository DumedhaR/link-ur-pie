import HeroFadeSlider from "@/components/HeroFadeSlider";
import CreatorsIntro from "@/components/CreatorsIntro";
import Overview from "@/components/Overview";
import JoinNow from "@/components/JoinNow";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-28">
      <section className="relative hero-section" style={{ marginTop: 0 }}>
        <div className="absolute z-20 bottom-0 left-0 right-0 h-30 bg-gradient-to-b from-transparent to-background" />
        <HeroFadeSlider />
      </section>
      <section className="greet-section">
        <CreatorsIntro />
      </section>
      <section className="overview-section pb-24">
        <Overview />
      </section>
      <section className="relative join-now">
        {/* <div className="absolute z-20 bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-background" /> */}
        <JoinNow />
      </section>
    </div>
  );
};

export default HomePage;
