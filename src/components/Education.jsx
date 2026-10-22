import { FiBookOpen, FiAward, FiUsers, FiPhone, FiMail, FiExternalLink } from 'react-icons/fi';
import './Education.css';

const educationList = [
  {
    degree: 'Bachelor of Computer Science and Engineering (BCSE)',
    institution: 'International University of Business Agriculture and Technology (IUBAT)',
    year: 'Graduation: 2022',
    result: 'CGPA: 3.08 / 4.00',
    meta: 'Department of Computer Science & Engineering',
  },
  {
    degree: 'Higher Secondary Certificate (H.S.C)',
    institution: 'Govt. B.L College, Khulna',
    year: 'Passing Year: 2016',
    result: 'GPA: 3.83 / 5.00',
    meta: 'Science Group • Jashore Board',
  },
  {
    degree: 'Secondary School Certificate (S.S.C)',
    institution: 'Rotary School, Khulna',
    year: 'Passing Year: 2013',
    result: 'GPA: 5.00 / 5.00',
    meta: 'Science Group • Jashore Board',
  },
];

const certifications = [
  {
    title: 'PHP With Laravel Framework',
    issuer: 'Gigabit LLC',
    period: 'Oct 2023 – Jan 2024',
    note: 'Built Tinhih Management Portal (tinhih.com)',
    link: 'https://tinhih.com',
  },
  {
    title: 'Java Intermediate',
    issuer: 'Sololearn',
    period: 'Certified',
    note: 'Certificate ID: CCLQSPYUZF',
    link: 'https://www.sololearn.com/certificates/CCLQSPYUZF',
  },
];

const references = [
  {
    name: 'Dr. Utpal Kanti Das',
    role: 'Associate Professor & Chairman, Dept of CSE',
    institution: 'IUBAT',
    phone: '01745896035',
    email: 'ukd@iubat.edu',
  },
  {
    name: 'Rafiul Hasan Tonmoy',
    role: 'Senior Software Engineer',
    institution: 'V-generation',
    phone: '01629051870',
    email: 'rhtonmoyhd@gmail.com',
  },
];

export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="education__container container">
        <div className="section-header">
          <span className="section-label">
            <FiBookOpen /> Academic Background
          </span>
          <h2 className="section-title">
            Education &amp; <span className="highlight-text">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering education, certifications, and academic references.
          </p>
        </div>

        <div className="education__grid">
          {/* Left Column: Academic Degrees */}
          <div className="education__col">
            <h3 className="education__col-heading">
              <FiBookOpen /> Degrees
            </h3>

            <div className="education__timeline">
              {educationList.map((edu) => (
                <div key={edu.degree} className="education__item">
                  <div className="education__bullet" />
                  <div className="education__item-content">
                    <div className="education__degree-row">
                      <h4 className="education__degree">{edu.degree}</h4>
                      <span className="education__gpa">{edu.result}</span>
                    </div>
                    <p className="education__institution">{edu.institution}</p>
                    <div className="education__meta-row">
                      <span>{edu.year}</span>
                      <span className="education__sep">•</span>
                      <span>{edu.meta}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & References */}
          <div className="education__col">
            <h3 className="education__col-heading">
              <FiAward /> Certifications &amp; Training
            </h3>

            <div className="education__certs-list">
              {certifications.map((c) => (
                <div key={c.title} className="education__cert-item clean-card">
                  <div className="education__cert-top">
                    <h4 className="education__cert-title">{c.title}</h4>
                    {c.link && (
                      <a href={c.link} target="_blank" rel="noopener noreferrer" className="education__cert-verify">
                        <span>Verify</span>
                        <FiExternalLink size={11} />
                      </a>
                    )}
                  </div>
                  <p className="education__cert-meta">
                    {c.issuer} <span className="education__sep">•</span> {c.period}
                  </p>
                  <p className="education__cert-note">{c.note}</p>
                </div>
              ))}
            </div>

            <h3 className="education__col-heading" style={{ marginTop: '28px' }}>
              <FiUsers /> References
            </h3>

            <div className="education__refs-grid">
              {references.map((r) => (
                <div key={r.name} className="education__ref-item clean-card">
                  <h4 className="education__ref-name">{r.name}</h4>
                  <p className="education__ref-role">{r.role} • {r.institution}</p>
                  <div className="education__ref-links">
                    <a href={`tel:${r.phone}`} className="education__ref-link">
                      <FiPhone size={12} /> {r.phone}
                    </a>
                    <a href={`mailto:${r.email}`} className="education__ref-link">
                      <FiMail size={12} /> {r.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="education__declaration">
          &ldquo;I thus confirm that all the details furnished above are authentic and accurate to the best of my belief.&rdquo; — <strong>Md. Sadman Sakib</strong>
        </p>
      </div>
    </section>
  );
}
