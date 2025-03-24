import HeroSection from "@/component/hero-section";
import PricingPlans from "@/component/pricing-plans";

export default function hosting() {
  return (
    <>
      <HeroSection title={"Web Hosting"}></HeroSection>
      <PricingPlans></PricingPlans>
      <section id="addon-container" className="container">
        <h3 className="header-3">
          Advanced Shared Hosting <br />
          Add Ons
        </h3>

        <div id="addon">
          <div className="addon-row">
            <div className="addon-card">
              <img src="/layout/server.png" alt="server icon" />
              <div>
                <h3>Easy to use panel</h3>
                <p>
                  At Panda Hosting, we believe <br />
                  in simplifying technology.
                </p>
              </div>
            </div>
            <div className="addon-card">
              <img src="/layout/server.png" alt="server icon" />
              <div>
                <h3>Easy to use panel</h3>
                <p>
                  At Panda Hosting, we believe <br />
                  in simplifying technology.
                </p>
              </div>
            </div>
            <div className="addon-card">
              <img src="/layout/server.png" alt="server icon" />
              <div>
                <h3>Easy to use panel</h3>
                <p>
                  At Panda Hosting, we believe <br />
                  in simplifying technology.
                </p>
              </div>
            </div>
          </div>
          <div className="addon-row">
            <div className="addon-card">
              <img src="/layout/server.png" alt="server icon" />
              <div>
                <h3>Easy to use panel</h3>
                <p>
                  At Panda Hosting, we believe <br />
                  in simplifying technology.
                </p>
              </div>
            </div>
            <div className="addon-card">
              <img src="/layout/server.png" alt="server icon" />
              <div>
                <h3>Easy to use panel</h3>
                <p>
                  At Panda Hosting, we believe <br />
                  in simplifying technology.
                </p>
              </div>
            </div>
            <div className="addon-card">
              <img src="/layout/server.png" alt="server icon" />
              <div>
                <h3>Easy to use panel</h3>
                <p>
                  At Panda Hosting, we believe <br />
                  in simplifying technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="state">
        <h3 className="header-3">Build Your Website with Panda Host</h3>
        <div className="state">
          <div className="state-card">
            <h4>20+</h4>
            <p>
              Years of Experience in <br /> hosting cloud
            </p>
          </div>
          <div className="state-card">
            <h4>50+</h4>
            <p>
              Cloud Product and <br />
              Domain Hosting
            </p>
          </div>
          <div className="state-card">
            <h4>20+</h4>
            <p>
              Cloud Product and <br />
              Domain Hosting
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
