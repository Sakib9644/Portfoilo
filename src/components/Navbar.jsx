import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiFileText, FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check saved theme or system preference
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['about', 'education', 'experience', 'projects', 'skills', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  };

  const handleClick = (href) => {
    setIsMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" onClick={() => handleClick('#home')}>
          <span className="navbar__logo-name">Sadman Sakib</span>
          <span className="navbar__logo-tag">Full Stack Dev</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            onClick={toggleTheme}
            className="navbar__btn-theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="navbar__btn-resume">
            <FiFileText />
            <span>Resume</span>
          </a>

          <button
            className="navbar__toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="navbar__mobile">
          <ul className="navbar__mobile-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__mobile-link ${activeSection === link.href.slice(1) ? 'navbar__mobile-link--active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="navbar__mobile-resume">
                View Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
