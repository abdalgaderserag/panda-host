export default function pricingPlans() {
  return (
    <section id="pricing">
      <div className="header-2-container">
        <h2 className="header-2">Our Pricing</h2>
      </div>
      <h3 className="header-3">We Offer Best Pricing</h3>
      <div id="pricing-cards">
        <div className="price-card">
          <div className="price-card-header">
            <div className="price-header-icon">
              <div></div>
              <div></div>
            </div>
            <div className="price-header-text">
              <span>For individuals</span>
              <h4>Basic</h4>
            </div>
          </div>
          <div className="price-body">
            <p>
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.
            </p>
            <div className="price">
              <span>$99 </span>/monthly
            </div>
            <span>What’s included</span>
            <div className="price-feat">
              <div>
                <img src="/layout/Check Circle.svg" alt="check icon" />
                All analytics features
              </div>
              <div>
                <img src="/layout/Check Circle.svg" alt="check icon" />
                Up to 250,000 tracked visits
              </div>
              <div>
                <img src="/layout/Check Circle.svg" alt="check icon" />
                Normal support
              </div>
              <div>
                <img src="/layout/Check Circle.svg" alt="check icon" />
                Up to 3 team members
              </div>
            </div>
            <button className="button button-primary">Get started</button>
          </div>
        </div>

        <div className="price-card">
          <div className="price-card-header">
            <div className="price-header-icon">
              <div></div>
              <div className="flex">
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="price-header-text">
              <span>For startups</span>
              <h4>Pro</h4>
              <button className="price-label">Popular</button>
            </div>
          </div>
          <div className="price-body">
            <p>
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.
            </p>
            <div className="price">
              <span>$199 </span>/monthly
            </div>
            <span>What’s included</span>
            <div className="price-feat">
              <div>
                <img src="/layout/Check Circle-pink.svg" alt="check icon" />
                All analytics features
              </div>
              <div>
                <img src="/layout/Check Circle-pink.svg" alt="check icon" />
                Up to 1,000,000 tracked visits
              </div>
              <div>
                <img src="/layout/Check Circle-pink.svg" alt="check icon" />
                Premium support
              </div>
              <div>
                <img src="/layout/Check Circle-pink.svg" alt="check icon" />
                Up to 10 team members
              </div>
            </div>
            <button className="button button-primary">Get started</button>
          </div>
        </div>

        <div className="price-card">
          <div className="price-card-header">
            <div className="price-header-icon">
              <img src="/layout/enterprise.svg" alt="icon" />
            </div>
            <div className="price-header-text">
              <span>For big companies</span>
              <h4>Enterprise</h4>
            </div>
          </div>
          <div className="price-body">
            <p>
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.
            </p>
            <div className="price">
              <span>$399 </span>/monthly
            </div>
            <span>What’s included</span>
            <div className="price-feat">
              <div>
                <img src="/layout/Check Circle.svg" alt="check icon" />
                All analytics features
              </div>
              <div>
                <img src="/layout/Check Circle.svg" alt="check icon" />
                Up to 5,000,000 tracked visits
              </div>
              <div>
                <img src="/layout/Check Circle.svg" alt="check icon" />
                Normal support
              </div>
              <div>
                <img src="/layout/Check Circle.svg" alt="check icon" />
                Up to 50 team members
              </div>
            </div>
            <button className="button button-primary">Get started</button>
          </div>
        </div>
      </div>
    </section>
  );
}
