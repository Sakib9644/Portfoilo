import { useState } from 'react';
import { FiFolder, FiExternalLink, FiGlobe, FiUserCheck, FiServer } from 'react-icons/fi';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import './Projects.css';

const categories = [
  'All (16)',
  'Built By Myself (2)',
  'Mobile Backends (4)',
  'E-Commerce (5)',
  'ERP & Enterprise (5)',
];

const allProjects = [
  // --- Built By Myself / Solo Full-Stack Projects ---
  {
    title: 'SwiftBus - Ticket Reservation Platform',
    roleTag: 'Built Single-Handedly (Full Stack)',
    tagClass: 'tag-solo',
    category: 'Built By Myself (2)',
    company: 'Personal Project',
    roleSummary: 'Full-stack development from scratch: responsive UI, dynamic search algorithm, and booking workflow.',
    description: 'Intercity bus ticket reservation platform across Bangladesh featuring dynamic route exploration, real-time trip search, seat selection, and user booking management.',
    tech: ['JavaScript', 'HTML5/CSS3', 'PHP Backend', 'Dynamic Filtering', 'Session Auth'],
    links: [
      { type: 'web', label: 'Live Platform', url: 'https://busticket.samadhan24.com/' },
    ]
  },
  {
    title: 'Fashionable.com.bd',
    roleTag: 'Sole Developer (Built From Ground Up)',
    tagClass: 'tag-solo',
    category: 'Built By Myself (2)',
    company: 'IT WAY-BD',
    roleSummary: 'Single-handedly designed and implemented all frontend UI, cart, checkout, inventory, and order lifecycle.',
    description: 'Full-scale retail lifestyle and apparel e-commerce platform engineered to handle dynamic product catalogs, inventory management, and fast customer checkout.',
    tech: ['Full Stack', 'Laravel', 'MySQL', 'Bootstrap 4', 'JavaScript', 'jQuery'],
    links: [
      { type: 'web', label: 'Live Store', url: 'https://fashionable.com.bd' },
    ]
  },

  // --- Mobile Backends (APIs, Database, AI, Queues) ---
  {
    title: 'Lystajob - Local Services Marketplace',
    roleTag: 'Backend & RESTful APIs',
    tagClass: 'tag-backend',
    category: 'Mobile Backends (4)',
    company: 'Softvence Agency',
    roleSummary: 'Engineered RESTful APIs, location search, WebSockets messaging, and push notifications.',
    description: 'On-demand local services marketplace connecting customers with verified service providers via live map discovery, dynamic quotation requests, and in-app chat.',
    tech: ['PHP', 'Laravel', 'REST API', 'MySQL', 'WebSockets', 'Push Notifications'],
    links: [
      { type: 'play', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.lystajob.carlotto&utm_source=gemini' },
      { type: 'apple', label: 'App Store', url: 'https://apps.apple.com/us/app/lystajob/id6758605988' },
    ]
  },
  {
    title: 'U Photo Studio App',
    roleTag: 'Backend APIs & Gemini AI',
    tagClass: 'tag-ai',
    category: 'Mobile Backends (4)',
    company: 'Softvence Agency',
    roleSummary: 'Integrated Google Gemini AI APIs and built scalable asynchronous background rendering queues.',
    description: 'AI-driven batch photo retouching iOS application integrating Google Gemini AI APIs for prompt-based enhancements and automated batch photo processing.',
    tech: ['PHP', 'Laravel', 'Google Gemini AI', 'Async Queues', 'REST API', 'MySQL'],
    links: [
      { type: 'apple', label: 'App Store', url: 'https://apps.apple.com/us/app/u-photo-studio/id6761320322' },
    ]
  },
  {
    title: 'Romeo Reminder',
    roleTag: 'Backend APIs & Automation',
    tagClass: 'tag-backend',
    category: 'Mobile Backends (4)',
    company: 'Softvence Agency',
    roleSummary: 'Built REST APIs, automated reminder crons via Laravel Scheduler, and cloud photo storage.',
    description: 'Relationship tracking platform helping couples celebrate anniversaries and milestones through automated timely notifications, partner sync, and gift recommendations.',
    tech: ['PHP', 'Laravel', 'Laravel Scheduler', 'Push & Email Alerts', 'AWS Cloud', 'REST API'],
    links: [
      { type: 'apple', label: 'App Store', url: 'https://apps.apple.com/il/app/romeo-reminder/id6758392313' },
    ]
  },
  {
    title: 'Propin - Real Estate Network',
    roleTag: 'Backend APIs & AWS S3 Cloud',
    tagClass: 'tag-cloud',
    category: 'Mobile Backends (4)',
    company: 'Softvence Agency',
    roleSummary: 'Built high-performance REST APIs and secure AWS S3 cloud pipelines for HD media walkthroughs.',
    description: 'Specialized professional social network and marketplace connecting real estate brokers across India to share verified listings and HD photo/video walkthroughs.',
    tech: ['PHP', 'Laravel', 'AWS S3', 'REST API', 'MySQL', 'High Concurrency'],
    links: [
      { type: 'play', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.frontfootlabs.propin&hl=en' },
    ]
  },

  // --- E-Commerce Platforms ---
  {
    title: 'HYDRAÉ - Water Filtration Store',
    roleTag: 'Backend APIs & Carrier/Payments',
    tagClass: 'tag-laravel',
    category: 'E-Commerce (5)',
    company: 'Softvence Agency',
    roleSummary: 'Built RESTful backend APIs, Stripe & PayPal checkouts, and DPD & Colissimo live shipping APIs.',
    description: 'European e-commerce store offering home water purifiers and subscription cartridge refills with automated international carrier shipping calculations.',
    tech: ['PHP', 'Laravel', 'Stripe', 'PayPal', 'DPD API', 'Colissimo API'],
    links: [
      { type: 'web', label: 'Live Website', url: 'https://xn--hydra-fsa.com/?utm_source=gemini' },
    ]
  },
  {
    title: 'NityapanyaBD Commerce',
    roleTag: 'Distributor & Cart Architecture',
    tagClass: 'tag-laravel',
    category: 'E-Commerce (5)',
    company: 'IT WAY-BD',
    roleSummary: 'Engineered Agent, Distributor hierarchies, Pickup Cart logistics, and Gift Card features.',
    description: 'Multi-tier retail and wholesale platform with distributor hierarchies, pickup point logistics, and gift card redemption workflows.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Distributor Logic', 'Gift Cards'],
    links: [
      { type: 'web', label: 'Live Store', url: 'https://nityapanyabd.com' },
    ]
  },
  {
    title: 'Click2BuyShop',
    roleTag: 'Reward Points & Guest Checkout',
    tagClass: 'tag-laravel',
    category: 'E-Commerce (5)',
    company: 'IT WAY-BD',
    roleSummary: 'Implemented points-based loyalty calculation, redemption workflows, and guest login.',
    description: 'Consumer shopping store engineered with customer loyalty reward points and frictionless guest checkout to improve user conversion.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Loyalty Points', 'JavaScript'],
    links: [
      { type: 'web', label: 'Live Store', url: 'http://click2buyshop.com.bd' },
    ]
  },
  {
    title: 'Abdullah Incubator & HK Shop',
    roleTag: 'Courier APIs & Cashback',
    tagClass: 'tag-laravel',
    category: 'E-Commerce (5)',
    company: 'IT WAY-BD',
    roleSummary: 'Integrated Steadfast Courier API for automated consignment booking, custom orders, and cashback.',
    description: 'Consumer and industrial machinery platforms featuring automated courier dispatch tracking, 1-click ordering, and order cashback incentives.',
    tech: ['PHP', 'Laravel', 'Steadfast Courier API', 'Cashback System'],
    links: [
      { type: 'web', label: 'Abdullah Incubator', url: 'http://abdullahincubator.com' },
      { type: 'web', label: 'HK Shop', url: 'http://hkshop.com.bd' },
    ]
  },
  {
    title: 'Ability for Disability Platform',
    roleTag: 'Frontend Design & Payment Gateway',
    tagClass: 'tag-frontend',
    category: 'E-Commerce (5)',
    company: 'IT WAY-BD',
    roleSummary: 'Focused on responsive frontend UI design and integrated SSLCommerz payment gateway for donations.',
    description: 'Non-profit fundraising and community support web platform with secure donation checkout and donor recognition.',
    tech: ['HTML5/CSS3', 'JavaScript', 'SSLCommerz', 'Responsive UI'],
    links: [
      { type: 'web', label: 'Live Platform', url: 'https://abilityfordisabilityfund.com' },
    ]
  },

  // --- ERP & Enterprise Systems ---
  {
    title: 'Dreamers & Founders LMS',
    roleTag: 'LMS Backend & Relational DB',
    tagClass: 'tag-ai',
    category: 'ERP & Enterprise (5)',
    company: 'Softvence Agency',
    roleSummary: 'Engineered backend APIs and relational DB for courses, live sessions, automated grading, and XP points.',
    description: 'Gamified LMS platform where students complete interactive 5-module chapters (Reading, Live, Quiz, Game, Assignments) while parents monitor child progress.',
    tech: ['PHP', 'Laravel', 'REST APIs', 'MySQL', 'XP Gamification', 'Role Auth'],
    links: [
      { type: 'web', label: 'Dashboard Portal', url: 'https://df-membership.com/dashboard' },
    ]
  },
  {
    title: 'Turjotex Garments ERP System',
    roleTag: 'Export & Import LC Modules',
    tagClass: 'tag-cloud',
    category: 'ERP & Enterprise (5)',
    company: 'IT WAY-BD',
    roleSummary: 'Developed international trade Export LC (Letter of Credit) and Import LC financial compliance modules.',
    description: 'Textile manufacturing enterprise ERP managing international trade compliance, production scheduling, and global export supply chain tracking.',
    tech: ['PHP', 'Laravel', 'MySQL', 'ERP Architecture', 'Trade LC Management'],
    links: [
      { type: 'web', label: 'Live ERP', url: 'http://turjotex.turkiabazar.com' },
    ]
  },
  {
    title: 'Nasima Medical Hospital System',
    roleTag: 'Hospital Financial Accounting',
    tagClass: 'tag-cloud',
    category: 'ERP & Enterprise (5)',
    company: 'IT WAY-BD',
    roleSummary: 'Engineered hospital accounts management, financial reconciliations, and patient billing modules.',
    description: 'Comprehensive hospital management system designed to streamline patient admissions, diagnostic prescription management, and departmental accounting.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Hospital ERP', 'Financial Accounting'],
    links: [
      { type: 'web', label: 'Live Portal', url: 'http://nasimamedicalbd.com' },
    ]
  },
  {
    title: 'SWC Broadband ISP System',
    roleTag: 'ISP Reseller & Bandwidth Engine',
    tagClass: 'tag-cloud',
    category: 'ERP & Enterprise (5)',
    company: 'IT WAY-BD',
    roleSummary: 'Built reseller tier upgrade/downgrade logic, client bandwidth package lifecycle, and billing reconciliation.',
    description: 'ISP client and bandwidth billing software managing client renewals, automated bandwidth allocation, and multi-tier reseller distribution.',
    tech: ['PHP', 'Laravel', 'MySQL', 'ISP Billing', 'Reseller Logic'],
    links: [
      { type: 'web', label: 'Live System', url: 'http://swcbroadband.itwaybdsoft.com' },
    ]
  },
  {
    title: 'Tinhih Management Portal',
    roleTag: 'Full-Stack Operational Portal',
    tagClass: 'tag-cloud',
    category: 'ERP & Enterprise (5)',
    company: 'Gigabit LLC',
    roleSummary: 'Engineered role-based administrative panels, record management, and database migrations.',
    description: 'Organizational operational portal designed during PHP with Laravel framework professional training program.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Role Management', 'MVC Pattern'],
    links: [
      { type: 'web', label: 'Live Portal', url: 'https://tinhih.com' },
    ]
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All (16)');

  const filteredProjects = activeTab === 'All (16)'
    ? allProjects
    : allProjects.filter((p) => {
        if (activeTab === 'Built By Myself (2)') {
          return p.category === 'Built By Myself (2)';
        }
        if (activeTab === 'Mobile Backends (4)') {
          return p.category === 'Mobile Backends (4)';
        }
        if (activeTab === 'E-Commerce (5)') {
          return p.category === 'E-Commerce (5)' || p.title === 'Fashionable.com.bd';
        }
        if (activeTab === 'ERP & Enterprise (5)') {
          return p.category === 'ERP & Enterprise (5)';
        }
        return true;
      });

  return (
    <section id="projects" className="projects section">
      <div className="projects__container container">
        <div className="section-header">
          <span className="section-label">
            <FiFolder /> Portfolio Work
          </span>
          <h2 className="section-title">
            Featured <span className="highlight-text">Projects &amp; Systems</span>
          </h2>
          <p className="section-subtitle">
            All 16 production platforms, mobile backends, enterprise systems, and personal projects with honest role attribution and live links.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects__filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects__tab-btn ${activeTab === cat ? 'projects__tab-btn--active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="projects__grid">
          {filteredProjects.map((p) => (
            <div key={p.title} className="projects__card clean-card">
              <div className="projects__card-top">
                <span className={`projects__card-tag ${p.tagClass}`}>{p.roleTag}</span>
                <span className="projects__card-company">{p.company}</span>
              </div>

              <h3 className="projects__card-title">{p.title}</h3>

              <div className="projects__card-role-note">
                <FiUserCheck className="projects__role-icon" />
                <span>{p.roleSummary}</span>
              </div>

              <p className="projects__card-desc">{p.description}</p>

              <div className="projects__tech-row">
                {p.tech.map((t) => (
                  <span key={t} className="projects__tech-tag">{t}</span>
                ))}
              </div>

              <div className="projects__links-row">
                {p.links.map((lnk) => (
                  <a
                    key={lnk.url}
                    href={lnk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__btn-link"
                  >
                    {lnk.type === 'play' && <FaGooglePlay size={13} />}
                    {lnk.type === 'apple' && <FaApple size={14} />}
                    {lnk.type === 'web' && <FiGlobe size={13} />}
                    <span>{lnk.label}</span>
                    <FiExternalLink size={11} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
