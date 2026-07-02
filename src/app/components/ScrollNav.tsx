const sections = ['hero', 'research', 'faq', 'cta'];

export function ScrollNav() {
  const scrollTo = (dir: 'up' | 'down') => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const idx = Math.round(scrollY / vh);
    const next = dir === 'down' ? Math.min(idx + 1, sections.length - 1) : Math.max(idx - 1, 0);
    const el = document.getElementById(sections[next]);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.2rem',
        right: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem',
        zIndex: 100,
      }}
    >
      {[
        { label: '↓', action: () => scrollTo('down'), title: 'Next section' },
        { label: '↑', action: () => scrollTo('up'), title: 'Previous section' },
        { label: '⌕', action: () => {}, title: 'Search' },
      ].map(({ label, action, title }) => (
        <button
          key={label}
          onClick={action}
          title={title}
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            border: '1px solid rgba(28,26,21,0.2)',
            backgroundColor: 'rgba(221,219,211,0.85)',
            backdropFilter: 'blur(8px)',
            color: '#1c1a15',
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            lineHeight: 1,
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
