// Adapted from globe-demo-1.tsx (Aceternity pattern) for Vite — no next/dynamic
import { World } from './ui/globe';
import type { Position, GlobeConfig } from './ui/globe';

// ── colour palette matched to The Study Mission ───────────────────────────────
const globeConfig: GlobeConfig = {
  pointSize:            4,
  globeColor:           '#1a1815',          // warm dark
  showAtmosphere:       true,
  atmosphereColor:      '#e8e5de',          // warm beige
  atmosphereAltitude:   0.12,
  emissive:             '#1c1a15',
  emissiveIntensity:    0.12,
  shininess:            0.9,
  polygonColor:         'rgba(221,219,211,0.38)',
  ambientLight:         '#e8e5de',
  directionalLeftLight: '#ffffff',
  directionalTopLight:  '#ffffff',
  pointLight:           '#ffffff',
  arcTime:              1200,
  arcLength:            0.9,
  rings:                1,
  maxRings:             3,
  initialPosition:      { lat: 22.3193, lng: 114.1694 },
  autoRotate:           true,
  autoRotateSpeed:      0.45,
};

// Arc colours from site palette: red, olive-gold, dark
const colors: [string, string, string] = ['#c42916', '#9a8818', '#1c1a15'];
const pick = () => colors[Math.floor(Math.random() * colors.length)];

const sampleArcs: Position[] = [
  { order:1,  startLat:-19.89, startLng:-43.95, endLat:-22.91, endLng:-43.17, arcAlt:0.1, color:pick() },
  { order:1,  startLat:28.61,  startLng:77.21,  endLat:3.14,   endLng:101.69, arcAlt:0.2, color:pick() },
  { order:1,  startLat:-19.89, startLng:-43.95, endLat:-1.30,  endLng:36.85,  arcAlt:0.5, color:pick() },
  { order:2,  startLat:1.35,   startLng:103.82, endLat:35.68,  endLng:139.65, arcAlt:0.2, color:pick() },
  { order:2,  startLat:51.51,  startLng:-0.13,  endLat:3.14,   endLng:101.69, arcAlt:0.3, color:pick() },
  { order:2,  startLat:-15.79, startLng:-47.91, endLat:36.16,  endLng:-115.12,arcAlt:0.3, color:pick() },
  { order:3,  startLat:-33.87, startLng:151.21, endLat:22.32,  endLng:114.17, arcAlt:0.3, color:pick() },
  { order:3,  startLat:21.31,  startLng:-157.86,endLat:40.71,  endLng:-74.01, arcAlt:0.3, color:pick() },
  { order:3,  startLat:-6.21,  startLng:106.85, endLat:51.51,  endLng:-0.13,  arcAlt:0.3, color:pick() },
  { order:4,  startLat:11.99,  startLng:8.57,   endLat:-15.60, endLng:-56.06, arcAlt:0.5, color:pick() },
  { order:4,  startLat:-34.60, startLng:-58.38, endLat:22.32,  endLng:114.17, arcAlt:0.7, color:pick() },
  { order:4,  startLat:51.51,  startLng:-0.13,  endLat:48.86,  endLng:-2.35,  arcAlt:0.1, color:pick() },
  { order:5,  startLat:14.60,  startLng:120.98, endLat:51.51,  endLng:-0.13,  arcAlt:0.3, color:pick() },
  { order:5,  startLat:1.35,   startLng:103.82, endLat:-33.87, endLng:151.21, arcAlt:0.2, color:pick() },
  { order:5,  startLat:34.05,  startLng:-118.24,endLat:48.86,  endLng:-2.35,  arcAlt:0.2, color:pick() },
  { order:6,  startLat:37.57,  startLng:126.98, endLat:35.68,  endLng:139.65, arcAlt:0.1, color:pick() },
  { order:6,  startLat:22.32,  startLng:114.17, endLat:51.51,  endLng:-0.13,  arcAlt:0.3, color:pick() },
  { order:7,  startLat:48.86,  startLng:-2.35,  endLat:52.52,  endLng:13.41,  arcAlt:0.1, color:pick() },
  { order:7,  startLat:52.52,  startLng:13.41,  endLat:34.05,  endLng:-118.24,arcAlt:0.2, color:pick() },
  { order:8,  startLat:49.28,  startLng:-123.12,endLat:52.37,  endLng:4.90,   arcAlt:0.2, color:pick() },
  { order:8,  startLat:1.35,   startLng:103.82, endLat:40.71,  endLng:-74.01, arcAlt:0.5, color:pick() },
  { order:9,  startLat:51.51,  startLng:-0.13,  endLat:34.05,  endLng:-118.24,arcAlt:0.2, color:pick() },
  { order:9,  startLat:22.32,  startLng:114.17, endLat:-22.91, endLng:-43.17, arcAlt:0.7, color:pick() },
  { order:10, startLat:-22.91, startLng:-43.17, endLat:28.61,  endLng:77.21,  arcAlt:0.7, color:pick() },
  { order:10, startLat:34.05,  startLng:-118.24,endLat:31.23,  endLng:121.47, arcAlt:0.3, color:pick() },
];

export function GlobeVisual() {
  return (
    <div style={{ width: '100%', maxWidth: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{ width: '100%', height: 280, position: 'relative', overflow: 'hidden' }}>
        <World data={sampleArcs} globeConfig={globeConfig} />
        {/* bottom fade to match section background */}
        <div style={{
          position:   'absolute',
          bottom:      0,
          left:        0,
          right:       0,
          height:      60,
          background:  'linear-gradient(to bottom, transparent, #dddbd3)',
          pointerEvents: 'none',
        }} />
      </div>
      <p style={{
        fontFamily:    "'Inter', sans-serif",
        fontSize:      '0.65rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color:         'rgba(28,26,21,0.4)',
        textAlign:     'center',
      }}>
        Students learning smarter, everywhere
      </p>
    </div>
  );
}
