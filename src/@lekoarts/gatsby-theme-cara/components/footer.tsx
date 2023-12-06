/** @jsx jsx */
import { jsx } from "theme-ui"
import { config } from '../../../config';
// import '../../../assets/sass/main.scss';

export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>
          Our team is eager to hear from you. We're committed to providing you with not just a response, but a thoughtful and tailored solution or answer. By filling out the form below, you're taking the first step towards a meaningful conversation. We are here to assist you every step of the way. Expect a prompt and attentive reply from one of our team members who will be dedicated to addressing your specific needs.
        </p>


        <form action="https://getform.io/f/c193da41-aa30-4cf6-afbc-19e080ee796d" method="POST">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows={4}></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
        <ul className="contact">
          {/*<li className="fa-home">{config.address}</li>*/}

          <li className="fa-phone">{config.phone}</li>

          {config.socialLinks.map((social: { icon: string, url: string}) => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>&copy; Epicware. All rights reserved.</li>
        </ul>
      </div>
    </section>
  );
}