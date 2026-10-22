import { FiUser, FiCheck } from 'react-icons/fi';
import './About.css';

export default function About() {
  const softSkills = [
    'Fast Adaptability',
    'Good Communicator',
    'Problem Solver',
    'Maintains Work Ethic',
    'Team Player'
  ];

  return (
    <section id="about" className="about section">
      <div className="about__container container">
        <div className="section-header">
          <span className="section-label">
            <FiUser /> Overview
          </span>
          <h2 className="section-title">
            About <span className="highlight-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Full Stack Developer dedicated to end-to-end web architecture, clean code, and intuitive user experiences.
          </p>
        </div>

        <div className="about__grid">
          {/* Left Column: Career Objective & Story */}
          <div className="about__narrative">
            <div className="about__quote">
              <span className="about__quote-title">Career Objective</span>
              <p className="about__quote-text">
                &ldquo;I want to build a fulfilling career in a growing company, tackling challenging roles. With hard work and a real love for doing great things, I aim to learn, get better, and help both myself and the company succeed. I&apos;m committed to making a meaningful impact that boosts the company&apos;s value and overall success.&rdquo;
              </p>
            </div>

            <div className="about__story">
              <p className="about__text">
                I am a <strong>Full Stack Software Developer</strong> currently engineering production web &amp; mobile backends at <strong>Softvence Agency</strong> (since May 2025). My daily engineering involves building responsive <strong>React.js</strong> client interfaces, architecting resilient <strong>Laravel RESTful APIs</strong>, asynchronous queues, and integrating cloud and AI capabilities such as <strong>Google Gemini AI</strong>, <strong>AWS S3</strong>, <strong>Stripe</strong>, <strong>PayPal</strong>, and carrier APIs (DPD, Colissimo).
              </p>
              <p className="about__text">
                Previously, as a <strong>Junior Software Developer</strong> at <strong>IT WAY-BD</strong> (Jan 2024 – Apr 2025), I single-handedly developed complete full-stack e-commerce platforms (Fashionable.com.bd) from user catalog to checkout and administrative controls, Garments ERP international trade modules (Export &amp; Import LC workflows), hospital accounting systems, and ISP bandwidth automation.
              </p>
            </div>
          </div>

          {/* Right Column: Quick Profile Summary Card */}
          <div className="about__sidebar">
            <div className="about__card clean-card">
              <h3 className="about__card-heading">Quick Facts</h3>

              <div className="about__facts-list">
                <div className="about__fact">
                  <span className="about__fact-label">Current Role</span>
                  <span className="about__fact-value">Full Stack Developer @ Softvence Agency</span>
                </div>
                <div className="about__fact">
                  <span className="about__fact-label">Core Focus</span>
                  <span className="about__fact-value">Laravel Backend + React.js Frontend</span>
                </div>
                <div className="about__fact">
                  <span className="about__fact-label">Experience</span>
                  <span className="about__fact-value">2+ Years Production Web Engineering</span>
                </div>
                <div className="about__fact">
                  <span className="about__fact-label">Education</span>
                  <span className="about__fact-value">B.Sc in CSE, IUBAT (2022)</span>
                </div>
              </div>

              <div className="about__card-divider" />

              <h4 className="about__sub-heading">Soft Skills</h4>
              <div className="about__skills-wrap">
                {softSkills.map((s) => (
                  <span key={s} className="about__chip">
                    <FiCheck className="about__chip-icon" />
                    <span>{s}</span>
                  </span>
                ))}
              </div>

              <div className="about__card-divider" />

              <h4 className="about__sub-heading">Languages</h4>
              <div className="about__lang-list">
                <div className="about__lang-row">
                  <span className="about__lang-name">Bangla:</span>
                  <span className="about__lang-desc">Native / Fluent</span>
                </div>
                <div className="about__lang-row">
                  <span className="about__lang-name">English:</span>
                  <span className="about__lang-desc">Speaking (Above Average), Reading &amp; Writing (Good)</span>
                </div>
              </div>

              <div className="about__card-divider" />

              <h4 className="about__sub-heading">Interests</h4>
              <p className="about__interests">
                Problem Solving, Logical Reasoning, Cyber Security, Machine Learning, Reading Books &amp; Cricket.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
