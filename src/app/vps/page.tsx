import HeroSection from "@/component/hero-section";
import PricingPlans from "@/component/pricing-plans";
import Cta from "@/component/cta";

export default function vps() {
  return (
    <>
      <HeroSection title={"Virtual Private server"}></HeroSection>
      <PricingPlans></PricingPlans>
      <section id="vps" className="container">
        <h3 className="header-3">Pay less for your hosting</h3>
        <p>At Panda Hosting, we believe in simplifying technology to </p>
        <div className="vps">
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
      <Cta></Cta>
    </>
  );
}
