import React, { useState } from 'react';
import { MessageCircle, MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import { useForm } from '@inertiajs/react';
import styles from './ContactForm.module.css';

type InquiryType = 'Rewire' | 'LED lighting' | 'EV charger' | 'Fault finding' | 'Electrical testing' | 'Other';

const ContactForm: React.FC = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    message: '',
    inquiry: [] as InquiryType[],
    newsletter: false,
    formType: 'contact',
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleInquiry = (type: InquiryType) => {
    const exists = data.inquiry.includes(type);
    setData('inquiry', exists ? data.inquiry.filter(i => i !== type) : [...data.inquiry, type]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setData(name as any, type === 'checkbox' ? checked : value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('contact.submit'), {
      onSuccess: () => {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      },
    });
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
              <a href="mailto:templeelectricalleeds@gmail.com" className={styles.infoLink}>templeelectricalleeds@gmail.com</a>
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
              <a href="tel:+447526688808" className={styles.infoLink}>+44 7526 688808</a>
            </div>
          </div>
          <div className={styles.socialRow}>
            <a
              className={styles.socialBtn}
              href="https://www.facebook.com/p/Temple-Electrical-61572729247115/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={18} strokeWidth={2.2} />
            </a>
            <a
              className={styles.socialBtn}
              href="https://www.instagram.com/temple_electrical"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={2.2} />
            </a>
          </div>
        </aside>

        <form id="quote-form" className={styles.formCard} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>Got ideas? We’ve got the skills. Let’s team up.</h2>
          <p className={styles.formSubtitle}>Tell us more about yourself and what you’ve got in mind.</p>
          
          {submitted && (
            <div style={{ padding: '12px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px', marginBottom: '16px', border: '1px solid #c3e6cb' }}>
              Thank you for your message! We'll get back to you within 24 hours.
            </div>
          )}

          {errors.name && <div style={{ color: 'red', fontSize: '14px', marginBottom: '8px' }}>{errors.name}</div>}
          {errors.email && <div style={{ color: 'red', fontSize: '14px', marginBottom: '8px' }}>{errors.email}</div>}
          {errors.message && <div style={{ color: 'red', fontSize: '14px', marginBottom: '8px' }}>{errors.message}</div>}

          <div className={styles.fieldGroup}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" value={data.name} onChange={handleChange} required />
          </div>
          <div className={styles.fieldGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={data.email} onChange={handleChange} required />
          </div>

          <div className={styles.fieldGroup + ' ' + styles.sectionDivider}>
            <label>How can we help?</label>
            <div className={styles.checkboxGroup}>
              {inquiryOptions.map((opt) => (
                <label key={opt} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    checked={data.inquiry.includes(opt)}
                    onChange={() => toggleInquiry(opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="message">Tell us a little about the project…</label>
            <textarea id="message" name="message" value={data.message} onChange={handleChange} rows={6} />
          </div>

          <label className={styles.checkRow}>
            <input type="checkbox" name="newsletter" checked={data.newsletter} onChange={handleChange} />
            <span>Subscribe to occasional updates and tips</span>
          </label>

          <button type="submit" className={styles.submitButton} disabled={processing}>
            {processing ? 'Sending...' : "Let's get started!"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
