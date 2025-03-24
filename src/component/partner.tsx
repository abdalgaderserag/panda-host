import React from "react";

export default function partner() {
  const partners = [
    "Dell-black.svg",
    "Dropbox-black.svg",
    "Greenhouse-black.svg",
    "mondaycom-black.svg",
    "Mural-black.svg",
    "OrangeTheory-black.svg",
    "Philips-black.svg",
    "Rakuten-black.svg",
    "Ted-black.svg",
    "Vice-black.svg",
  ];
  const renderedPartners = [];
  /*



*/
  // Using a for loop to push JSX into an array
  for (let i = 0; i < partners.length; i++) {
    renderedPartners.push(<li key={i}>{partners[i]}</li>);
  }

  return (
    <section id="pricing">
      <div className="header-2-container">
        <h2 className="header-2">Our Partner</h2>
      </div>
      <h3 className="header-3">
        Over 100+ Company <br />
        Trust us
        <div id="lazy-partners">
          <div className="outer-container">
            <div className="inner-container">
              <div className="lazy-text">
                {partners.map((partner, index) => (
                  <React.Fragment key={`original-${index}`}>
                    <img
                      src={`/layout/partners/${partner}`}
                      alt={`${partner} image`}
                    />
                  </React.Fragment>
                ))}
              </div>

              <div className="lazy-text">
                {partners.map((partner, index) => (
                  <React.Fragment key={`duplicate-${index}`}>
                    <img
                      src={`/layout/partners/${partner}`}
                      alt={`${partner} image`}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </h3>
    </section>
  );
}
