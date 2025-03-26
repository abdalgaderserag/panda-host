import DomainSearch from "@/component/domain-search";
import Testimonial from "@/component/testimonial";
import Faq from "@/component/faq";
import Cta from "@/component/cta";
import HeroSection from "@/component/hero-section";

export default function domain() {
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
      <section>
        <div className="header-2-container">
          <h2 className="header-2">Our Pricing</h2>
        </div>
        <h3 className="header-3">Buy A Domain</h3>
        <div id="service-cards">
        <div className="service-row">
          <div className="service-card">
              <h4>.com</h4>
              <p>
                At Panda Hosting, we believe <br />
                in simplifying technology to{" "}
              </p>
              <span className="domain-price"><b><span>$9</span>.99</b>/year</span>
             <button className="button button-primary button-sharper full">Choose Plan</button>
            </div>
            <div className="service-card">
              <h4>.com</h4>
              <p>
                At Panda Hosting, we believe <br />
                in simplifying technology to{" "}
              </p>
              <span className="domain-price"><b><span>$9</span>.99</b>/year</span>
             <button className="button button-primary button-sharper full">Choose Plan</button>
            </div>
            <div className="service-card">
              <h4>.com</h4>
              <p>
                At Panda Hosting, we believe <br />
                in simplifying technology to{" "}
              </p>
              <span className="domain-price"><b><span>$9</span>.99</b>/year</span>
             <button className="button button-primary button-sharper full">Choose Plan</button>
            </div>
          </div>
          <br />
          <div className="service-row">
          <div className="service-card">
              <h4>.com</h4>
              <p>
                At Panda Hosting, we believe <br />
                in simplifying technology to{" "}
              </p>
              <span className="domain-price"><b><span>$9</span>.99</b>/year</span>
             <button className="button button-primary button-sharper full">Choose Plan</button>
            </div>
            <div className="service-card">
              <h4>.com</h4>
              <p>
                At Panda Hosting, we believe <br />
                in simplifying technology to{" "}
              </p>
              <span className="domain-price"><b><span>$9</span>.99</b>/year</span>
             <button className="button button-primary button-sharper full">Choose Plan</button>
            </div>
            <div className="service-card">
              <h4>.com</h4>
              <p>
                At Panda Hosting, we believe <br />
                in simplifying technology to{" "}
              </p>
              <span className="domain-price"><b><span>$9</span>.99</b>/year</span>
             <button className="button button-primary button-sharper full">Choose Plan</button>
            </div>
          </div>
          <div className="service-row">
          <div className="service-card">
              <h4>.com</h4>
              <p>
                At Panda Hosting, we believe <br />
                in simplifying technology to{" "}
              </p>
              <span className="domain-price"><b><span>$9</span>.99</b>/year</span>
             <button className="button button-primary button-sharper full">Choose Plan</button>
            </div>
            <div className="service-card">
              <h4>.com</h4>
              <p>
                At Panda Hosting, we believe <br />
                in simplifying technology to{" "}
              </p>
              <span className="domain-price"><b><span>$9</span>.99</b>/year</span>
             <button className="button button-primary button-sharper full">Choose Plan</button>
            </div>
            <div className="service-card">
              <h4>.com</h4>
              <p>
                At Panda Hosting, we believe <br />
                in simplifying technology to{" "}
              </p>
              <span className="domain-price"><b><span>$9</span>.99</b>/year</span>
             <button className="button button-primary button-sharper full">Choose Plan</button>
            </div>
          </div>
        </div>
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
