import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Software Developer',
    company: 'Softvence Agency',
    period: 'May 2025 – Present',
    current: true,
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    summary: 'Lead end-to-end full stack development, high-concurrency Laravel REST APIs, interactive React user interfaces, and external AI/cloud integrations.',
    bullets: [
      'Engineered scalable REST APIs and prompt-based AI interfaces with Google Gemini AI for batch photo processing and filters (U Photo Studio).',
      'Developed real-time location discovery, interactive map UI, WebSockets messaging, and push notification infrastructure (Lystajob).',
      'Built AWS S3 cloud media pipelines for HD photos and video walkthroughs, handling multi-user concurrency (Propin).',
      'Integrated Stripe & PayPal payment gateways with automated live DPD and Colissimo shipping rate calculations (Hydrae).',
      'Developed gamified LMS student and parent web dashboards with automated quiz grading and XP scoring (Dreamers & Founders).',
    ],
    tech: ['React.js', 'PHP', 'Laravel', 'REST APIs', 'Google Gemini AI', 'AWS S3', 'Stripe', 'PayPal', 'MySQL']
  },
  {
    role: 'Junior Software Developer (Full Stack)',
    company: 'IT WAY-BD',
    period: 'Jan 2024 – Apr 2025',
    current: false,
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    summary: 'Delivered full-stack e-commerce platforms, Garments ERP modules, hospital accounting, and ISP billing systems.',
    bullets: [
      'Sole developer for Fashionable.com.bd, building the complete e-commerce experience from customer frontend to backend order lifecycle.',
      'Developed international trade Export LC & Import LC operational modules for Garments ERP (Turjotex).',
      'Built hospital financial accounting and patient billing modules (NasimaMedicalBD), and ISP reseller bandwidth billing tier logic.',
    ],
    tech: ['JavaScript', 'HTML5/CSS3', 'Bootstrap 4', 'PHP', 'Laravel', 'MySQL', 'AJAX', 'SSLCommerz']
  },
  {
    role: 'PHP / Laravel Developer Intern',
    company: 'Gigabit LLC',
    period: 'Oct 2023 – Jan 2024',
    current: false,
    location: 'Dhaka, Bangladesh',
    type: 'Internship',
    summary: 'Focused on backend engineering standards, MVC architecture, and relational database migrations with Laravel.',
    bullets: [
      'Engineered full-stack organizational management portal Tinhih Management Portal (tinhih.com).',
      'Implemented role-based access control (RBAC), relational database migrations, and clean MVC business logic.',
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'Git', 'HTML5/CSS3']
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="experience__container container">
        <div className="section-header">
          <span className="section-label">
            <FiBriefcase /> Career
          </span>
          <h2 className="section-title">
            Work <span className="highlight-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Professional track record engineering production backends, interactive frontends, APIs, and business systems.
          </p>
        </div>

        <div className="experience__list">
          {experiences.map((exp) => (
            <div key={exp.company} className="experience__item clean-card">
              <div className="experience__header">
                <div>
                  <div className="experience__role-row">
                    <h3 className="experience__role">{exp.role}</h3>
                    {exp.current && <span className="experience__badge-current">Current</span>}
                    <span className="experience__badge-type">{exp.type}</span>
                  </div>
                  <h4 className="experience__company">{exp.company}</h4>
                </div>

                <div className="experience__meta">
                  <span className="experience__period">
                    <FiCalendar size={13} /> {exp.period}
                  </span>
                  <span className="experience__location">
                    <FiMapPin size={13} /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="experience__summary">{exp.summary}</p>

              <ul className="experience__bullets">
                {exp.bullets.map((b, idx) => (
                  <li key={idx} className="experience__bullet">
                    <span className="experience__bullet-dot" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="experience__tech-row">
                {exp.tech.map((t) => (
                  <span key={t} className="experience__tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
