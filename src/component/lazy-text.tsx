import React from "react";

export default function lazyText() {
  const services = [
    "Web Hosting",
    "Vps Hosting",
    "Shared Hosting",
    "Domain Name",
    "Search Domain",
  ];
  return (
    <div id="lazy-text">
      <div className="outer-container">
        <div className="inner-container">
          <div className="lazy-text">
            {services.map((service, index) => (
              <React.Fragment key={`original-${index}`}>
                <img src="/layout/star.svg" alt="star" />
                <span>{service}</span>
              </React.Fragment>
            ))}
          </div>

          <div className="lazy-text">
            {services.map((service, index) => (
              <React.Fragment key={`duplicate-${index}`}>
                <img src="/layout/star.svg" alt="star" />
                <span>{service}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
