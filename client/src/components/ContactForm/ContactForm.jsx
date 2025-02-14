import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmissionStatus(null); // Reset status

      try {
          const response = await axios.post('https://my-portfolio-az98.onrender.com/contacts/add', { // Adjust URL if needed
              name,
              email,
              message
          });
          console.log('Submission successful:', response.data);
          setSubmissionStatus('success');
          setName('');
          setEmail('');
          setMessage('');
      } catch (error) {
          console.error('Submission error:', error);
          setSubmissionStatus('error');
      }
  };

  return (
      <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                  type="text"
                  id="name"
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
              />
          </div>
          <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input
                  type="email"
                  id="email"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
          </div>
          <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Your Message</label>
              <textarea
                  id="message"
                  className={styles.textarea}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  required
              />
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
          {submissionStatus === 'success' && <p className={styles.successMessage}>Thanks for contacting, I will reach you soon  </p>}
          {submissionStatus === 'error' && <p className={styles.errorMessage}>Error sending message. Please try again.</p>}
      </form>
  );
};

export default ContactForm;