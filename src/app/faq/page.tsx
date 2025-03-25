import HeroSection from "@/component/hero-section";
import Testimonial from "@/component/testimonial";


export default function faq() {
  const image = {
    width: "30%",
    display: "flex",
    justifySelf: "center",
    marginTop: "124px",
  };

  const faqContainer = {
    justifyContent: "space-around",
  };

  const faqCol = {
    width: "40%",
  };
  return (
    <>
      <HeroSection title={"FAQ"} showFull={false}></HeroSection>
      <section>
        <img src="/layout/FAQs.png" alt="faq image" style={image} />
      </section>
      <section className="container">
        <div className="header-2-container">
          <h2 className="header-2">FAQ</h2>
        </div>
        <h3 className="header-3">Frequently Ask Questions</h3>
        <div id="faq" style={faqContainer}>
          <div className="left-faq" style={faqCol}>
            <div className="faq-card">
              How to buy from website
              <img src="/layout/cross.svg" alt="cross icon" />
            </div>
            <div className="faq-card">
              How to buy from website
              <img src="/layout/cross.svg" alt="cross icon" />
            </div>
            <div className="faq-card">
              How to buy from website
              <img src="/layout/cross.svg" alt="cross icon" />
            </div>
            <div className="faq-card">
              How to buy from website
              <img src="/layout/cross.svg" alt="cross icon" />
            </div>
          </div>
          <div className="left-faq" style={faqCol}>
            <div className="faq-card">
              How to buy from website
              <img src="/layout/cross.svg" alt="cross icon" />
            </div>
            <div className="faq-card">
              How to buy from website
              <img src="/layout/cross.svg" alt="cross icon" />
            </div>
            <div className="faq-card">
              How to buy from website
              <img src="/layout/cross.svg" alt="cross icon" />
            </div>
            <div className="faq-card">
              How to buy from website
              <img src="/layout/cross.svg" alt="cross icon" />
            </div>
          </div>
        </div>
      </section>
      <Testimonial></Testimonial>
    </>
  );
}
