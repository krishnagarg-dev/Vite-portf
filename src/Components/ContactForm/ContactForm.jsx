import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setResponse(data.message);
        setForm({ name: '', email: '', message: '' });
      } else {
        setResponse(data.error || 'Something went wrong');
      }
    } catch (error) {
      setResponse('Error: ' + error.message);
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          required
        />

        <button type="submit">Send</button>
      </form>

      {response && <div className="response-message">{response}</div>}
    </div>
  );
}
