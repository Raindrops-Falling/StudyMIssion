import { useEffect } from 'react';

// Use `as any` to allow the dotlottie-wc custom element in JSX without a full type declaration
const DotLottieWC = 'dotlottie-wc' as any;

export function LottieGlobe() {
  useEffect(() => {
    if (document.querySelector('script[data-dotlottie-wc]')) return;
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.14/dist/dotlottie-wc.js';
    script.type = 'module';
    script.dataset.dotlottieWc = 'true';
    document.head.appendChild(script);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'clamp(320px, 70%, 580px)',
        aspectRatio: '1 / 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DotLottieWC
        src="https://lottie.host/6fe25c94-9bd3-4b1e-a7dc-35e6a51edb5c/Czt4Noq5ai.lottie"
        autoplay="true"
        loop="true"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
