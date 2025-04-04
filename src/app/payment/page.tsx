export default function payment() {
  const expand = {
    width: "16px",
    height: "15px",
    padding: "10px",
  };

  const marginTop = {
    marginTop: "5px",
  };
  return (
    <>
      <section className="container">
        <br />
        <br />
        <br />
        <br />
        <div className="card-container" id="billing">
          <div className="card-col">
            <div className="header-3">Billing Address</div>
            <div className="flex">
              <div className="contact-col">
                <label htmlFor="first_name">First Name</label>
                <input
                  className="input-text"
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="enter first name"
                />
                <br />
                <label htmlFor="phone">Phone</label>
                <input
                  className="input-text"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="enter phone"
                />
                <br />
                <label htmlFor="address">Address</label>
                <input
                  className="input-text"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="enter address"
                />
                <br />
                <label htmlFor="area">Area</label>
                <input
                  className="input-text"
                  type="text"
                  name="area"
                  id="area"
                  placeholder="enter area name"
                />
              </div>
              <br />
              <div className="contact-col">
                <label htmlFor="last_name">Last Name</label>
                <input
                  className="input-text"
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="enter last name"
                />
                <br />
                <label htmlFor="country">Country</label>
                <input
                  className="input-text"
                  type="text"
                  name="country"
                  id="country"
                  placeholder="enter country"
                />
                <br />
                <label htmlFor="city">City</label>
                <input
                  className="input-text"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="enter city"
                />
                <br />
                <label htmlFor="zip">Zip Code</label>
                <input
                  className="input-text"
                  type="text"
                  name="zip"
                  id="zip"
                  placeholder="123456"
                />
              </div>
            </div>
            <br />
            <button className="button button-primary button-sharper">
              Confirm
            </button>
          </div>

          <div className="card-col">
            <div className="cart-col-header">
              <div className="header-3">Price</div>
            </div>
            <div>
              <div className="flex">
                <div>48 month plan</div>
                <div>US$ -50</div>
              </div>
              <div className="flex">
                <div>Domain Name</div>
                <div>US$ -50</div>
              </div>
              <div className="flex">
                <div>2 additional months</div>
                <div>US$ -50</div>
              </div>
              <div className="flex">
                <div>Discount -79%</div>
                <div>US$ -50</div>
              </div>
            </div>
            <hr />

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
            <hr />
            <div className="cart-col-header">
              <div className="header-3">Price Total</div>
              <div className="cart-col-header-price">$96</div>
            </div>
            <p>Do you have a coupon code?</p>
            <button className="button button-primary button-sharper">
              Confirm
            </button>
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
          </div>
        </div>
        <br />
        <div className="card-container payment-gate" id="billing">
          <div className="card-col">
            <div className="header-3">Payment</div>
            <div className="card-col">
              <div className="flex">
                <div>
                  <label>Card</label>
                </div>
                <div className="flex">
                  <img src="/layout/payment.svg" alt="payment gateway images" />
                  <svg
                    style={expand}
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 6L6 1L1 6"
                      stroke="#220E39"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex">
                <div className="contact-col">
                  <label htmlFor="card_name">Name on card</label>
                  <input
                    className="input-text"
                    type="text"
                    name="card_name"
                    id="card_name"
                    placeholder="enter name"
                  />
                  <br />
                  <label htmlFor="expire_date">Expire Date</label>
                  <input
                    className="input-text"
                    type="text"
                    name="expire_date"
                    id="expire_date"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
                <br />
                <div className="contact-col">
                  <label htmlFor="card_number">Card Number</label>
                  <input
                    className="input-text"
                    type="text"
                    name="card_number"
                    id="card_number"
                    placeholder="1234 5678 1245"
                  />
                  <br />
                  <label htmlFor="cvc">CVC</label>
                  <input
                    className="input-text"
                    type="text"
                    name="cvc"
                    id="cvc"
                    placeholder="567"
                  />
                </div>
              </div>
              <br />
              <button className="button button-primary button-sharper">
                Confirm
              </button>

              <div>
                <svg
                  className="shield"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8.42985V5C12 2.79086 10.2091 1 8 1C5.79086 1 4 2.79086 4 5V8.42985M12 8.42985C10.9876 8.12675 9.67527 8 8 8C6.32473 8 5.01243 8.12675 4 8.42985M12 8.42985C14.2226 9.09522 15 10.6104 15 13.5C15 17.7059 13.3529 19 8 19C2.64706 19 1 17.7059 1 13.5C1 10.6104 1.77744 9.09522 4 8.42985"
                    stroke="#220E39"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span>30 Day Money Back Guarantee</span>
              </div>
              <p className="payment-note">
                By verifying, you agree to the Terms of Service and confirm that
                you have read the Privacy Policy. You can cancel recurring
                payments at any time.
              </p>
            </div>
            <br />
            <div className="card-col">
              <div className="flex">
                <div>
                  <label>PayPal</label>
                </div>
                <div className="flex">
                  <svg
                    style={marginTop}
                    width="90"
                    height="24"
                    viewBox="0 0 90 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_13514)">
                      <path
                        d="M16.8316 2.57208C15.7912 1.3863 13.9106 0.87793 11.5049 0.87793H4.52257C4.28442 0.877804 4.05404 0.962679 3.87289 1.11728C3.69174 1.27189 3.57172 1.48606 3.53442 1.72128L0.62839 20.1611C0.614916 20.2466 0.620146 20.3341 0.643721 20.4174C0.667296 20.5007 0.708655 20.578 0.764949 20.6438C0.821243 20.7096 0.891133 20.7624 0.969805 20.7986C1.04848 20.8348 1.13406 20.8535 1.22066 20.8534H5.53123L6.61384 13.9867L6.58028 14.2017C6.61687 13.967 6.73609 13.753 6.91646 13.5984C7.09684 13.4438 7.3265 13.3587 7.56408 13.3584H9.61247C13.6366 13.3584 16.7874 11.7239 17.7079 6.99576C17.7352 6.85592 17.7588 6.71982 17.7793 6.58682C18.0528 4.83923 17.7769 3.6491 16.8316 2.57208Z"
                        fill="#003087"
                      />
                      <path
                        d="M69.6008 11.346C69.3373 13.0762 68.016 13.0762 66.7383 13.0762H66.0112L66.5214 9.84572C66.5525 9.65057 66.7203 9.50701 66.9179 9.50701H67.2516C68.1217 9.50701 68.9433 9.50701 69.3671 10.0024C69.6201 10.2988 69.6965 10.7388 69.6008 11.346ZM69.0446 6.83155H64.2244C64.0648 6.83163 63.9104 6.88861 63.789 6.99226C63.6675 7.09591 63.587 7.23945 63.5619 7.3971L61.6142 19.7565C61.6052 19.8138 61.6088 19.8723 61.6246 19.9281C61.6404 19.9839 61.668 20.0356 61.7057 20.0797C61.7434 20.1238 61.7901 20.1593 61.8428 20.1836C61.8954 20.2079 61.9527 20.2206 62.0107 20.2207H64.4842C64.7148 20.2207 64.9111 20.0529 64.9472 19.8254L65.5003 16.3203C65.5513 15.9953 65.8322 15.7548 66.1616 15.7548H67.6867C70.8624 15.7548 72.6945 14.2191 73.1731 11.1732C73.3887 9.84199 73.1818 8.79542 72.5584 8.0627C71.8729 7.25727 70.6573 6.83155 69.0446 6.83155Z"
                        fill="#009CDE"
                      />
                      <path
                        d="M35.222 11.3478C34.9585 13.078 33.6373 13.078 32.3589 13.078H31.6318L32.142 9.84755C32.1731 9.6524 32.3409 9.50884 32.5385 9.50884H32.8722C33.7423 9.50884 34.5639 9.50884 34.9877 10.0041C35.2413 10.3006 35.3177 10.7406 35.222 11.3478ZM34.6658 6.83338H29.8456C29.5163 6.83338 29.2353 7.07327 29.1838 7.39893L27.2354 19.7582C27.2264 19.8155 27.2298 19.8741 27.2456 19.93C27.2613 19.9858 27.289 20.0376 27.3267 20.0817C27.3644 20.1259 27.4112 20.1613 27.4639 20.1856C27.5166 20.2099 27.5739 20.2225 27.6319 20.2225H29.9339C30.2633 20.2225 30.5436 19.9826 30.5951 19.6569L31.1215 16.3227C31.1725 15.997 31.4534 15.7572 31.7828 15.7572H33.3079C36.4836 15.7572 38.3158 14.2209 38.7943 11.175C39.0099 9.84382 38.803 8.79725 38.1796 8.06453C37.4942 7.25909 36.2786 6.83338 34.6658 6.83338ZM45.8568 15.7851C45.633 17.1039 44.5871 17.9895 43.2515 17.9895C42.5822 17.9895 42.0459 17.7738 41.7016 17.3662C41.3597 16.9622 41.2317 16.3861 41.3399 15.7453C41.5474 14.4378 42.6114 13.5242 43.9264 13.5242C44.5821 13.5242 45.1135 13.7417 45.4652 14.1531C45.8188 14.5676 45.9581 15.1469 45.8568 15.7851ZM49.0735 11.2918H46.7654C46.6694 11.2917 46.5766 11.3259 46.5036 11.3883C46.4307 11.4506 46.3824 11.537 46.3676 11.6318L46.2669 12.2769L46.1053 12.0432C45.6057 11.3179 44.4914 11.0749 43.3789 11.0749C40.829 11.0749 38.6507 13.0077 38.2269 15.7174C38.0063 17.0703 38.3195 18.3624 39.0864 19.2642C39.7905 20.0926 40.7954 20.4375 41.993 20.4375C44.0489 20.4375 45.1887 19.1175 45.1887 19.1175L45.0855 19.7588C45.0764 19.8162 45.0799 19.8749 45.0957 19.9308C45.1115 19.9867 45.1392 20.0385 45.177 20.0826C45.2147 20.1267 45.2616 20.1621 45.3144 20.1864C45.3671 20.2107 45.4245 20.2232 45.4826 20.2231H47.5608C47.8902 20.2231 48.1711 19.9838 48.2227 19.6575L49.4706 11.7567C49.4796 11.6993 49.4761 11.6406 49.4602 11.5847C49.4443 11.5289 49.4165 11.4771 49.3787 11.4329C49.3409 11.3888 49.294 11.3534 49.2412 11.3292C49.1884 11.3049 49.1316 11.2917 49.0735 11.2918Z"
                        fill="#003087"
                      />
                      <path
                        d="M80.236 15.7852C80.0123 17.104 78.9663 17.9896 77.6308 17.9896C76.9615 17.9896 76.4251 17.7739 76.0808 17.3663C75.739 16.9623 75.611 16.3862 75.7191 15.7454C75.9267 14.4379 76.99 13.5243 78.3057 13.5243C78.9614 13.5243 79.4927 13.7418 79.8445 14.1532C80.1981 14.5677 80.3373 15.147 80.236 15.7852ZM83.4528 11.2919H81.1446C81.0487 11.2918 80.9558 11.326 80.8829 11.3884C80.8099 11.4507 80.7617 11.5371 80.7469 11.6319L80.6462 12.277L80.4846 12.0433C79.9849 11.318 78.8706 11.075 77.7582 11.075C75.2089 11.075 73.0306 13.0078 72.6061 15.7175C72.3855 17.0704 72.6994 18.3625 73.4663 19.2643C74.1704 20.0927 75.1753 20.4376 76.3729 20.4376C78.4294 20.4376 79.5692 19.1176 79.5692 19.1176L79.466 19.7589C79.4567 19.8162 79.46 19.8749 79.4757 19.9308C79.4913 19.9867 79.5189 20.0385 79.5566 20.0827C79.5942 20.1268 79.641 20.1623 79.6938 20.1865C79.7465 20.2108 79.8039 20.2233 79.8619 20.2232H81.9395C82.2689 20.2232 82.5498 19.9839 82.602 19.6576L83.8499 11.7568C83.8589 11.6994 83.8553 11.6407 83.8395 11.5848C83.8236 11.529 83.7958 11.4772 83.758 11.433C83.7202 11.3889 83.6733 11.3535 83.6205 11.3293C83.5677 11.305 83.5109 11.2918 83.4528 11.2919Z"
                        fill="#009CDE"
                      />
                      <path
                        d="M61.3664 11.2915H59.0458C58.824 11.2915 58.617 11.4015 58.4927 11.5855L55.2921 16.2988L53.9354 11.7694C53.894 11.6313 53.8092 11.5101 53.6936 11.424C53.578 11.3378 53.4377 11.2911 53.2934 11.2909H51.0132C50.9493 11.2909 50.8863 11.3062 50.8294 11.3355C50.7726 11.3647 50.7235 11.4071 50.6863 11.4591C50.6492 11.5112 50.6249 11.5713 50.6156 11.6346C50.6063 11.6978 50.6122 11.7624 50.6329 11.8229L53.1872 19.3216L50.7845 22.7118C50.7421 22.772 50.717 22.8427 50.7119 22.9161C50.7069 22.9896 50.7221 23.0631 50.756 23.1285C50.7899 23.1939 50.841 23.2487 50.9039 23.287C50.9668 23.3253 51.039 23.3456 51.1127 23.3457H53.4308C53.6495 23.3457 53.8553 23.2382 53.9808 23.058L61.6958 11.9223C61.7377 11.8621 61.7623 11.7916 61.767 11.7184C61.7716 11.6452 61.7561 11.5722 61.7222 11.5072C61.6882 11.4422 61.6371 11.3877 61.5744 11.3497C61.5117 11.3117 61.4398 11.2916 61.3664 11.2915Z"
                        fill="#003087"
                      />
                      <path
                        d="M86.1731 7.17283L84.1943 19.7584C84.1853 19.8158 84.1889 19.8744 84.2047 19.9302C84.2205 19.9861 84.2483 20.0378 84.286 20.0819C84.3237 20.126 84.3706 20.1615 84.4233 20.1858C84.476 20.21 84.5334 20.2226 84.5914 20.2227H86.5808C86.9101 20.2227 87.191 19.9828 87.2426 19.6571L89.1935 7.29713C89.2025 7.23976 89.1991 7.18111 89.1833 7.12522C89.1675 7.06932 89.1398 7.01752 89.102 6.97339C89.0642 6.92925 89.0174 6.89383 88.9646 6.86958C88.9118 6.84532 88.8544 6.8328 88.7963 6.83289H86.5702C86.4744 6.83264 86.3816 6.86674 86.3088 6.92899C86.2359 6.99124 86.1878 7.07814 86.1731 7.17283Z"
                        fill="#009CDE"
                      />
                      <path
                        d="M16.8316 2.57208C15.7912 1.3863 13.9106 0.87793 11.5049 0.87793H4.52257C4.28442 0.877804 4.05404 0.962679 3.87289 1.11728C3.69174 1.27189 3.57172 1.48606 3.53442 1.72128L0.62839 20.1611C0.614916 20.2466 0.620146 20.3341 0.643721 20.4174C0.667296 20.5007 0.708655 20.578 0.764949 20.6438C0.821243 20.7096 0.891133 20.7624 0.969805 20.7986C1.04848 20.8348 1.13406 20.8535 1.22066 20.8534H5.53123L6.61384 13.9867L6.58028 14.2017C6.61687 13.967 6.73609 13.753 6.91646 13.5984C7.09684 13.4438 7.3265 13.3587 7.56408 13.3584H9.61247C13.6366 13.3584 16.7874 11.7239 17.7079 6.99576C17.7352 6.85592 17.7588 6.71982 17.7793 6.58682C18.0528 4.83923 17.7769 3.6491 16.8316 2.57208Z"
                        fill="#003087"
                      />
                      <path
                        d="M7.77539 6.61054C7.80805 6.40501 7.9129 6.21786 8.0711 6.08266C8.22931 5.94746 8.43052 5.87307 8.63862 5.87284H14.1126C14.7608 5.87284 15.3655 5.9151 15.918 6.00335C16.2201 6.05195 16.5189 6.11878 16.8129 6.20347C17.1468 6.29734 17.4699 6.42607 17.7768 6.58754C18.0515 4.83933 17.7756 3.65044 16.8303 2.5728C15.7893 1.38764 13.9094 0.879272 11.5036 0.879272H4.52071C4.28277 0.87944 4.05269 0.964449 3.8718 1.11903C3.69091 1.2736 3.57107 1.48762 3.53381 1.72262L0.626536 20.1606C0.61297 20.2461 0.618111 20.3336 0.641604 20.4169C0.665098 20.5003 0.706385 20.5776 0.762622 20.6434C0.818858 20.7093 0.888707 20.7622 0.967353 20.7985C1.046 20.8347 1.13158 20.8535 1.21818 20.8535H5.52937L6.61198 13.9862L7.77539 6.61054Z"
                        fill="#003087"
                      />
                      <path
                        d="M17.7774 6.5863C17.7561 6.72304 17.7323 6.85937 17.706 6.99524C16.7856 11.7228 13.6347 13.3579 9.61061 13.3579H7.5616C7.32406 13.3581 7.09441 13.4432 6.91411 13.5979C6.73382 13.7525 6.61476 13.9665 6.57843 14.2013L5.52937 20.8523L5.23106 22.7391C5.2192 22.814 5.22373 22.8906 5.24432 22.9636C5.26492 23.0366 5.3011 23.1043 5.35037 23.1619C5.39964 23.2196 5.46082 23.2659 5.52971 23.2976C5.59859 23.3293 5.67354 23.3457 5.74938 23.3457H9.38315C9.81322 23.3457 10.1786 23.0325 10.2464 22.608L10.2818 22.4228L10.9667 18.0824L11.0102 17.8425C11.0427 17.6368 11.1476 17.4495 11.306 17.3143C11.4644 17.1791 11.6658 17.1048 11.874 17.1048H12.4178C15.9379 17.1048 18.6941 15.6754 19.4996 11.5389C19.8352 9.81115 19.6611 8.36746 18.7724 7.35383C18.4902 7.03957 18.1531 6.77947 17.7774 6.5863Z"
                        fill="#009CDE"
                      />
                      <path
                        d="M16.8132 6.20283C16.6728 6.16119 16.528 6.1239 16.3788 6.09096C16.2297 6.05802 16.0755 6.02881 15.9177 6.00396C15.3646 5.91384 14.7605 5.87158 14.1117 5.87158H8.63833C8.43 5.87133 8.22844 5.94562 8.07011 6.08104C7.91179 6.21645 7.80714 6.40404 7.77509 6.6099L6.61169 13.9869L6.57812 14.2013C6.61445 13.9665 6.73352 13.7525 6.91382 13.5978C7.09412 13.4432 7.32377 13.3581 7.56131 13.3579H9.61031C13.6344 13.3579 16.7853 11.7234 17.7057 6.99521C17.733 6.85538 17.756 6.7199 17.7771 6.58628C17.5341 6.45909 17.2809 6.35225 17.0202 6.26684C16.9524 6.24447 16.8834 6.22396 16.8132 6.20283Z"
                        fill="#012169"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_13514">
                        <rect width="90" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    style={expand}
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 6L6 1L1 6"
                      stroke="#220E39"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <br />
            <div className="card-col">
              <div className="flex">
                <div>
                  <label>Google Pay</label>
                </div>
                <div className="flex">
                  <svg
                    style={marginTop}
                    width="55"
                    height="24"
                    viewBox="0 0 55 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_13545)">
                      <path
                        d="M26.6472 13.1479V19.3128H24.6934V4.09464H29.8753C31.1253 4.07037 32.3267 4.54366 33.2369 5.41743C34.1471 6.23052 34.6568 7.40768 34.6325 8.62125C34.6568 9.84696 34.1471 11.0241 33.2369 11.8493C32.3267 12.711 31.2102 13.1479 29.8874 13.1479H26.6472ZM26.6472 5.96354V11.279H29.9238C30.652 11.3032 31.3559 11.012 31.8534 10.4901C32.885 9.49502 32.8971 7.8567 31.902 6.82517L31.8534 6.77663C31.3559 6.24266 30.652 5.9514 29.9238 5.97567L26.6472 5.96354ZM39.1348 8.56057C40.579 8.56057 41.7197 8.94892 42.5571 9.71346C43.3945 10.4901 43.8071 11.546 43.8071 12.893V19.3007H41.9382V17.8565H41.8532C41.0401 19.0458 39.9722 19.6405 38.6251 19.6405C37.4844 19.6405 36.5135 19.3007 35.749 18.6211C34.9966 17.99 34.5718 17.0556 34.5961 16.0726C34.5961 14.9925 35.0087 14.143 35.8218 13.4998C36.6349 12.8566 37.7271 12.5411 39.0863 12.5411C40.2513 12.5411 41.1979 12.7595 41.9503 13.1721V12.7231C41.9503 12.0557 41.6591 11.4246 41.1494 10.9998C40.6275 10.5387 39.9601 10.2838 39.2683 10.2838C38.1761 10.2838 37.3145 10.745 36.6713 11.6673L34.948 10.5872C35.8825 9.24017 37.2781 8.56057 39.1348 8.56057ZM36.6106 16.1211C36.6106 16.6308 36.8533 17.1041 37.2538 17.3954C37.6907 17.7352 38.2247 17.9172 38.7708 17.9051C39.596 17.9051 40.3848 17.5774 40.9673 16.9949C41.6105 16.3881 41.9382 15.6721 41.9382 14.8469C41.3314 14.3614 40.4819 14.1187 39.3897 14.1187C38.6009 14.1187 37.9334 14.3129 37.3994 14.6891C36.8776 15.0774 36.6106 15.5507 36.6106 16.1211ZM54.535 8.90037L48.006 23.9001H45.9915L48.4186 18.6575L44.1226 8.91251H46.2463L49.3409 16.3881H49.3895L52.4113 8.91251L54.535 8.90037Z"
                        fill="#5F6368"
                      />
                      <path
                        d="M18.7471 11.8128C18.7471 11.2182 18.6985 10.6235 18.6015 10.041H10.3613V13.4026H15.0821C14.8879 14.4827 14.2569 15.4535 13.3346 16.0603V18.2447H16.1501C17.8005 16.7278 18.7471 14.4827 18.7471 11.8128Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M10.3618 20.3559C12.7162 20.3559 14.7064 19.5793 16.1506 18.2443L13.3351 16.0599C12.5463 16.5939 11.539 16.8973 10.3618 16.8973C8.08033 16.8973 6.15076 15.356 5.45902 13.293H2.55859V15.5502C4.03915 18.487 7.06094 20.3559 10.3618 20.3559Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.459 13.2938C5.09493 12.2137 5.09493 11.0365 5.459 9.94432V7.69922H2.55857C1.94227 8.91396 1.62109 10.2569 1.62109 11.619C1.62109 12.9812 1.94227 14.3241 2.55857 15.5389L5.459 13.2938Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M10.3618 6.34006C11.6118 6.31579 12.8133 6.78908 13.7113 7.65071L16.1991 5.1629C14.6215 3.67021 12.5341 2.85712 10.3618 2.88139C7.06094 2.88139 4.03915 4.75028 2.55859 7.69926L5.45902 9.95649C6.15076 7.88129 8.08033 6.34006 10.3618 6.34006Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_13545">
                        <rect width="55" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    style={expand}
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 6L6 1L1 6"
                      stroke="#220E39"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="card-col card-col-borderless"></div>
          </div>
          <div className="card-col card-col-borderless"></div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
    </>
  );
}
