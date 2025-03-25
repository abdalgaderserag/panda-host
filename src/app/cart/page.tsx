export default function cart() {
  return (
    <>
      <section className="container">
        <div className="cart-offer">
          <div>+ 2 months free with 48-month plans</div>
          <div>02 : 20 : 11 : 05</div>
        </div>
        <h2 className="cart-header">Cart</h2>
        <div className="card-container">
          <div className="card-col">
            <div className="header-3">Premium Web Hosting</div>
            <div className="cart-plan">
              <select
                name="plan-select"
                id="plan-select"
                className="input-text"
              >
                <option value="48">48 month</option>
              </select>
              <span className="cart-dark-bg">Save US$ 441.60</span>
              <div>
                $5.99/month <br />{" "}
                <span className="cart-delete">$5.99/month</span>
              </div>
            </div>
            <div className="cart-note">
              Renews at US$6.99/month on 04/07/2029. You can cancel anytime!
            </div>
          </div>
          <div className="card-col">
            <div className="cart-col-header">
              <div className="header-3">Price</div>
              <div className="cart-col-header-price">
                <span className="cart-delete">$899</span>$59
              </div>
            </div>
            <div className="cart-note">
              Subtotal does not include applicable taxes.
            </div>
            <div className="flex">
              <div>Discount -79%</div>
              <div>US$ -50</div>
            </div>
            <p>Do you have a coupon code?</p>
            <button className="button button-primary button-sharper">
              Confirm
            </button>
          </div>
        </div>
        <div>
          <svg
            className="shield"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
          <span>30 Day Money Back Guarantee</span>
        </div>
        <br /><br /><br /><br />
      </section>
    </>
  );
}
