function PeonyMark({ scale = 1 }) {
  return (
    <g transform={`scale(${scale})`}>
      <path
        d="M0,-30 C-24,-26 -30,4 -14,20 C-4,30 4,30 14,20 C30,4 24,-26 0,-30 Z"
        fill="#e8447a"
        stroke="#1a1a1a"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M0,-18 C-14,-16 -18,2 -8,12 C-3,17 3,17 8,12 C18,2 14,-16 0,-18 Z"
        fill="#f472a4"
        stroke="#1a1a1a"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <circle r="6" fill="#ffd23f" stroke="#1a1a1a" strokeWidth="3" />
    </g>
  );
}

function FlowerMark({ size = 40 }) {
  return (
    <svg viewBox="0 0 80 80" width={size} height={size} aria-hidden="true">
      <g transform="translate(40,42)">
        <PeonyMark scale={1.05} />
      </g>
    </svg>
  );
}

const wordmarkSerif = { fontFamily: "var(--font-display, Georgia, serif)" };
const inkFill = { fill: "#221D17" };
const terracottaItalic = { fontFamily: "var(--font-display, Georgia, serif)", fontStyle: "italic", fill: "#9C4A2C" };

export default function Logo({ variant = "horizontal", size = 40 }) {
  if (variant === "icon") {
    return <FlowerMark size={size} />;
  }

  if (variant === "stacked") {
    return (
      <svg viewBox="0 0 160 168" width={size * 2.6} height={size * 2.73} role="img" aria-label="La Presse Fleurie">
        <g transform="translate(80,54)">
          <PeonyMark scale={0.85} />
        </g>
        <text x="80" y="140" textAnchor="middle" fontSize="15" style={{ ...wordmarkSerif, ...inkFill }}>La Presse</text>
        <text x="80" y="160" textAnchor="middle" fontSize="15" style={terracottaItalic}>Fleurie</text>
      </svg>
    );
  }

  // horizontal
  return (
    <svg viewBox="0 0 300 70" width={size * 7.5} height={size * 1.75} role="img" aria-label="La Presse Fleurie">
      <g transform="translate(34,35)">
        <PeonyMark scale={0.6} />
      </g>
      <text x="66" y="41" fontSize="21" style={{ ...wordmarkSerif, ...inkFill }}>La Presse </text>
      <text x="177" y="41" fontSize="21" style={terracottaItalic}>Fleurie</text>
    </svg>
  );
}
