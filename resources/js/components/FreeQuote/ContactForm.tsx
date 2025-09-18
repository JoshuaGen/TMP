import React, { useState } from 'react';
import { MessageCircle, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import styles from './ContactForm.module.css';

type InquiryType = 'Rewire' | 'LED lighting' | 'EV charger' | 'Fault finding' | 'Electrical testing' | 'Other';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    inquiry: [] as InquiryType[],
    newsletter: false,
  });

  const toggleInquiry = (type: InquiryType) => {
    setForm((prev) => {
      const exists = prev.inquiry.includes(type);
      return { ...prev, inquiry: exists ? prev.inquiry.filter(i => i !== type) : [...prev.inquiry, type] };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend or email service
    console.log('Contact form submitted', form);
  };

  const inquiryOptions: InquiryType[] = ['Rewire', 'LED lighting', 'EV charger', 'Fault finding', 'Electrical testing', 'Other'];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <aside className={styles.infoPane} aria-label="Contact options">
          <div className={styles.brandRow}>
            <span className={styles.brandDot} aria-hidden="true" />
            <span className={styles.brandText}>Temple Electrical</span>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon} aria-hidden>
              <MessageCircle size={18} color="#fff" strokeWidth={2.5} />
            </div>
            <div>
              <div className={styles.infoTitle}>Chat to us</div>
              <div className={styles.infoDesc}>Our friendly team is here to help.</div>
              <a href="mailto:info@templeelectrical.co.uk" className={styles.infoLink}>info@templeelectrical.co.uk</a>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon} aria-hidden>
              <MapPin size={18} color="#fff" strokeWidth={2.5} />
            </div>
            <div>
              <div className={styles.infoTitle}>Visit us</div>
              <div className={styles.infoDesc}>Come say hello at our office HQ.</div>
              <div className={styles.infoLink}>Leeds, West Yorkshire</div>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon} aria-hidden>
              <Phone size={18} color="#fff" strokeWidth={2.5} />
            </div>
            <div>
              <div className={styles.infoTitle}>Call us</div>
              <div className={styles.infoDesc}>Mon–Fri from 8am to 5pm.</div>
              <a href="tel:+44113XXXXXXX" className={styles.infoLink}>+44 (0)113 XXX XXXX</a>
            </div>
          </div>
          <div className={styles.socialRow}>
            <a className={styles.socialBtn} href="#" aria-label="Facebook">
              <Facebook size={18} strokeWidth={2.2} />
            </a>
            <a className={styles.socialBtn} href="#" aria-label="Twitter">
              <Twitter size={18} strokeWidth={2.2} />
            </a>
            <a className={styles.socialBtn} href="#" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={2.2} />
            </a>
            <a className={styles.socialBtn} href="#" aria-label="Instagram">
              <Instagram size={18} strokeWidth={2.2} />
            </a>
          </div>
        </aside>

        <form id="quote-form" className={styles.formCard} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>Got ideas? We’ve got the skills. Let’s team up.</h2>
          <p className={styles.formSubtitle}>Tell us more about yourself and what you’ve got in mind.</p>
          <div className={styles.fieldGroup}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>

          <div className={styles.fieldGroup + ' ' + styles.sectionDivider}>
            <label>How can we help?</label>
            <div className={styles.checkboxGroup}>
              {inquiryOptions.map((opt) => (
                <label key={opt} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    checked={form.inquiry.includes(opt)}
                    onChange={() => toggleInquiry(opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="message">Tell us a little about the project…</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={6} />
          </div>

          <label className={styles.checkRow}>
            <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} />
            <span>Subscribe to occasional updates and tips</span>
          </label>

          <button type="submit" className={styles.submitButton}>Let’s get started!</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
