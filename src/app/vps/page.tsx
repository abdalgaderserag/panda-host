import HeroSection from "@/component/hero-section";
import PricingPlans from "@/component/pricing-plans";
import Cta from "@/component/cta";
import React from "react";

export default function vps() {
  const vpsPlans = [
    {
      name: "1-VPS",
      vcpu: "VCPU",
      memory: "Memory",
      cpu: "2.4GHz",
      storage: "200GB",
      geek: 100,
      bandwidth: "1000TB",
      price: "$3/mo",
    },
    {
      name: "2-VPS",
      vcpu: "VCPU",
      memory: "Memory",
      cpu: "2.4GHz",
      storage: "200GB",
      geek: 100,
      bandwidth: "1000TB",
      price: "$3/mo",
    },
    {
      name: "3-VPS",
      vcpu: "VCPU",
      memory: "Memory",
      cpu: "2.4GHz",
      storage: "200GB",
      geek: 100,
      bandwidth: "1000TB",
      price: "$3/mo",
    },
    {
      name: "4-VPS",
      vcpu: "VCPU",
      memory: "Memory",
      cpu: "2.4GHz",
      storage: "200GB",
      geek: 100,
      bandwidth: "1000TB",
      price: "$3/mo",
    },
    {
      name: "5-VPS",
      vcpu: "VCPU",
      memory: "Memory",
      cpu: "2.4GHz",
      storage: "200GB",
      geek: 100,
      bandwidth: "1000TB",
      price: "$3/mo",
    },
    {
      name: "6-VPS",
      vcpu: "VCPU",
      memory: "Memory",
      cpu: "2.4GHz",
      storage: "200GB",
      geek: 100,
      bandwidth: "1000TB",
      price: "$3/mo",
    },
  ];
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
      <section className="container vps-table-sec">
        <div id="vps-table-sec">
          <h3 className="header-3">
            Building one high performance site <br />
            our plans flex to your needs
          </h3>
          <table className="full">
            <thead>
              <tr>
                <th></th>
                <th>VCPU</th>
                <th>Memory</th>
                <th>CPU</th>
                <th>Storage</th>
                <th>Bandwidth</th>
                <th>Geek</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {vpsPlans.map((vps, index) => (
                <React.Fragment key={`vps-${index}`}>
                  <tr className={!(index % 2) ? "" : "vps-row"}>
                    <th>{vps.name}</th>
                    <th>{vps.vcpu}</th>
                    <th>{vps.memory}</th>
                    <th>{vps.cpu}</th>
                    <th>{vps.memory}</th>
                    <th>{vps.geek}</th>
                    <th>{vps.storage}</th>
                    <th>{vps.price}</th>
                    <th>
                      select plan{"  "}
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 7L1 7M17 7L11 13M17 7L11 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </th>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Cta></Cta>
    </>
  );
}
