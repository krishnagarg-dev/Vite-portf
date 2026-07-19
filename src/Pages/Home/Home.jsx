import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import ContactPage from '../ContactPage/ContactPage';
import Header from '../../Components/Header/Header';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import Services from '../../Components/ServiceCard/ServiceCard';
import About from '../About/About';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Header />
        <About />
        <Services />
        <ProjectCard />
        <ContactPage />
      </main>
    </>
  );
}
