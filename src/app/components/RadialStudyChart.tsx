import { PolarGrid, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';

const chartData = [
  { technique: 'Spaced Repetition', score: 92, fill: '#c42916' },
  { technique: 'Active Recall',     score: 87, fill: '#1c1a15' },
  { technique: 'Practice Testing',  score: 78, fill: '#6b6040' },
  { technique: 'Elaboration',       score: 64, fill: '#9a8818' },
  { technique: 'Re-reading',        score: 28, fill: '#c8c5be' },
];

const LEGEND = [
  { label: 'Spaced Repetition', color: '#c42916' },
  { label: 'Active Recall',     color: '#1c1a15' },
  { label: 'Practice Testing',  color: '#6b6040' },
  { label: 'Elaboration',       color: '#9a8818' },
  { label: 'Re-reading',        color: '#c8c5be' },
];

export function RadialStudyChart() {
  return (
    <div style={{ width: '100%', maxWidth: 340 }}>
      {/* Chart */}
      <div style={{ width: '100%', height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={chartData}
            innerRadius={28}
            outerRadius={102}
            startAngle={90}
            endAngle={-270}
          >
            <PolarGrid gridType="circle" radialLines={false} stroke="rgba(28,26,21,0.08)" />
            <RadialBar
              dataKey="score"
              background={{ fill: 'rgba(28,26,21,0.04)' }}
              cornerRadius={4}
              isAnimationActive
              animationBegin={200}
              animationDuration={1400}
              animationEasing="ease-out"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
        {LEGEND.map(({ label, color }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: color, flexShrink: 0 }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', letterSpacing: '0.06em', color: 'rgba(28,26,21,0.65)' }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(28,26,21,0.4)', marginTop: 14 }}>
        Long-term retention effectiveness (research composite)
      </p>
    </div>
  );
}
