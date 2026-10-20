import React from 'react';

const Disclaimer = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '30px 20px',
    color: '#f8fafc',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '35px'
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '6px 14px',
    background: 'rgba(236, 72, 153, 0.15)',
    border: '1px solid rgba(236, 72, 153, 0.3)',
    borderRadius: '20px',
    color: '#f472b6',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const titleStyle = {
    fontSize: '2.4rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #ffffff 0%, #f472b6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px'
  };

  const subtitleStyle = {
    color: '#94a3b8',
    fontSize: '1rem',
    lineHeight: '1.5'
  };

  const sectionStyle = {
    background: '#15171e',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '20px'
  };

  const headingStyle = {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const textStyle = {
    color: '#94a3b8',
    fontSize: '0.95rem',
    lineHeight: '1.7'
  };

  const alertBoxStyle = {
    background: 'rgba(245, 158, 11, 0.1)',
    border: '1px solid rgba(245, 158, 11, 0.3)',
    borderRadius: '12px',
    padding: '16px 20px',
    color: '#fcd34d',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    marginTop: '25px'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <span style={badgeStyle}>Legal Notice</span>
        <h1 style={titleStyle}>Disclaimer</h1>
        <p style={subtitleStyle}>
          Please read this disclaimer carefully before using the ShopNest website.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>ℹ️ General Information</h2>
        <p style={textStyle}>
          The information provided on <strong>ShopNest</strong> is for general informational and shopping purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>🏷️ Product Details & Pricing</h2>
        <p style={textStyle}>
          We make every effort to display the colors, features, specifications, and details of the products as accurately as possible. However, your electronic display may not accurately reflect the actual colors or details. Pricing and product availability are subject to change without notice.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>🔗 External Links</h2>
        <p style={textStyle}>
          Our website may contain links to third-party websites or services that are not owned or controlled by ShopNest. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headingStyle}>🛡️ Limitation of Liability</h2>
        <p style={textStyle}>
          Under no circumstances shall ShopNest be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever arising out of or in connection with the use of the service or contents of the site.
        </p>
      </div>

      <div style={alertBoxStyle}>
        ⚠️ <strong>Note:</strong> If you have any specific questions about our legal policies or product descriptions, please reach out to our support team.
      </div>
    </div>
  );
};

export default Disclaimer;