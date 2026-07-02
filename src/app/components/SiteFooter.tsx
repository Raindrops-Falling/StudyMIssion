const DotGrid = () => (
  <svg viewBox="0 0 56 56" width="56" height="56" aria-hidden="true">
    {Array.from({ length: 7 }).map((_, row) =>
      Array.from({ length: 7 }).map((_, col) => {
        const filled = (row + col) % 2 === 0 && (row < 5 || col < 5);
        return (
          <circle
            key={`${row}-${col}`}
            cx={col * 8 + 4}
            cy={row * 8 + 4}
            r={filled ? 2.5 : 1.5}
            fill={filled ? '#9a9488' : 'transparent'}
          />
        );
      })
    )}
  </svg>
);

export function SiteFooter() {
  return (
    <footer
      style={{
        backgroundColor: '#141210',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '3rem 2rem 2.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '2.5rem 2rem',
          alignItems: 'start',
          width: '100%',
        }}
      >
        {/* Product */}
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', color: '#5a5850', marginBottom: '0.9rem', textTransform: 'uppercase' }}>
            Product
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Adaptive Study Plans', 'Technique Library'].map((item) => (
              <li key={item} style={{ marginBottom: '0.4rem' }}>
                <a href="#" style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: '1rem', color: '#c8c5be', textDecoration: 'none', lineHeight: 1.5 }}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', color: '#5a5850', marginBottom: '0.9rem', textTransform: 'uppercase' }}>
            Company
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['About', 'Careers'].map((item) => (
              <li key={item} style={{ marginBottom: '0.4rem' }}>
                <a href="#" style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: '1rem', color: '#c8c5be', textDecoration: 'none' }}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', color: '#5a5850', marginBottom: '0.9rem', textTransform: 'uppercase' }}>
            Resources
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Docs', 'Blog'].map((item) => (
              <li key={item} style={{ marginBottom: '0.4rem' }}>
                <a href="#" style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: '1rem', color: '#c8c5be', textDecoration: 'none' }}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', color: '#5a5850', marginBottom: '0.9rem', textTransform: 'uppercase' }}>
            Legal
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Terms', 'Privacy'].map((item) => (
              <li key={item} style={{ marginBottom: '0.4rem' }}>
                <a href="#" style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: '1rem', color: '#c8c5be', textDecoration: 'none' }}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Status + dot grid */}
        <div className="flex flex-col items-start gap-3">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '9999px',
              padding: '0.2rem 0.7rem',
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#4ade80', flexShrink: 0 }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', letterSpacing: '0.1em', color: '#9a9488', textTransform: 'uppercase' }}>
              All systems normal
            </span>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', letterSpacing: '0.1em', color: '#5a5850', textTransform: 'uppercase' }}>
            Built for students
          </p>
          <DotGrid />
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', color: '#3a3830', lineHeight: 1.6, maxWidth: '200px' }}>
            The optimal platform for students.
            <br />
            FERPA and GDPR compliant.
          </p>
        </div>
      </div>
    </footer>
  );
}
