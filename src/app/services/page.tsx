import HeroSection from "@/component/hero-section";
import Services from "@/component/services";

export default function services() {
  return (
    <>
      <HeroSection title={"Services"}></HeroSection>
      <Services></Services>
      <section className="container flex">
        <div>
          <img src="/layout/faq.png" alt="faq image" />
        </div>
        <div className="service">
        <div className="service-card card">
                <img src="/layout/server-pink.png" alt="server icon"/>
                <div>
                    <h3>Shared Hosting</h3>
                    <p>At Panda Hosting, we believe <br />
                    in simplifying technology.</p>
                </div>
            </div>
            <div className="service-card card">
                <img src="/layout/server-pink.png" alt="server icon"/>
                <div>
                    <h3>Shared Hosting</h3>
                    <p>At Panda Hosting, we believe <br />
                    in simplifying technology.</p>
                </div>
            </div>
            <div className="service-card card">
                <img src="/layout/server-pink.png" alt="server icon"/>
                <div>
                    <h3>Shared Hosting</h3>
                    <p>At Panda Hosting, we believe <br />
                    in simplifying technology.</p>
                </div>
            </div>
            <div className="service-card card">
                <img src="/layout/server-pink.png" alt="server icon"/>
                <div>
                    <h3>Shared Hosting</h3>
                    <p>At Panda Hosting, we believe <br />
                    in simplifying technology.</p>
                </div>
            </div>
            
        </div>
      </section>
    </>
  );
}
