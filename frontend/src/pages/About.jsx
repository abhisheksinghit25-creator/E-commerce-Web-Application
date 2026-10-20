import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '1000px',
    margin: '40px auto',
    padding: '30px 20px',
    color: '#f8fafc',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px'
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '6px 14px',
    background: 'rgba(139, 92, 246, 0.15)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '20px',
    color: '#a78bfa',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '12px'
  };

  const subtitleStyle = {
    color: '#94a3b8',
    fontSize: '1.1rem',
    maxWidth: '650px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const cardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '35px'
  };

  const cardStyle = {
    background: '#15171e',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '24px',
    transition: 'all 0.3s ease'
  };

  const iconBoxStyle = {
    width: '46px',
    height: '46px',
    borderRadius: '12px',
    background: 'rgba(139, 92, 246, 0.15)',
    color: '#a78bfa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    marginBottom: '16px'
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#ffffff'
  };

  const cardTextStyle = {
    color: '#94a3b8',
    fontSize: '0.95rem',
    lineHeight: '1.6'
  };

  const sectionBoxStyle = {
    background: '#15171e',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '30px',
    marginTop: '25px',
    lineHeight: '1.7'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <span style={badgeStyle}>Discover Our Story</span>
        <h1 style={titleStyle}>About ShopNest</h1>
        <p style={subtitleStyle}>
          Your premium destination for modern lifestyle essentials and high-quality products curated with care.
        </p>
      </div>

      <div style={cardGridStyle}>
        <div style={cardStyle}>
          <div style={iconBoxStyle}>🎯</div>
          <h2 style={cardTitleStyle}>Our Mission</h2>
          <p style={cardTextStyle}>
            To deliver an unmatched online shopping experience by offering verified top-tier products, seamless checkout, and customer-first support.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={iconBoxStyle}>⚡</div>
          <h2 style={cardTitleStyle}>Fast & Reliable</h2>
          <p style={cardTextStyle}>
            Lightning-fast delivery networks ensure your favorite items arrive safely and swiftly right at your doorstep.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={iconBoxStyle}>💎</div>
          <h2 style={cardTitleStyle}>Premium Quality</h2>
          <p style={cardTextStyle}>
            Every product in our catalog undergoes thorough quality checks to guarantee standard excellence and durability.
          </p>
        </div>
      </div>

      <div style={sectionBoxStyle}>
        <h2 style={{ ...cardTitleStyle, fontSize: '1.4rem', color: '#a78bfa' }}>Who We Are</h2>
        <p style={{ ...cardTextStyle, marginBottom: '16px' }}>
          ShopNest is built by passionate creators aiming to redefine online e-commerce. We bridge the gap between trending designs and affordable luxury, creating a community of happy customers worldwide.
        </p>
        <p style={cardTextStyle}>
          Whether you are looking for modern fashion, innovative gadgets, or everyday lifestyle upgrades, ShopNest brings the finest collections to your fingertips.
        </p>
      </div>
    </div>
  );
};

export default About;