export function CtaSection() {
  return (
    <section
      id="cta"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #2a2218 0%, #0e0c09 60%, #080604 100%)',
        minHeight: '62vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(2rem, 5vw, 3.8rem)',
          fontWeight: 400,
          lineHeight: 1.15,
          color: '#e8e5de',
          marginBottom: '1.4rem',
          maxWidth: '720px',
        }}
      >
        The optimal platform for <em style={{ fontStyle: 'italic' }}>students</em>.
      </h2>
      <p
        style={{
          fontFamily: "'EB Garamond', Georgia, serif",
          fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
          lineHeight: 1.65,
          color: '#9a9488',
          marginBottom: '2.4rem',
          maxWidth: '440px',
        }}
      >
        Take a 30 minute session to see if The Study Mission
        is the missing layer in your learning.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 500,
            backgroundColor: 'transparent',
            color: '#e8e5de',
            padding: '0.6rem 1.4rem',
            borderRadius: '9999px',
            border: '1px solid rgba(232,229,222,0.4)',
            cursor: 'pointer',
            letterSpacing: '0.01em',
          }}
        >
          Get started
        </button>
        <button
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 400,
            backgroundColor: 'transparent',
            color: '#9a9488',
            padding: '0.6rem 1.4rem',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.01em',
          }}
        >
          Read the research
        </button>
      </div>
    </section>
  );
}
