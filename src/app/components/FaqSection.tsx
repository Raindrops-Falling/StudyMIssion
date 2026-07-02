import { useState } from 'react';

const faqs = [
  {
    q: 'What makes some study techniques more effective than others?',
    a: 'The gap between effective and ineffective studying comes down to how deeply you engage with material. Passive re-reading feels productive but barely moves the needle. Techniques like retrieval practice and spaced repetition force your brain to actively reconstruct knowledge — which is precisely what strengthens memory.',
  },
  {
    q: 'How long does spaced repetition actually take to show results?',
    a: 'Most students notice a meaningful difference within two to three weeks. The compounding nature of spaced review means early sessions feel slow, but retention rates accelerate sharply after the first month of consistent practice.',
  },
  {
    q: 'Is active recall better than highlighting and re-reading?',
    a: 'By a wide margin. Multiple large-scale studies show active recall produces 50–80% better long-term retention than passive review. Highlighting has its place as a first-pass organiser, but it should never be the primary study method.',
  },
  {
    q: 'Where should a student start if they want to improve?',
    a: 'Start with one change: replace one re-reading session per week with a practice test or blank-page recall exercise. The improvement in retention is immediate and measurable — and it builds the habit without requiring a complete overhaul of your routine.',
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ backgroundColor: '#dddbd3', minHeight: '100vh' }}
      className="flex flex-col"
    >
      {/* Main content */}
      <div className="flex flex-col lg:flex-row flex-1 px-10 sm:px-14 lg:px-16 pt-20 pb-20 gap-10 lg:gap-16">

        {/* Left: heading */}
        <div className="w-full lg:w-[360px] lg:flex-none">
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#1c1a15',
            }}
          >
            Questions worth asking
          </h2>
        </div>

        {/* Right: FAQ content */}
        <div className="w-full lg:flex-1">
          <p
            style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 1.5vw, 1.05rem)',
              lineHeight: 1.7,
              color: '#3a3830',
              marginBottom: '2.5rem',
            }}
          >
            The questions students ask most often about building
            more effective study habits.
          </p>

          <div style={{ borderTop: '1px solid rgba(28,26,21,0.18)' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(28,26,21,0.18)' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.1rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'EB Garamond', Georgia, serif",
                      fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
                      color: '#1c1a15',
                      lineHeight: 1.5,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1.1rem',
                      color: '#1c1a15',
                      flexShrink: 0,
                      transition: 'transform 0.2s',
                      transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      display: 'inline-block',
                    }}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <p
                    style={{
                      fontFamily: "'EB Garamond', Georgia, serif",
                      fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                      lineHeight: 1.75,
                      color: '#3a3830',
                      paddingBottom: '1.2rem',
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
