import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const key = process.env.REACT_APP_WEB3FORMS_KEY || 'd91dd035-4d5d-489c-a2db-f72cfa08af87';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: key,
          subject: `📩 New Portfolio Message from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        console.error('Web3Forms submission error:', data);
        setStatus('error');
      }
    } catch (err) {
      console.error('Error submitting message:', err);
      setStatus('error');
    }
  };

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:anshku.docs@gmail.com',
      icon: (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__header">
          <p className="contact__eyebrow">Let's connect</p>
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-sub contact__sub">
            Have a project in mind, a collaboration idea, or just want to say hi?
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info Panel */}
          <div className="contact__info glass-card">
            <h3>Let's Build Something</h3>
            <p>
              I'm currently open to freelance projects and full-time opportunities
              in data engineering, ML, or backend development.
            </p>
            <div className="contact__socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  id={`contact-social-${s.label.toLowerCase()}`}
                >
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="contact__form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project…"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === 'sent' && (
              <div className="form-success">✅ Message sent! I'll get back to you soon.</div>
            )}
            {status === 'error' && (
              <div className="form-error" style={{ color: '#ff6b6b', marginTop: '1rem' }}>
                ❌ Failed to send message. Please check your network or try again later.
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={status === 'sending'}
              id="contact-submit-btn"
            >
              {status === 'sending' ? (
                <>
                  <div className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }} />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
