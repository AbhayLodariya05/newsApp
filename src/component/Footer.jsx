// ./component/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} NewsBoard. All rights reserved.
      </p>
      <p style={styles.subText}>
        Powered by React | Designed with ❤️
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    marginTop: '40px',
  },
  text: {
    margin: 0,
    fontSize: '16px',
  },
  subText: {
    margin: 0,
    fontSize: '12px',
    opacity: 0.6,
  }
};

export default Footer;
