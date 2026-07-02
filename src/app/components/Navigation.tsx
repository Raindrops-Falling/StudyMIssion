import { useEffect, useState } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Set initial state in case page loads mid-scroll
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const textColor = '#3a3830';

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        height: '52px',
        backgroundColor: '#dddbd3',
      }}
    >
      {/* Left nav links */}
      <div
        className="hidden sm:flex items-center gap-6"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.8125rem',
          fontWeight: 400,
          color: textColor,
          minWidth: '160px',
        }}
      >
        {['Blog', 'Students', 'Educators'].map((label) => (
          <a
            key={label}
            href="#"
            style={{ color: textColor, textDecoration: 'none', opacity: 0.75 }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Center: collapsible pill */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <div
          style={{
            backgroundColor: '#1c1a15',
            borderRadius: '9999px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            // Collapse animation: max-width + padding transition creates the squeeze-in effect
            maxWidth: scrolled ? '0px' : '260px',
            opacity: scrolled ? 0 : 1,
            paddingLeft: scrolled ? '0' : '1.1rem',
            paddingRight: scrolled ? '0' : '1.1rem',
            paddingTop: '0.35rem',
            paddingBottom: '0.35rem',
            transition:
              'max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1), ' +
              'opacity 0.3s ease, ' +
              'padding-left 0.5s cubic-bezier(0.4, 0, 0.2, 1), ' +
              'padding-right 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: scrolled ? 'none' : 'auto',
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: '#e8e5de',
              letterSpacing: '0.01em',
              display: 'block',
            }}
          >
            The Study Mission
          </span>
        </div>
      </div>

      {/* Right: Sign in + Get started */}
      <div
        className="flex items-center gap-3"
        style={{ minWidth: '160px', justifyContent: 'flex-end' }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8125rem',
            color: textColor,
            textDecoration: 'none',
            opacity: 0.75,
          }}
        >
          Sign In
        </a>
        <button
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8125rem',
            fontWeight: 500,
            backgroundColor: '#1c1a15',
            color: '#e8e5de',
            border: 'none',
            borderRadius: '9999px',
            padding: '0.35rem 1rem',
            cursor: 'pointer',
          }}
        >
          Get started
        </button>
      </div>
    </nav>
  );
}
