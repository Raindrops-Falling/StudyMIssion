import { ComplexityChart } from './ComplexityChart';

export function ResearchSection() {
  return (
    <section
      id="research"
      style={{ backgroundColor: '#dddbd3', minHeight: '100vh' }}
      className="flex flex-col lg:flex-row"
    >
      {/* Text column — top on mobile, left on desktop */}
      <div className="w-full lg:w-[480px] lg:flex-none flex flex-col justify-center px-10 sm:px-14 lg:px-16 py-16 lg:py-24">
        <p
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            lineHeight: 1.85,
            color: '#1c1a15',
            marginBottom: '1.5rem',
          }}
        >
          <span
            style={{
              float: 'left',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '4.2rem',
              fontWeight: 700,
              lineHeight: 0.78,
              color: '#c42916',
              marginRight: '0.08em',
              marginTop: '0.06em',
            }}
          >
            S
          </span>
          tudent learning, as practiced today, is
          breaking down. Academic demands have grown too
          complex for students to manage alone, and the
          knowledge required to excel is fragmented across
          textbooks, schedules, flashcards, and advice. The
          result is all-nighters at 3 a.m., study sessions that
          surface symptoms instead of understanding, and
          habits that never become lasting retention.
        </p>
        <p
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            lineHeight: 1.85,
            color: '#1c1a15',
            marginBottom: '1.5rem',
          }}
        >
          The Study Mission is building the optimal system for
          students: a new layer between you and your academic
          success.
        </p>
        <p
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            lineHeight: 1.85,
            color: '#1c1a15',
          }}
        >
          It diagnoses. It adapts. It optimizes. It learns how
          you study and guides your learning for you.
        </p>
      </div>

      {/* Chart column — bottom on mobile, right on desktop */}
      <div
        className="w-full lg:flex-1 flex items-center justify-center px-6 sm:px-10 lg:px-12 py-12 lg:py-24"
        style={{ minWidth: 0, overflow: 'hidden' }}
      >
        <div style={{ width: '100%', minWidth: 0 }}>
          <ComplexityChart />
        </div>
      </div>
    </section>
  );
}
