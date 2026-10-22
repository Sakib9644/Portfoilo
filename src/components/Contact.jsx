import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:saadman0000@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact__container container">
        <div className="section-header">
          <span className="section-label">
            <FiSend /> Reach Out
          </span>
          <h2 className="section-title">
            Get In <span className="highlight-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open for full-time Full Stack engineering roles, web development consulting, or project collaborations.
          </p>
        </div>

        <div className="contact__grid">
          {/* Direct Details */}
          <div className="contact__info clean-card">
            <h3 className="contact__card-title">Contact Information</h3>
            <p className="contact__card-desc">
              Feel free to reach out directly via email or phone. I respond promptly to engineering inquiries and project discussions.
            </p>

            <div className="contact__list">
              <a href="mailto:saadman0000@gmail.com" className="contact__item">
                <span className="contact__icon"><FiMail /></span>
                <div>
                  <span className="contact__item-label">Email</span>
                  <span className="contact__item-val">saadman0000@gmail.com</span>
                </div>
              </a>

              <a href="tel:+8801985562100" className="contact__item">
                <span className="contact__icon"><FiPhone /></span>
                <div>
                  <span className="contact__item-label">Phone</span>
                  <span className="contact__item-val">+880 1985 562100</span>
                </div>
              </a>

              <div className="contact__item">
                <span className="contact__icon"><FiMapPin /></span>
                <div>
                  <span className="contact__item-label">Location</span>
                  <span className="contact__item-val">Middle Badda, Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            <div className="contact__socials-section">
              <span className="contact__socials-title">Profiles</span>
              <div className="contact__socials-row">
                <a
                  href="https://www.linkedin.com/in/md-sadman-sakib-661641154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-btn"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Sakib9644"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-btn"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact__form clean-card" onSubmit={handleSubmit}>
            <h3 className="contact__card-title">Send a Message</h3>

            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact__input"
                  placeholder="e.g. Alex Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email" className="contact__label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact__input"
                  placeholder="e.g. alex@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject" className="contact__label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="contact__input"
                placeholder="e.g. Full Stack Developer Role / Web Project"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                className="contact__input contact__textarea"
                rows={4}
                placeholder="Share project details, requirements, or role overview..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit-btn">
              {submitted ? (
                <>
                  <FiCheck /> Message Prepared (Check Email Client)
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
