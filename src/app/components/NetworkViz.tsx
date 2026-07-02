const CENTER = { x: 268, y: 198 };

interface Node {
  x: number;
  y: number;
  r: number;
  color: string;
}

const nodes: Node[] = [
  // Large orange nodes
  { x: 98, y: 178, r: 22, color: '#e05020' },
  { x: 148, y: 308, r: 18, color: '#e05020' },
  { x: 435, y: 295, r: 16, color: '#e05020' },
  // Medium olive/gold nodes
  { x: 368, y: 84, r: 15, color: '#9a8818' },
  { x: 448, y: 148, r: 13, color: '#b09a20' },
  { x: 502, y: 182, r: 11, color: '#c8b028' },
  { x: 355, y: 265, r: 9, color: '#9a8818' },
  // Small orange scattered
  { x: 228, y: 168, r: 6, color: '#e05820' },
  { x: 308, y: 142, r: 6, color: '#e05820' },
  { x: 392, y: 222, r: 5, color: '#e07830' },
  { x: 175, y: 248, r: 5, color: '#e05820' },
  { x: 132, y: 222, r: 5, color: '#e06828' },
  // Small black nodes
  { x: 182, y: 128, r: 5, color: '#1c1a15' },
  { x: 198, y: 148, r: 4, color: '#1c1a15' },
  { x: 162, y: 148, r: 5, color: '#1c1a15' },
  { x: 218, y: 118, r: 5, color: '#1c1a15' },
  { x: 238, y: 102, r: 4, color: '#1c1a15' },
  { x: 312, y: 88, r: 5, color: '#1c1a15' },
  { x: 328, y: 112, r: 4, color: '#1c1a15' },
  { x: 348, y: 132, r: 5, color: '#1c1a15' },
  { x: 378, y: 152, r: 4, color: '#1c1a15' },
  { x: 395, y: 172, r: 4, color: '#1c1a15' },
  { x: 412, y: 192, r: 5, color: '#1c1a15' },
  { x: 428, y: 215, r: 4, color: '#1c1a15' },
  { x: 442, y: 248, r: 4, color: '#1c1a15' },
  { x: 412, y: 265, r: 5, color: '#1c1a15' },
  { x: 385, y: 288, r: 4, color: '#1c1a15' },
  { x: 368, y: 255, r: 4, color: '#1c1a15' },
  { x: 338, y: 272, r: 5, color: '#1c1a15' },
  { x: 318, y: 298, r: 4, color: '#1c1a15' },
  { x: 292, y: 318, r: 5, color: '#1c1a15' },
  { x: 272, y: 305, r: 4, color: '#1c1a15' },
  { x: 252, y: 288, r: 5, color: '#1c1a15' },
  { x: 235, y: 272, r: 4, color: '#1c1a15' },
  { x: 218, y: 255, r: 5, color: '#1c1a15' },
  { x: 198, y: 238, r: 4, color: '#1c1a15' },
  { x: 182, y: 218, r: 5, color: '#1c1a15' },
  { x: 158, y: 178, r: 4, color: '#1c1a15' },
  { x: 145, y: 158, r: 5, color: '#1c1a15' },
  { x: 138, y: 140, r: 4, color: '#1c1a15' },
  { x: 132, y: 122, r: 5, color: '#1c1a15' },
  { x: 140, y: 105, r: 4, color: '#1c1a15' },
  { x: 155, y: 90, r: 5, color: '#1c1a15' },
  { x: 172, y: 80, r: 4, color: '#1c1a15' },
  { x: 192, y: 72, r: 5, color: '#1c1a15' },
  { x: 215, y: 68, r: 4, color: '#1c1a15' },
  { x: 245, y: 72, r: 5, color: '#1c1a15' },
  { x: 275, y: 65, r: 4, color: '#1c1a15' },
  { x: 298, y: 75, r: 5, color: '#1c1a15' },
  { x: 335, y: 68, r: 4, color: '#1c1a15' },
  { x: 405, y: 118, r: 4, color: '#1c1a15' },
  { x: 422, y: 135, r: 5, color: '#1c1a15' },
  { x: 462, y: 198, r: 4, color: '#1c1a15' },
  { x: 472, y: 225, r: 4, color: '#1c1a15' },
  { x: 478, y: 262, r: 5, color: '#1c1a15' },
  { x: 458, y: 318, r: 4, color: '#1c1a15' },
  // Far right node (labeled)
  { x: 548, y: 252, r: 5, color: '#1c1a15' },
];

export function NetworkViz() {
  return (
    <svg
      viewBox="0 0 590 390"
      className="w-full h-full"
      style={{ overflow: 'visible' }}
      aria-hidden="true"
    >
      {nodes.map((node, i) => (
        <line
          key={`l-${i}`}
          x1={CENTER.x}
          y1={CENTER.y}
          x2={node.x}
          y2={node.y}
          stroke="#1c1a15"
          strokeWidth="0.7"
          strokeOpacity="0.25"
        />
      ))}
      {nodes.map((node, i) => (
        <circle
          key={`n-${i}`}
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill={node.color}
        />
      ))}
      <circle cx={CENTER.x} cy={CENTER.y} r={3.5} fill="#1c1a15" />
      {/* Label tag for far-right node */}
      <g transform="translate(556, 243)">
        <rect
          x="0" y="0" width="90" height="13"
          fill="#dddbd3" stroke="#1c1a15" strokeWidth="0.8" rx="1"
        />
        <text x="5" y="9.5" fontSize="6.5" fontFamily="'Inter', sans-serif" fill="#1c1a15" letterSpacing="0.06em">
          COVERAGE GAP
        </text>
        <rect
          x="0" y="14" width="90" height="13"
          fill="#dddbd3" stroke="#1c1a15" strokeWidth="0.8" rx="1"
        />
        <text x="5" y="23" fontSize="6.5" fontFamily="'Inter', sans-serif" fill="#1c1a15" letterSpacing="0.06em">
          PAYMENTS-RD
        </text>
      </g>
    </svg>
  );
}
