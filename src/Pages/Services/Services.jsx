import React from 'react';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  return (
    <div>
      <h1>My Services</h1>
      <ServiceCard title="Web Development" description="Build amazing websites." />
      <ServiceCard title="Mobile Apps" description="Create awesome mobile apps." />
    </div>
  );
}
