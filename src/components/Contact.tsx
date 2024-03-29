import "../css/contact.css";

const Footer = () => {
  return (
    <div id="contactContainer" className="section-container">
      <div className="section-title">Get In Touch</div>
      <div className="section-paragraph-container">
        <p>
          Currently I&#39;m not looking for new opportunities, If you have
          interest on me please contact me through the email, I'm always up to
          having a chat with new people.
        </p>
        <div className="btn-contact-container">
          <a href="mailto: yanxun951224@gmail.com" className="btn-contact">
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
