import { FiLayout, FiServer, FiDatabase, FiCloud, FiCode } from 'react-icons/fi';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend & UI',
    icon: <FiLayout />,
    colorClass: 'skill-frontend',
    skills: [
      'React.js',
      'JavaScript (ES6+)',
      'HTML5 & Semantic UI',
      'CSS3 & Flexbox/Grid',
      'Tailwind CSS',
      'Bootstrap 4',
      'AJAX & Fetch API',
      'Responsive Web Design',
      'Blade Templates',
    ]
  },
  {
    title: 'Backend & APIs',
    icon: <FiServer />,
    colorClass: 'skill-backend',
    skills: [
      'PHP (8.x)',
      'Laravel Framework',
      'RESTful API Architecture',
      'WebSockets (Laravel Reverb)',
      'Asynchronous Queues & Jobs',
      'Laravel Scheduler',
      'Sanctum & JWT Auth',
      'Payment Gateways (Stripe, PayPal, SSLCommerz)',
    ]
  },
  {
    title: 'Databases & Storage',
    icon: <FiDatabase />,
    colorClass: 'skill-database',
    skills: [
      'MySQL',
      'Relational Schema Design',
      'Query Optimization & Indexing',
      'Eloquent ORM',
      'Migrations & Seeders',
      'AWS S3 Cloud Storage',
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: <FiCloud />,
    colorClass: 'skill-cloud',
    skills: [
      'AWS (EC2 & S3)',
      'Linux / Ubuntu VPS',
      'Nginx & Apache Web Servers',
      'Git & GitHub Version Control',
      'Postman API Testing',
      'Laravel Herd & Vite Tooling',
    ]
  },
  {
    title: 'Languages & Core Computer Science',
    icon: <FiCode />,
    colorClass: 'skill-core',
    skills: [
      'PHP',
      'Java',
      'JavaScript (ES6+)',
      'Object-Oriented Programming (OOP)',
      'MVC Architectural Pattern',
      'Data Structures & Algorithms',
    ]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="skills__container container">
        <div className="section-header">
          <span className="section-label">
            <FiCode /> Full Stack Stack
          </span>
          <h2 className="section-title">
            Skills &amp; <span className="highlight-text">Technical Expertise</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive frontend and backend engineering toolset, frameworks, cloud services, and database architectures.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skills__card clean-card">
              <div className="skills__card-header">
                <span className={`skills__icon ${cat.colorClass}`}>{cat.icon}</span>
                <h3 className="skills__title">{cat.title}</h3>
              </div>
              <div className="skills__chips">
                {cat.skills.map((s) => (
                  <span key={s} className="skills__chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
