import { FiArrowRight, FiFileText, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              <span>Available for Full-time Roles &amp; Projects</span>
            </div>

            <h1 className="hero__name">
              Md. Sadman Sakib
            </h1>

            <p className="hero__role">
              Full Stack Software Developer <span className="hero__role-sep">•</span> Laravel &amp; React.js
            </p>

            <p className="hero__bio">
              Full Stack Software Developer with 2+ years of production experience crafting scalable <strong>Laravel RESTful APIs</strong>, relational database systems, and interactive <strong>React.js</strong> web applications. Currently engineering high-performance backends and AI integrations at <strong>Softvence Agency</strong>, with proven experience building full-stack web platforms from scratch.
            </p>

            <div className="hero__stack-pills">
              <span className="hero__pill tag-laravel">PHP &bull; Laravel</span>
              <span className="hero__pill tag-frontend">React.js &bull; JavaScript</span>
              <span className="hero__pill tag-backend">REST APIs &bull; MySQL</span>
              <span className="hero__pill tag-ai">Gemini AI</span>
              <span className="hero__pill tag-cloud">AWS S3</span>
            </div>

            <div className="hero__meta">
              <span className="hero__meta-item">
                <FiMapPin className="hero__meta-icon" /> Dhaka, Bangladesh
              </span>
              <a href="tel:+8801985562100" className="hero__meta-item hero__meta-link">
                <FiPhone className="hero__meta-icon" /> +880 1985 562100
              </a>
              <a href="mailto:saadman0000@gmail.com" className="hero__meta-item hero__meta-link">
                <FiMail className="hero__meta-icon" /> saadman0000@gmail.com
              </a>
            </div>

            <div className="hero__cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>View Selected Work</span>
                <FiArrowRight />
              </a>
              <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FiFileText />
                <span>Resume / CV</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Contact</span>
              </a>
            </div>

            <div className="hero__socials">
              <span className="hero__socials-label">Connect:</span>
              <a
                href="https://www.linkedin.com/in/md-sadman-sakib-661641154"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-icon"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/Sakib9644"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-icon"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:saadman0000@gmail.com"
                className="hero__social-icon"
                title="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__avatar-frame">
              <img
                src="/profile.png"
                alt="Md. Sadman Sakib"
                className="hero__avatar-img"
              />
              <div className="hero__avatar-caption">
                <span className="hero__caption-title">Full Stack Developer</span>
                <span className="hero__caption-company">Softvence Agency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
