import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    emailjs
      .send(
        "service_6qg613g", // Your EmailJS service ID
        "emplate_80uzd5m", // Your EmailJS template ID
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
        },
        "HYJ7GCbnafx4FkYoU" // Your EmailJS public key
      )
      .then((result) => {
        console.log("Success:", result.text);
        setIsSubmitted(true);
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error.text);
        setError("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <h3>Email Me At</h3>
              <p>vellankirajesh2004@gmail.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Location</h3>
              <p>Guntur, Andhra Pradesh, India</p>
            </div>
          </div>

          <div className="form-container">
            {isSubmitted ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h3>Message Sent Successfully!</h3>
                <p>I'll get back to you soon.</p>
                <button
                  className="send-another"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                  <div className="input-container">
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder=" "
                    />
                    <label className="form-label">Your Name</label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-container">
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder=" "
                    />
                    <label className="form-label">Your Email</label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-container">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-input form-textarea"
                      placeholder=" "
                    ></textarea>
                    <label className="form-label">Your Message</label>
                  </div>
                </div>

                {error && <div className="error-message">{error}</div>}

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="loading">
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </span>
                  ) : (
                    <span className="btn-content">
                      Send Message
                      <i className="fas fa-paper-plane"></i>
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
