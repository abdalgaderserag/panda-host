import DomainSearch from "@/component/domain-search";
import Testimonial from "@/component/testimonial";
import Faq from "@/component/faq";
import Cta from "@/component/cta";
import HeroSection from "@/component/hero-section";

export default function domain() {
  const mainContainer = {
    width: "100%",
    justifyItems: "center",
  };
  const heroImage = {
    margin: "0 25%",
    width: "50%",
  };
  return (
    <>
      <HeroSection
        title={"Domain Name <br /> Search"}
        showFull={false}
      ></HeroSection>
      <DomainSearch></DomainSearch>
      <section>
        <img
          style={heroImage}
          src="/layout/faq.png"
          alt="domain search image"
        />
      </section>
      <Testimonial></Testimonial>
      <section>
        <div className="flex domain-container">
          <div className="card domain-card">
            <h3>
              Why buy A domain <br />
              With PandaHost
            </h3>
            <p>
              At Panda Hosting, we believe in simplifying <br /> technology to
              empower businesses and <br /> individuals to grow online. With
              state-of-the
              <br />
              -art servers.
            </p>
            <button className="button button-primary">Get Started</button>
          </div>
          <div className="vps-col">
            <div>
              <img src="/layout/Check.svg" alt="check icon" />
              Full Root access
            </div>
            <div>
              <img src="/layout/Check.svg" alt="check icon" />
              Top Security
            </div>
            <div>
              <img src="/layout/Check.svg" alt="check icon" />
              Total Flexibility
            </div>
            <div>
              <img src="/layout/Check.svg" alt="check icon" />
              Full Root access
            </div>
          </div>
        </div>
      </section>
      <Faq></Faq>
      <Cta></Cta>
    </>
  );
}
