import { useState } from 'react';
import { FiFolder, FiExternalLink, FiGlobe, FiCheckCircle, FiBriefcase, FiUser, FiSmartphone, FiMonitor } from 'react-icons/fi';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import './Projects.css';

const categories = [
  'All (16)',
  'Softvence Agency (6)',
  'IT WAY-BD (8)',
  'Gigabit LLC (1)',
  'Personal Project (1)',
];

const allProjects = [
  // ==========================================
  // --- 1. Softvence Agency (May 2025 – Present) ---
  // ==========================================
  {
    id: 'lystajob',
    title: 'Lystajob - Local Services Marketplace',
    roleTag: 'Backend & RESTful APIs',
    tagClass: 'tag-backend',
    type: 'app',
    company: 'Softvence Agency',
    about: 'A local services marketplace connecting customers directly with service providers via live map discovery and direct in-app messaging.',
    keyContributions: [
      'Developed RESTful APIs and optimized database structures for location-based service provider searches.',
      'Engineered real-time in-app messaging and live map-based service discovery.',
      'Implemented automated push notification delivery to keep customers and providers instantly updated.'
    ],
    tech: ['PHP', 'Laravel', 'REST API', 'MySQL', 'WebSockets', 'Push Notifications'],
    links: [
      { type: 'play', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.lystajob.carlotto&utm_source=gemini' },
      { type: 'apple', label: 'App Store', url: 'https://apps.apple.com/us/app/lystajob/id6758605988' },
    ]
  },
  {
    id: 'romeo-reminders',
    title: 'Romeo Reminders',
    roleTag: 'Backend APIs & Automation',
    tagClass: 'tag-backend',
    type: 'app',
    company: 'Softvence Agency',
    about: 'A relationship management platform designed to help couples save and organize their partner’s important dates, such as birthdays, anniversaries, and other special occasions.',
    keyContributions: [
      'Built RESTful APIs and developed dual push notification and email delivery reminder systems.',
      'Implemented customizable notification and email preferences for personalized alerts.',
      'Added Laravel Scheduler crons to automate timely reminder dispatches before and after events.',
      'Developed partner profile management, date tracking, and secure cloud-based photo storage.'
    ],
    tech: ['PHP', 'Laravel', 'Laravel Scheduler', 'Push & Email Alerts', 'AWS Cloud', 'REST API'],
    links: [
      { type: 'apple', label: 'App Store', url: 'https://apps.apple.com/il/app/romeo-reminder/id6758392313' },
    ]
  },
  {
    id: 'u-photo-studio',
    title: 'U Photo Studio',
    roleTag: 'Backend APIs & Gemini AI',
    tagClass: 'tag-ai',
    type: 'app',
    company: 'Softvence Agency',
    about: 'An AI-powered batch photo editing iOS app that allows users to quickly retouch large quantities of photos tailored to custom user prompts and preferences.',
    keyContributions: [
      'Built REST APIs and integrated Google Gemini AI APIs for prompt-based photo enhancements.',
      'Developed scalable asynchronous backend processing queues for high-volume batch image editing.',
      'Engineered approval, reprocessing, and high-resolution media export workflows.'
    ],
    tech: ['PHP', 'Laravel', 'Google Gemini AI', 'Async Queues', 'REST API', 'MySQL'],
    links: [
      { type: 'apple', label: 'App Store', url: 'https://apps.apple.com/us/app/u-photo-studio/id6761320322' },
    ]
  },
  {
    id: 'propin',
    title: 'Propin - Real Estate Network',
    roleTag: 'Backend APIs & AWS S3 Cloud',
    tagClass: 'tag-cloud',
    type: 'app',
    company: 'Softvence Agency',
    about: 'A specialized social network and marketplace connecting real estate agents, brokers, and property consultants across India to share listings, discover verified requirements, and collaborate on deals.',
    keyContributions: [
      'Developed and optimized high-performance RESTful APIs for listing creation and folder-wise property organization.',
      'Designed and implemented secure AWS S3 cloud storage pipelines for HD property photos and video walkthroughs directly from the app.',
      'Streamlined property data retrieval for fast collaboration across broker networks.'
    ],
    tech: ['PHP', 'Laravel', 'AWS S3', 'REST API', 'MySQL', 'High Concurrency'],
    links: [
      { type: 'play', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.frontfootlabs.propin&hl=en' },
    ]
  },
  {
    id: 'hydrae',
    title: 'HYDRAÉ - Water Filtration Store',
    roleTag: 'Backend APIs & Payments',
    tagClass: 'tag-laravel',
    type: 'web',
    company: 'Softvence Agency',
    about: 'An e-commerce store offering advanced water filtration systems, tap filters, and purifiers to deliver safe drinking water directly at home.',
    keyContributions: [
      'Developed RESTful APIs supporting complete customer shopping cart and order lifecycles.',
      'Integrated Stripe and PayPal payment gateways for secure checkout and subscription transactions.',
      'Integrated DPD and Colissimo courier APIs for real-time international shipping calculations and shipment tracking.'
    ],
    tech: ['PHP', 'Laravel', 'Stripe', 'PayPal', 'DPD API', 'Colissimo API'],
    links: [
      { type: 'web', label: 'Live Website', url: 'https://xn--hydra-fsa.com/?utm_source=gemini' },
    ]
  },
  {
    id: 'dreamers-founders',
    title: 'Dreamers & Founders Platform',
    roleTag: 'LMS Backend & Relational DB',
    tagClass: 'tag-ai',
    type: 'web',
    company: 'Softvence Agency',
    about: 'A gamified Learning Management System (LMS) and student/parent portal where students complete live sessions featuring structured chapters with 5 core modules (Reading, Live, Quiz, Game, and Assignments) to earn XP points, while parents can log in to monitor their child\'s overall learning progress.',
    keyContributions: [
      'Developed backend APIs and database structures for LMS admin, managing live sessions, classes, courses, and chapters.',
      'Built teacher portal features to create classes, assign courses, upload chapters, and supervise student assignments.',
      'Developed separate student and parent login portals to complete modules and monitor learning progress.',
      'Implemented automated grading and XP gamification system to track weekly progress and global rankings.'
    ],
    tech: ['PHP', 'Laravel', 'REST APIs', 'MySQL', 'XP Gamification', 'Role Auth'],
    links: [
      { type: 'web', label: 'Dashboard Portal', url: 'https://df-membership.com/dashboard' },
    ]
  },

  // ==========================================
  // --- 2. IT WAY-BD (Jan 2024 – Apr 2025) ---
  // ==========================================
  {
    id: 'fashionable',
    title: 'Fashionable.com.bd',
    roleTag: 'Sole Developer (Built From Ground Up)',
    tagClass: 'tag-solo',
    type: 'web',
    subType: 'ecommerce',
    company: 'IT WAY-BD',
    about: 'Full-scale retail lifestyle and apparel e-commerce platform engineered to handle dynamic product catalogs, inventory management, and fast customer checkout.',
    keyContributions: [
      'Single-handedly designed and implemented all customer frontend UI, shopping cart, and order lifecycle.',
      'Built administrative inventory controls, product variant management, and category hierarchies.',
      'Integrated responsive mobile-first layouts with optimized MySQL relational queries for fast page loads.'
    ],
    tech: ['Full Stack', 'Laravel', 'MySQL', 'Bootstrap 4', 'JavaScript', 'jQuery'],
    links: [
      { type: 'web', label: 'Live Store', url: 'https://fashionable.com.bd' },
    ]
  },
  {
    id: 'turjotex',
    title: 'Turjotex Garments ERP System',
    roleTag: 'Export & Import LC Modules',
    tagClass: 'tag-cloud',
    type: 'web',
    subType: 'erp',
    company: 'IT WAY-BD',
    about: 'Textile manufacturing enterprise ERP managing international trade compliance, production scheduling, and global export supply chain tracking.',
    keyContributions: [
      'Developed international trade Export LC (Letter of Credit) and Import LC financial compliance modules.',
      'Engineered production batch tracking, material requisition, and export consignment status reporting.',
      'Implemented role-based administrative dashboards for compliance officers and factory managers.'
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'ERP Architecture', 'Trade LC Management'],
    links: [
      { type: 'web', label: 'Live ERP', url: 'http://turjotex.turkiabazar.com' },
    ]
  },
  {
    id: 'nityapanya',
    title: 'NityapanyaBD Commerce',
    roleTag: 'Distributor & Cart Architecture',
    tagClass: 'tag-laravel',
    type: 'web',
    subType: 'ecommerce',
    company: 'IT WAY-BD',
    about: 'Multi-tier retail and wholesale platform with distributor hierarchies, pickup point logistics, and gift card redemption workflows.',
    keyContributions: [
      'Engineered multi-tier agent and distributor pricing hierarchies and order routing logic.',
      'Developed pickup point cart logistics and gift card redemption mechanisms.',
      'Built backend order fulfillment workflows with automated commission calculations.'
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'Distributor Logic', 'Gift Cards'],
    links: [
      { type: 'web', label: 'Live Store', url: 'https://nityapanyabd.com' },
    ]
  },
  {
    id: 'click2buy',
    title: 'Click2BuyShop',
    roleTag: 'Reward Points & Guest Checkout',
    tagClass: 'tag-laravel',
    type: 'web',
    subType: 'ecommerce',
    company: 'IT WAY-BD',
    about: 'Consumer shopping store engineered with customer loyalty reward points and frictionless guest checkout to improve user conversion.',
    keyContributions: [
      'Implemented points-based loyalty calculation and dynamic checkout redemption workflows.',
      'Designed frictionless guest checkout flow reducing customer cart abandonment rates.',
      'Structured relational database schemas for high-speed catalog browsing and filtering.'
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'Loyalty Points', 'JavaScript'],
    links: [
      { type: 'web', label: 'Live Store', url: 'http://click2buyshop.com.bd' },
    ]
  },
  {
    id: 'abdullah-hk',
    title: 'Abdullah Incubator & HK Shop',
    roleTag: 'Courier APIs & Cashback',
    tagClass: 'tag-laravel',
    type: 'web',
    subType: 'ecommerce',
    company: 'IT WAY-BD',
    about: 'Consumer and industrial machinery platforms featuring automated courier dispatch tracking, 1-click ordering, and order cashback incentives.',
    keyContributions: [
      'Integrated Steadfast Courier API for automated consignment creation and real-time parcel tracking.',
      'Developed 1-click direct ordering mechanisms for rapid consumer purchases.',
      'Implemented promotional cashback incentives and customer credit balance logic.'
    ],
    tech: ['PHP', 'Laravel', 'Steadfast Courier API', 'Cashback System', 'MySQL'],
    links: [
      { type: 'web', label: 'Abdullah Incubator', url: 'http://abdullahincubator.com' },
      { type: 'web', label: 'HK Shop', url: 'http://hkshop.com.bd' },
    ]
  },
  {
    id: 'nasima-medical',
    title: 'Nasima Medical Hospital System',
    roleTag: 'Hospital Financial Accounting',
    tagClass: 'tag-cloud',
    type: 'web',
    subType: 'erp',
    company: 'IT WAY-BD',
    about: 'Comprehensive hospital management system designed to streamline patient admissions, diagnostic prescription management, and departmental accounting.',
    keyContributions: [
      'Engineered hospital accounts management, financial reconciliations, and patient billing modules.',
      'Developed diagnostic report management and admission fee calculation workflows.',
      'Implemented audit-compliant financial ledger recording for hospital administration.'
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'Hospital ERP', 'Financial Accounting'],
    links: [
      { type: 'web', label: 'Live Portal', url: 'http://nasimamedicalbd.com' },
    ]
  },
  {
    id: 'swc-broadband',
    title: 'SWC Broadband ISP System',
    roleTag: 'ISP Reseller & Bandwidth Engine',
    tagClass: 'tag-cloud',
    type: 'web',
    subType: 'erp',
    company: 'IT WAY-BD',
    about: 'ISP client and bandwidth billing software managing client renewals, automated bandwidth allocation, and multi-tier reseller distribution.',
    keyContributions: [
      'Built reseller tier upgrade/downgrade business logic and automated renewal notifications.',
      'Developed client bandwidth package lifecycle management and billing reconciliations.',
      'Structured administrative reporting dashboards for network operators and ISP resellers.'
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'ISP Billing', 'Reseller Logic'],
    links: [
      { type: 'web', label: 'Live System', url: 'http://swcbroadband.itwaybdsoft.com' },
    ]
  },
  {
    id: 'ability-for-disability',
    title: 'Ability for Disability Platform',
    roleTag: 'Frontend Design & Payment Gateway',
    tagClass: 'tag-frontend',
    type: 'web',
    subType: 'ecommerce',
    company: 'IT WAY-BD',
    about: 'Non-profit fundraising and community support web platform with secure donation checkout and donor recognition.',
    keyContributions: [
      'Focused on responsive frontend UI design with accessible navigation across all screen sizes.',
      'Integrated SSLCommerz payment gateway for secure multi-channel donation processing.',
      'Engineered donor acknowledgment receipts and fundraising campaign milestone tracking.'
    ],
    tech: ['HTML5/CSS3', 'JavaScript', 'SSLCommerz', 'Responsive UI'],
    links: [
      { type: 'web', label: 'Live Platform', url: 'https://abilityfordisabilityfund.com' },
    ]
  },

  // ==========================================
  // --- 3. Gigabit LLC (Oct 2023 – Jan 2024) ---
  // ==========================================
  {
    id: 'tinhih',
    title: 'Tinhih Management Portal',
    roleTag: 'Full-Stack Operational Portal',
    tagClass: 'tag-cloud',
    type: 'web',
    company: 'Gigabit LLC',
    about: 'Organizational operational portal designed during PHP with Laravel framework professional training program.',
    keyContributions: [
      'Engineered role-based administrative panels, record management, and database migrations.',
      'Implemented secure user authentication and clean MVC architectural structure.',
      'Built responsive administrative views for organizational staff and member records.'
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'Role Management', 'MVC Pattern'],
    links: [
      { type: 'web', label: 'Live Portal', url: 'https://tinhih.com' },
    ]
  },

  // ==========================================
  // --- 4. Personal Projects ---
  // ==========================================
  {
    id: 'swiftbus',
    title: 'Bus Ticket Reservation Platform (SwiftBus)',
    roleTag: 'Built Single-Handedly (Full Stack)',
    tagClass: 'tag-solo',
    type: 'web',
    company: 'Personal Project',
    isPersonal: true,
    about: 'A full-stack intercity bus ticket reservation platform designed to streamline travel across major destinations in Bangladesh, featuring real-time trip searches, interactive route explorations, user authentication, and a responsive contact management portal.',
    keyContributions: [
      'Built the entire full-stack application from scratch using HTML, CSS, JavaScript, and custom backend logic.',
      'Engineered secure user authentication endpoints to handle passenger logins, account creation, and session security.',
      'Designed dynamic search and filtering algorithms allowing users to query trips by origin, destination, and dates.',
      'Integrated dynamic UI elements for trending destinations, route cards, and an interactive customer support messaging module.'
    ],
    tech: ['JavaScript', 'HTML5/CSS3', 'PHP Backend', 'Dynamic Filtering', 'Session Auth'],
    links: [
      { type: 'web', label: 'SwiftBus Platform', url: 'https://busticket.samadhan24.com/' },
    ]
  },
];

const companySections = [
  {
    company: 'Softvence Agency',
    tab: 'Softvence Agency (6)',
    role: 'Full Stack Software Developer',
    period: 'May 2025 – Present',
    badge: '6 Production Projects',
    icon: FiBriefcase,
    filters: [
      { id: 'all', label: 'All', count: 6 },
      { id: 'app', label: 'App', count: 4, icon: FiSmartphone },
      { id: 'web', label: 'Web', count: 2, icon: FiMonitor },
    ],
    projects: allProjects.filter((p) => p.company === 'Softvence Agency'),
  },
  {
    company: 'IT WAY-BD',
    tab: 'IT WAY-BD (8)',
    role: 'Junior Software Developer',
    period: 'Jan 2024 – Apr 2025',
    badge: '8 Enterprise & E-Commerce Projects',
    icon: FiBriefcase,
    filters: [
      { id: 'all', label: 'All', count: 8 },
      { id: 'ecommerce', label: 'E-Commerce', count: 5, icon: FiGlobe },
      { id: 'erp', label: 'ERP & Systems', count: 3, icon: FiFolder },
    ],
    projects: allProjects.filter((p) => p.company === 'IT WAY-BD'),
  },
  {
    company: 'Gigabit LLC',
    tab: 'Gigabit LLC (1)',
    role: 'PHP / Laravel Developer Intern',
    period: 'Oct 2023 – Jan 2024',
    badge: '1 Operational Portal',
    icon: FiBriefcase,
    filters: [
      { id: 'all', label: 'All', count: 1 },
      { id: 'web', label: 'Web Portal', count: 1, icon: FiMonitor },
    ],
    projects: allProjects.filter((p) => p.company === 'Gigabit LLC'),
  },
  {
    company: 'Personal Project',
    tab: 'Personal Project (1)',
    role: 'Solo Full-Stack Architecture',
    period: 'Independent Engineering',
    badge: '1 Live Platform',
    icon: FiUser,
    filters: [
      { id: 'all', label: 'All', count: 1 },
      { id: 'web', label: 'Web Platform', count: 1, icon: FiMonitor },
    ],
    projects: allProjects.filter((p) => p.company === 'Personal Project'),
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All (16)');
  const [subFilters, setSubFilters] = useState({
    'Softvence Agency': 'all',
    'IT WAY-BD': 'all',
    'Gigabit LLC': 'all',
    'Personal Project': 'all',
  });

  const handleSubFilter = (company, filterId) => {
    setSubFilters((prev) => ({
      ...prev,
      [company]: filterId,
    }));
  };

  const visibleSections = activeTab === 'All (16)'
    ? companySections
    : companySections.filter((sec) => sec.tab === activeTab);

  return (
    <section id="projects" className="projects section">
      <div className="projects__container container">
        <div className="section-header">
          <span className="section-label">
            <FiFolder /> Portfolio Work
          </span>
          <h2 className="section-title">
            Projects <span className="highlight-text">Worked On</span>
          </h2>
          <p className="section-subtitle">
            All 16 production platforms, mobile backends, enterprise ERPs, and personal projects organized company-wise with App &amp; Web filters and live links.
          </p>
        </div>

        {/* Top Company Filter Tabs */}
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

        {/* Company-Wise Sections */}
        <div className="projects__companies-wrap">
          {visibleSections.map((section) => {
            const IconComponent = section.icon;
            const currentSubFilter = subFilters[section.company] || 'all';

            const filteredCompanyProjects = section.projects.filter((p) => {
              if (currentSubFilter === 'all') return true;
              if (currentSubFilter === 'app') return p.type === 'app';
              if (currentSubFilter === 'web') return p.type === 'web';
              if (currentSubFilter === 'ecommerce') return p.subType === 'ecommerce';
              if (currentSubFilter === 'erp') return p.subType === 'erp';
              return true;
            });

            return (
              <div key={section.company} className="projects__company-block">
                {/* Company Group Header with App / Web Sub-Navbar */}
                <div className="projects__company-banner">
                  <div className="projects__company-banner-left">
                    <div className="projects__company-icon-box">
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <div className="projects__company-title-row">
                        <h3 className="projects__company-heading">{section.company}</h3>
                        <span className="projects__company-badge">{section.badge}</span>
                      </div>
                      <p className="projects__company-meta">
                        <span>{section.role}</span>
                        <span className="projects__company-dot">•</span>
                        <span>{section.period}</span>
                      </p>
                    </div>
                  </div>

                  {/* Inside Section Navbar: Select App / Web */}
                  {section.filters && section.filters.length > 1 && (
                    <div className="projects__subnav" role="tablist">
                      {section.filters.map((f) => {
                        const FilterIcon = f.icon;
                        const isSubActive = currentSubFilter === f.id;
                        return (
                          <button
                            key={f.id}
                            type="button"
                            className={`projects__subnav-btn ${isSubActive ? 'projects__subnav-btn--active' : ''}`}
                            onClick={() => handleSubFilter(section.company, f.id)}
                          >
                            {FilterIcon && <FilterIcon size={12} className="projects__subnav-icon" />}
                            <span>{f.label}</span>
                            <span className="projects__subnav-count">({f.count})</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Company Projects Grid */}
                <div className="projects__grid">
                  {filteredCompanyProjects.map((p) => {
                    const isFeatured = p.isPersonal;
                    return (
                      <div
                        key={p.id}
                        className={`projects__card clean-card ${isFeatured ? 'projects__card--featured' : ''}`}
                      >
                        {isFeatured ? (
                          /* Featured Full-Width Split Layout for SwiftBus */
                          <div className="projects__featured-layout">
                            <div className="projects__featured-main">
                              <div className="projects__card-top">
                                <span className={`projects__card-tag ${p.tagClass}`}>{p.roleTag}</span>
                                <span className="projects__card-company">{p.company}</span>
                              </div>

                              <h3 className="projects__card-title">{p.title}</h3>
                              <p className="projects__card-about">{p.about}</p>

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
                                    className="projects__btn-link projects__btn-link--primary"
                                  >
                                    <FiGlobe size={14} />
                                    <span>{lnk.label}</span>
                                    <FiExternalLink size={12} />
                                  </a>
                                ))}
                              </div>
                            </div>

                            <div className="projects__featured-side">
                              <div className="projects__contributions">
                                <div className="projects__contributions-header">
                                  <FiCheckCircle className="projects__contributions-icon" />
                                  <span>Key Contributions &amp; Architectural Work</span>
                                </div>
                                <ul className="projects__contributions-list">
                                  {p.keyContributions.map((contrib, idx) => (
                                    <li key={idx} className="projects__contribution-item">
                                      <span className="projects__bullet-dot" />
                                      <span className="projects__contribution-text">{contrib}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Standard 2-Column Card Layout */
                          <>
                            <div className="projects__card-top">
                              <span className={`projects__card-tag ${p.tagClass}`}>{p.roleTag}</span>
                              <span className="projects__card-company">{p.company}</span>
                            </div>

                            <h3 className="projects__card-title">{p.title}</h3>

                            <p className="projects__card-about">{p.about}</p>

                            <div className="projects__contributions">
                              <div className="projects__contributions-header">
                                <FiCheckCircle className="projects__contributions-icon" />
                                <span>Key Contributions</span>
                              </div>
                              <ul className="projects__contributions-list">
                                {p.keyContributions.map((contrib, idx) => (
                                  <li key={idx} className="projects__contribution-item">
                                    <span className="projects__bullet-dot" />
                                    <span className="projects__contribution-text">{contrib}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

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
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
