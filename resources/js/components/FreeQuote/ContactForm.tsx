import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', details: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <form id="quote-form" className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="details">Project Details</label>
        <textarea id="details" name="details" value={form.details} onChange={handleChange} rows={5} required />
      </div>
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default ContactForm;
