import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Messages.module.css'; // Create this file

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8000/contacts'); // Adjust URL if needed
        setMessages(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading messages...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div className={styles.messagesContainer}>
      <h2 className={styles.title}>Messages</h2>
      {messages.map(message => (
        <div key={message._id} className={styles.messageCard}>
          <h3 className={styles.name}>{message.name}</h3>
          <p className={styles.email}>{message.email}</p>
          <p className={styles.message}>{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Messages;