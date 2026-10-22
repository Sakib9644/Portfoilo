import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <div>
            <span className="footer__brand">Md. Sadman Sakib</span>
            <p className="footer__tagline">
              Full Stack Software Developer. Specializing in high-performance Laravel APIs, interactive React.js applications, and scalable database architectures.
            </p>
          </div>

          <div className="footer__links">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>

          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/md-sadman-sakib-661641154" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Sakib9644" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:saadman0000@gmail.com" title="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} Md. Sadman Sakib. All rights reserved.</p>
          <p>Full Stack Architecture &amp; Clean Code</p>
        </div>
      </div>
    </footer>
  );
}
