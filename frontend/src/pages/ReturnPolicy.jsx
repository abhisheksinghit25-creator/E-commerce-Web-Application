import React from 'react';

const ReturnPolicy = () => {
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
    background: 'rgba(16, 185, 129, 0.15)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    borderRadius: '20px',
    color: '#34d399',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const titleStyle = {
    fontSize: '2.4rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #ffffff 0%, #34d399 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px'
  };

  const subtitleStyle = {
    color: '#94a3b8',
    fontSize: '1rem',
    lineHeight: '1.5'
  };

  const cardStyle = {
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
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const textStyle = {
    color: '#94a3b8',
    fontSize: '0.95rem',
    lineHeight: '1.7'
  };

  const listStyle = {
    color: '#94a3b8',
    fontSize: '0.95rem',
    lineHeight: '1.8',
    paddingLeft: '20px',
    marginTop: '10px'
  };

  const stepBoxStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '15px',
    marginTop: '15px'
  };

  const stepCardStyle = {
    background: '#1f222d',
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)'
  };

  const stepNumberStyle = {
    color: '#34d399',
    fontWeight: '800',
    fontSize: '1.1rem',
    marginBottom: '6px'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <span style={badgeStyle}>Hassle-Free Returns</span>
        <h1 style={titleStyle}>Return & Refund Policy</h1>
        <p style={subtitleStyle}>
          We want you to love your purchase. If you are not completely satisfied, we are here to help.
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={headingStyle}>📦 7-Day Return Window</h2>
        <p style={textStyle}>
          You have <strong>7 days</strong> from the date of receiving your item to request a return or replacement.
        </p>
        <ul style={listStyle}>
          <li>The item must be in its original condition, unworn or unused.</li>
          <li>All original tags, packaging, user manuals, and invoices must be intact.</li>
          <li>Proof of purchase (Order ID or invoice) is required.</li>
        </ul>
      </div>

      <div style={cardStyle}>
        <h2 style={headingStyle}>🔄 How to Initiate a Return</h2>
        <div style={stepBoxStyle}>
          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Step 1</div>
            <p style={{ ...textStyle, fontSize: '0.88rem' }}>
              Go to your orders or contact support with your Order ID and item details.
            </p>
          </div>
          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Step 2</div>
            <p style={{ ...textStyle, fontSize: '0.88rem' }}>
              Our team will review and approve your return request within 24-48 hours.
            </p>
          </div>
          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>Step 3</div>
            <p style={{ ...textStyle, fontSize: '0.88rem' }}>
              Our courier partner will pick up the package from your doorstep.
            </p>
          </div>
        </div>
      </div>

      <div style={cardStyle}>
        <h2 style={headingStyle}>💳 Refund Timeline</h2>
        <p style={textStyle}>
          Once your returned item is received and inspected, we will notify you of the approval or rejection of your refund. If approved, the refund will be processed to your original payment method within <strong>5-7 business days</strong>.
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={headingStyle}>🚫 Non-Returnable Items</h2>
        <p style={textStyle}>
          Certain items cannot be returned due to hygiene and safety reasons, including perishable goods, intimate wear, custom products, and downloadable software/gift cards.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicy;