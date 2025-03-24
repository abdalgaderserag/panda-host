import HeroSection from "@/component/hero-section";
import Cta from "@/component/cta";

export default function contact() {
  return (
    <>
      <HeroSection title={"Contact Us"}></HeroSection>
      <section className="container">
        <h3 className="header-3">Send Us Message</h3>
        <div className="flex">
          <div className="contact-col">
            <label htmlFor="name">Name</label>
            <input
              className="input-text"
              type="text"
              name="name"
              id="name"
              placeholder="enter name"
            />{" "}
            <br />
            <br />
            <label htmlFor="counter">Counter</label>
            <input
              className="input-text"
              type="text"
              name="counter"
              id="counter"
              placeholder="enter counter name"
            />
          </div>
          <br />
          <div className="contact-col">
            <label htmlFor="phone">Phone</label>
            <input
              className="input-text"
              type="text"
              name="phone"
              id="phone"
              placeholder="enter phone number"
            />{" "}
            <br />
            <br />
            <label htmlFor="birthday">Birthday</label>
            <input
              className="input-text"
              type="text"
              name="birthday"
              id="birthday"
              placeholder="enter birthday"
            />
          </div>
        </div>
        <br />

        <div className="contact-col">
          <label htmlFor="message">Send Message</label>
          <textarea
            className="input-text"
            name="message"
            id="message"
            placeholder="write your message"
          ></textarea>
        </div>
        <div className="message-button">
          <button className="button button-primary">Send Message</button>
        </div>
      </section>

      <section className="container contact-container">
        <div className="contact-icons flex">
          <div>
            <img src="/layout/phone.svg" alt="phone icon" />
          </div>
          <div>
            <img src="/layout/email.svg" alt="email icon" />
          </div>
          <div>
            <img src="/layout/location.svg" alt="location icon" />
          </div>
        </div>

        <div className="contact-text">
          <div className="flex">
            <p>
              12345678 <br />
              12345678
            </p>
            <p>
              panda_host@info <br />
              panda_host@info
            </p>
            <p>Egypt - cairo</p>
          </div>
        </div>
        <img id="map" src="/layout/map.png" alt="map" />
      </section>
      <Cta></Cta>
    </>
  );
}
