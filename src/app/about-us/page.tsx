import AboutUs from "@/component/about-us";
import Plans from "@/component/plans";
import Data from "@/component/data";
import HeroSection from "@/component/hero-section";

export default function Home() {
  const title = "About Us";
  return (
    <>
      <HeroSection title={title}></HeroSection>
      <AboutUs></AboutUs>
      <Data></Data>

      <section id="about-us" className="container flip">
        <div>
          <img src="/layout/Hero-Image.png" alt="about us image" />
        </div>
        <div>
          <div>
            <h2>Why Choose Us</h2>
            <h3>
              Make Your Website <br />
              With Our Hosting Services
            </h3>
            <p>
              At Panda Hosting, we believe in simplifying technology to empower
              businesses and individuals to grow online. With state-of-the-art
              servers.
            </p>
            <button className="button button-primary">Get Started</button>
          </div>
        </div>
      </section>
      <Plans></Plans>
    </>
  );
}
