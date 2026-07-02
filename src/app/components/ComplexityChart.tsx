import { useState, useEffect, useRef } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Label,
} from 'recharts';

// Linear line starts clearly above exponential early on,
// they cross once around t=45, then exponential pulls dramatically ahead.
// This ensures they are never visually similar or overlapping.
const chartData = [
  { t: 0,   expo: 0,  linear: 0 },
  { t: 10,  expo: 1,  linear: 2 },
  { t: 20,  expo: 4,  linear: 4 },
  { t: 30,  expo: 10, linear: 7 },
  { t: 40,  expo: 22, linear: 10 },
  { t: 50,  expo: 41, linear: 13 },  // crossing zone
  { t: 60,  expo: 61, linear: 17 },
  { t: 70,  expo: 77, linear: 20 },
  { t: 80,  expo: 88, linear: 24 },
  { t: 90,  expo: 94, linear: 28 },
  { t: 100, expo: 98, linear: 32 },
];

export function ComplexityChart() {
  const [animKey, setAnimKey] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimKey(k => k + 1); },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',   // prevent chart from busting out of its container
      }}
    >
      <ResponsiveContainer width="100%" height={360}>
        <LineChart
          key={animKey}
          data={chartData}
          margin={{ top: 20, right: 20, left: 20, bottom: 36 }}
        >
          <CartesianGrid
            horizontal
            vertical={false}
            strokeDasharray="3 4"
            stroke="#1c1a15"
            strokeOpacity={0.1}
          />

          <XAxis
            dataKey="t"
            tick={false}
            axisLine={{ stroke: '#1c1a15', strokeOpacity: 0.4 }}
            tickLine={false}
          >
            <Label
              value="Time"
              position="insideBottomMiddle"
              offset={-10}
              style={{
                fontSize: 9,
                letterSpacing: '0.1em',
                fill: '#1c1a15',
                fillOpacity: 0.5,
                fontFamily: "'Inter', sans-serif",
              }}
            />
          </XAxis>

          <YAxis
            type="number"
            domain={[0, 100]}
            tick={false}
            axisLine={{ stroke: '#1c1a15', strokeOpacity: 0.4 }}
            tickLine={false}
            label={{
              value: 'Knowledge Complexity',
              angle: -90,
              position: 'insideLeft',
              offset: 14,
              style: {
                fontSize: 9,
                letterSpacing: '0.1em',
                fill: '#1c1a15',
                fillOpacity: 0.5,
                fontFamily: "'Inter', sans-serif",
                textAnchor: 'middle',
              },
            }}
          />

          {/* Olive — linear steady growth (student retention) */}
          <Line
            key="line-linear"
            id="line-linear"
            dataKey="linear"
            stroke="#6b6040"
            strokeWidth={1.8}
            dot={false}
            type="monotone"
            isAnimationActive
            animationBegin={0}
            animationDuration={2000}
            animationEasing="ease-out"
          />

          {/* Red — slow then explosive exponential growth (knowledge demanded) */}
          <Line
            key="line-expo"
            id="line-expo"
            dataKey="expo"
            stroke="#c42916"
            strokeWidth={2.5}
            dot={false}
            type="monotone"
            isAnimationActive
            animationBegin={200}
            animationDuration={2200}
            animationEasing="ease-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
