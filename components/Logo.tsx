type Props = {
  size?: number;
  className?: string;
  glow?: boolean;
};

export default function Logo({ size = 40, className = "", glow = true }: Props) {
  const glowId = `logo-glow-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={glow ? { filter: "drop-shadow(0 0 12px rgba(255, 179, 71, 0.45))" } : undefined}
    >
      <defs>
        <linearGradient id={`${glowId}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffb347" />
          <stop offset="55%" stopColor="#ff9a2e" />
          <stop offset="100%" stopColor="#6bc46b" />
        </linearGradient>
        <linearGradient id={`${glowId}-inner`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#141414" />
        </linearGradient>
      </defs>

      {/* Outer hexagon ring */}
      <polygon
        points="32 4 56 18 56 46 32 60 8 46 8 18"
        fill={`url(#${glowId}-grad)`}
        stroke="rgba(255, 179, 71, 0.6)"
        strokeWidth="0.5"
      />

      {/* Inner dark hexagon */}
      <polygon
        points="32 10 50 20.5 50 43.5 32 54 14 43.5 14 20.5"
        fill={`url(#${glowId}-inner)`}
      />

      {/* Central hub node */}
      <circle cx="32" cy="32" r="7" fill={`url(#${glowId}-grad)`} />
      <circle cx="32" cy="32" r="3" fill="#0a0a0a" />

      {/* Connection lines to 3 nodes */}
      <line x1="32" y1="25" x2="32" y2="14" stroke={`url(#${glowId}-grad)`} strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="36" x2="18" y2="42" stroke={`url(#${glowId}-grad)`} strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="36" x2="46" y2="42" stroke={`url(#${glowId}-grad)`} strokeWidth="2" strokeLinecap="round" />

      {/* Satellite nodes */}
      <circle cx="32" cy="12" r="3.5" fill={`url(#${glowId}-grad)`} />
      <circle cx="17" cy="43" r="3.5" fill={`url(#${glowId}-grad)`} />
      <circle cx="47" cy="43" r="3.5" fill={`url(#${glowId}-grad)`} />

      {/* Inner dot accents */}
      <circle cx="32" cy="12" r="1.2" fill="#0a0a0a" />
      <circle cx="17" cy="43" r="1.2" fill="#0a0a0a" />
      <circle cx="47" cy="43" r="1.2" fill="#0a0a0a" />
    </svg>
  );
}
