import { useEffect, useRef } from 'react';

// ─── constants ────────────────────────────────────────────────────────────────
const S       = 580;
const CX      = S / 2;
const CY      = S / 2;
const ORBIT_R = S * 0.37;
const HUB_R   = S * 0.095;
const SPOKE_N = 16;

// ─── nodes — BASE angles (top → clockwise) ───────────────────────────────────
const NODES = [
  { lines: ['Cognition', ''] },
  { lines: ['Learning', 'Strategies']     },
  { lines: ['Psychology', '']    },
  { lines: ['Deep', 'Understanding']       },
  { lines: ['Improving', 'Focus']        },
];
const N = NODES.length;
const BASE_ANGLES = NODES.map((_, i) => -Math.PI / 2 + (i * 2 * Math.PI) / N);

// ─── particle factories ───────────────────────────────────────────────────────
// Orbit particles move independently on the ring
const makeOrbit = () =>
  Array.from({ length: 2 }, (_, i) => ({
    a:      (i / 2) * Math.PI * 2,
    spd:    0.003 + (i % 4) * 0.0004,
    r:      i % 5 === 0 ? 4.5 : i % 3 === 0 ? 3.2 : 2.4,
    accent: i % 6 === 0,
  }));

// Radial particles travel along spoke lines — they follow the node group rotation
const makeRadial = () =>
  NODES.map((_, i) => ({
    nodeIdx: i,
    t:       i / N,          // staggered start
    dir:     1 as 1 | -1,
    spd:     0.005 + i * 0.0007,
    accent:  i % 2 === 1,
  }));

// ─── component ────────────────────────────────────────────────────────────────
export function StudyOrbit() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width  = S * dpr;
    canvas.height = S * dpr;
    ctx.scale(dpr, dpr);

    const orb = makeOrbit();
    const rad = makeRadial();
    let nodeGroupRot = 0;   // nodes + spokes + radial particles rotate as one
    let raf = 0;
    const t0 = performance.now();

    // Live angle for node i
    const nodeAngle = (i: number) => BASE_ANGLES[i] + nodeGroupRot;

    function labelSide(deg: number): 'top' | 'right' | 'left' {
      if (deg >= -105 && deg <= -55) return 'top';
      if (deg > -55  && deg <   75) return 'right';
      return 'left';
    }

    // ── draw passes ──────────────────────────────────────────────────────────

    function drawOrbitRing() {
      ctx.beginPath();
      ctx.arc(CX, CY, ORBIT_R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(28,26,21,0.13)';
      ctx.lineWidth   = 1.2;
      ctx.stroke();
    }

    // Static hub — NO rotation
    function drawHub() {
      ctx.beginPath();
      ctx.arc(CX, CY, HUB_R, 0, Math.PI * 2);
      ctx.fillStyle = '#1c1a15';
      ctx.fill();

      for (let i = 0; i < SPOKE_N; i++) {
        const a    = (i / SPOKE_N) * Math.PI * 2;   // fixed angle
        const long = i % 2 === 0;
        ctx.beginPath();
        ctx.moveTo(CX + Math.cos(a) * HUB_R * 0.2,  CY + Math.sin(a) * HUB_R * 0.2);
        ctx.lineTo(
          CX + Math.cos(a) * HUB_R * (long ? 0.82 : 0.55),
          CY + Math.sin(a) * HUB_R * (long ? 0.82 : 0.55)
        );
        ctx.strokeStyle = long ? 'rgba(232,229,222,0.90)' : 'rgba(196,41,22,0.55)';
        ctx.lineWidth   = long ? 1.6 : 1;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(CX, CY, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(232,229,222,0.55)';
      ctx.fill();
    }

    // Spoke lines rotate WITH the node group
    function drawSpokes() {
      for (let i = 0; i < N; i++) {
        const a = nodeAngle(i);
        ctx.beginPath();
        ctx.moveTo(CX + Math.cos(a) * (HUB_R + 3),    CY + Math.sin(a) * (HUB_R + 3));
        ctx.lineTo(CX + Math.cos(a) * (ORBIT_R - 6),  CY + Math.sin(a) * (ORBIT_R - 6));
        ctx.strokeStyle = 'rgba(28,26,21,0.09)';
        ctx.lineWidth   = 1;
        ctx.stroke();
      }
    }

    // Nodes + labels rotate WITH the node group
    function drawNodes(elapsed: number) {
      NODES.forEach((nd, i) => {
        const a   = nodeAngle(i);
        const nx  = CX + Math.cos(a) * ORBIT_R;
        const ny  = CY + Math.sin(a) * ORBIT_R;
        const deg = (a * 180) / Math.PI;
        const side = labelSide(deg);

        // pulsing dot
        const pulse = 4.5 + Math.sin(elapsed * 0.0018 + i * 1.3) * 0.7;
        ctx.beginPath();
        ctx.arc(nx, ny, pulse, 0, Math.PI * 2);
        ctx.fillStyle = '#1c1a15';
        ctx.fill();

        // label
        const GAP   = 22;
        const lineH = 13.5;
        ctx.font      = '500 10.5px Inter, sans-serif';
        ctx.fillStyle = 'rgba(28,26,21,0.65)';

        if (side === 'top') {
          ctx.textAlign    = 'center';
          ctx.textBaseline = 'alphabetic';
          nd.lines.forEach((ln, li) => {
            ctx.fillText(ln, nx, ny - GAP - (nd.lines.length - 1 - li) * lineH);
          });
        } else if (side === 'right') {
          ctx.textAlign    = 'left';
          ctx.textBaseline = 'middle';
          const by = ny - ((nd.lines.length - 1) * lineH) / 2;
          nd.lines.forEach((ln, li) => ctx.fillText(ln, nx + GAP, by + li * lineH));
        } else {
          ctx.textAlign    = 'right';
          ctx.textBaseline = 'middle';
          const by = ny - ((nd.lines.length - 1) * lineH) / 2;
          nd.lines.forEach((ln, li) => ctx.fillText(ln, nx - GAP, by + li * lineH));
        }
      });
    }

    // Orbit ring particles — independent of node group
    function drawOrbitParticles() {
      orb.forEach((p) => {
        p.a -= p.spd;
        ctx.beginPath();
        ctx.arc(
          CX + Math.cos(p.a) * ORBIT_R,
          CY + Math.sin(p.a) * ORBIT_R,
          p.r, 0, Math.PI * 2
        );
        ctx.fillStyle = p.accent ? 'rgba(196,41,22,0.72)' : 'rgba(28,26,21,0.50)';
        ctx.fill();
      });
    }

    // Radial particles follow their node's current angle
    function drawRadialParticles() {
      rad.forEach((p) => {
        p.t += p.dir * p.spd;
        if (p.t >= 1) { p.dir = -1; p.t = 1; }
        if (p.t <= 0) { p.dir =  1; p.t = 0; }

        const a = nodeAngle(p.nodeIdx);   // follows the orbiting node
        const r = (HUB_R + 5) + (ORBIT_R - HUB_R - 11) * p.t;
        ctx.beginPath();
        ctx.arc(CX + Math.cos(a) * r, CY + Math.sin(a) * r, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = p.accent ? 'rgba(196,41,22,0.78)' : 'rgba(28,26,21,0.60)';
        ctx.fill();
      });
    }

    // ── animation loop ────────────────────────────────────────────────────────
    function frame(now: number) {
      const elapsed = now - t0;
      ctx.clearRect(0, 0, S, S);

      nodeGroupRot -= 0.010;   // nodes + spokes + radial orbit counterclockwise

      drawOrbitRing();
      drawSpokes();
      drawNodes(elapsed);
      drawOrbitParticles();
      drawRadialParticles();
      drawHub();               // hub is static and drawn on top

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: 'clamp(320px, 68%, 560px)', aspectRatio: '1 / 1' }}>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
        aria-hidden="true"
      />
    </div>
  );
}
