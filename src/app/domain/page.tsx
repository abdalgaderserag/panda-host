import DomainSearch from "@/component/domain-search";
import Testimonial from "@/component/testimonial";
import Faq from "@/component/faq";
import Cta from "@/component/cta";

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
      <section id="hero-section" className="container">
        <div className="left-section" style={mainContainer}>
          <h1 className="button button-primary">Hosting For All Businesses</h1>
          <div>
            Domain Name <br /> Search
          </div>
          <svg
            width="266"
            height="14"
            viewBox="0 0 266 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11C46.6923 4.96301 163.462 -3.48877 265 11"
              stroke="url(#paint0_linear_1_276)"
              strokeWidth="6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_276"
                x1="301.66"
                y1="-33.3189"
                x2="436.136"
                y2="-192.222"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E1345A" />
                <stop offset="1" stopColor="#6525AF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
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
