import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Food Delivery App',
    description: 'A full-stack food delivery application using React, Node.js, and MongoDB.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yourusername/food-delivery-app',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'My personal portfolio to showcase my skills and projects.',
    techStack: ['React', 'CSS', 'Bootstrap'],
    link: 'https://yourportfolio.com',
  },
  {
    id: 3,
    title: 'Chat Application',
    description: 'Real-time chat app built with Socket.IO and Express.',
    techStack: ['React', 'Socket.IO', 'Express'],
    link: 'https://github.com/yourusername/chat-app',
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(({ id, title, description, techStack, link }) => (
          <div key={id} className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Tech Stack:</strong> {techStack.join(', ')}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
