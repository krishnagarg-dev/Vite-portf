import React from 'react';
import './ServiceCard.css';

const services = [
  {
    title: 'Frontend Development',
    icon: '🖥️',
    description: 'Building responsive and interactive user interfaces using React.js, HTML, CSS, JavaScript, and Bootstrap.',
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    description: 'Creating robust REST APIs using Node.js, Express.js, and handling business logic and authentication securely.',
  },
  {
    title: 'Database Management',
    icon: '🗄️',
    description: 'Designing and managing databases using SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) technologies.',
  },
  {
    title: 'Deployment & DevOps',
    icon: '🚀',
    description: 'Deploying web applications on platforms like Vercel, Netlify, or using Docker and cloud services like AWS.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section section">
      <h2 className="services-title">Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={index} tabIndex="0" aria-label={service.title}>
            <div className="service-icon" aria-hidden="true">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
