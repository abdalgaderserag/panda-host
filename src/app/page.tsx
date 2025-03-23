import Hero from "@/component/hero";
import LazyText from "@/component/lazy-text";
import Testimonial from "@/component/testimonial";
import PricingPlans from "@/component/pricing-plans";
import DomainSearch from "@/component/domain-search";
import AboutUs from "@/component/about-us";
import Partner from "@/component/partner";
import Plans from "@/component/plans";
import Services from "@/component/services";
import Faq from "@/component/faq";
import Data from "@/component/data";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <LazyText></LazyText>
      <Testimonial></Testimonial>
      <PricingPlans></PricingPlans>
      <DomainSearch></DomainSearch>
      <AboutUs></AboutUs>
      <Partner></Partner>
      <Plans></Plans>
      <Services></Services>
      <Faq></Faq>
      <Data></Data>
    </>
  );
}
