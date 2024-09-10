import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    padding: '20px',
    width: '100%', // Full width
    maxWidth: '100vw', // Ensure it doesn't exceed the viewport width
    boxSizing: 'border-box', // Include padding in element's width/height
    backgroundColor: '#f9f9f9',
    overflow: 'hidden', // Prevent scroll bars
  },
  content: {
    maxWidth: '800px', // Constrain content width for readability
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.25rem',
    color: '#555',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  sectionText: {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.5',
  },
  contactEmail: {
    color: '#007bff',
    textDecoration: 'none',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  }
};

const AboutUs = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.description}>
          SpillSafe is dedicated to monitoring and detecting oil spills in real-time using advanced AIS data. Our mission is to provide accurate, timely, and actionable information to help protect marine environments and ensure the safety of maritime activities.
        </p>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.sectionText}>
            We strive to leverage cutting-edge technology and data analytics to detect and respond to oil spills as quickly as possible. By integrating AIS and SAR data with real-time monitoring systems, we aim to offer unparalleled insights into maritime incidents and enhance the effectiveness of spill response efforts.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Team</h2>
          <p style={styles.sectionText}>
            Our team consists of dedicated individuals with expertise in machine learning, data analysis, and API integration for real-time analysis and anomaly detection. We work collaboratively to innovate and improve our systems to better serve our clients and contribute to environmental and maritime preservation.
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Us</h2>
          <p style={styles.sectionText}>
            If you have any questions or would like to learn more about our services, feel free to reach out to us at <a href="mailto:info@spillsafe.com" style={styles.contactEmail}>info@spillsafe.com</a>.
          </p>
        </section>
        <button onClick={handleBackToHome} style={styles.button}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AboutUs;