const common = {
  viewBox: "0 0 200 240",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const OUTLINE = { stroke: "#1a1a1a", strokeWidth: 5 };

export function Peony() {
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 150" fill="#4a7a30" />
        <path d="M100 165 Q78 172 72 155 Q80 147 100 153" fill="#3d6626" />
        <path d="M100 165 Q122 172 128 155 Q120 147 100 153" fill="#5a8a3c" />
        <path
          d="M100 150 C68 143 58 105 76 78 C88 60 112 60 124 78 C142 105 132 143 100 150 Z"
          fill="#e8447a"
        />
        <path
          d="M100 150 C80 145 72 118 84 98 C91 86 109 86 116 98 C128 118 120 145 100 150 Z"
          fill="#f472a4"
        />
        <circle cx="100" cy="100" r="12" fill="#ffd23f" />
      </g>
      <text x="0" y="0" opacity="0">Paeonia officinalis</text>
    </svg>
  );
}

export function Ranunculus() {
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 158" fill="#4a7a30" />
        <path d="M100 172 Q80 178 74 160" fill="#3d6626" />
        <circle cx="100" cy="118" r="40" fill="#c81e1e" />
        <circle cx="100" cy="118" r="26" fill="#e8447a" />
        <circle cx="100" cy="118" r="12" fill="#ffb703" />
      </g>
      <path
        d="M100 82 L100 154 M64 118 L136 118 M76 94 L124 142 M124 94 L76 142"
        stroke="#8f1414"
        strokeWidth="2"
        opacity="0.55"
      />
    </svg>
  );
}

export function Eucalyptus() {
  return (
    <svg {...common}>
      <g {...OUTLINE} fill="#6f9f7e">
        <path d="M100 225 L100 60" strokeWidth="5" />
        <ellipse cx="82" cy="90" rx="15" ry="10" transform="rotate(-30 82 90)" />
        <ellipse cx="118" cy="115" rx="15" ry="10" transform="rotate(30 118 115)" />
        <ellipse cx="82" cy="140" rx="15" ry="10" transform="rotate(-30 82 140)" />
        <ellipse cx="118" cy="165" rx="15" ry="10" transform="rotate(30 118 165)" />
        <ellipse cx="82" cy="190" rx="15" ry="10" transform="rotate(-30 82 190)" />
      </g>
    </svg>
  );
}

export function Craspedia({ faded = false }) {
  return (
    <svg {...common} opacity={faded ? 0.55 : 1}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 140" fill="#4a7a30" />
        <path d="M100 155 Q80 162 72 145" fill="#3d6626" />
        <path d="M100 155 Q120 162 128 145" fill="#5a8a3c" />
        <circle cx="100" cy="100" r="38" fill="#f2b705" />
      </g>
      <path
        d="M100 62 L100 138 M62 100 L138 100 M74 74 L126 126 M126 74 L74 126"
        stroke="#c98a00"
        strokeWidth="2.4"
        opacity="0.7"
      />
      <circle cx="84" cy="84" r="5" fill="#fff6d8" stroke="#1a1a1a" strokeWidth="2" />
    </svg>
  );
}

export function Delphinium() {
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 60" fill="none" strokeWidth="5" />
        <path d="M100 190 Q80 196 72 180" fill="#4a7a30" />
        <path d="M100 190 Q120 196 128 180" fill="#5a8a3c" />
        <ellipse cx="100" cy="72" rx="17" ry="14" fill="#5a6fc4" />
        <ellipse cx="82" cy="102" rx="16" ry="13" transform="rotate(-18 82 102)" fill="#6a7fd4" />
        <ellipse cx="118" cy="102" rx="16" ry="13" transform="rotate(18 118 102)" fill="#4a5fb4" />
        <ellipse cx="79" cy="134" rx="17" ry="14" transform="rotate(-15 79 134)" fill="#6a7fd4" />
        <ellipse cx="121" cy="134" rx="17" ry="14" transform="rotate(15 121 134)" fill="#4a5fb4" />
        <ellipse cx="75" cy="166" rx="18" ry="15" transform="rotate(-12 75 166)" fill="#7a8fe4" />
        <ellipse cx="125" cy="166" rx="18" ry="15" transform="rotate(12 125 166)" fill="#3d4fa0" />
        <circle cx="100" cy="72" r="5" fill="#ffd23f" />
        <circle cx="82" cy="102" r="4.5" fill="#ffd23f" />
        <circle cx="118" cy="102" r="4.5" fill="#ffd23f" />
      </g>
    </svg>
  );
}

export function Rose() {
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 174" fill="#4a7a30" />
        <path
          d="M100 178 C136 178 148 146 132 122 C148 114 140 86 112 90 C120 70 84 70 92 90 C64 86 56 114 72 122 C56 146 68 178 100 178 Z"
          fill="#c81e46"
        />
        <path
          d="M100 158 C116 158 120 142 112 130 C120 122 108 110 96 118 C88 110 76 122 84 130 C76 142 84 158 100 158 Z"
          fill="#e8447a"
        />
      </g>
    </svg>
  );
}

export function Hydrangea() {
  const florets = [
    { cx: 100, cy: 96 },
    { cx: 72, cy: 116 },
    { cx: 128, cy: 116 },
    { cx: 76, cy: 148 },
    { cx: 124, cy: 148 },
    { cx: 100, cy: 130 },
    { cx: 100, cy: 160 },
  ];
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 182" fill="none" strokeWidth="5" />
        {florets.map((f, i) => (
          <circle key={i} cx={f.cx} cy={f.cy} r="16" fill="#8aa3e0" />
        ))}
        {florets.slice(0, 5).map((f, i) => (
          <circle key={i} cx={f.cx} cy={f.cy} r="5.5" fill="#5a6fc4" stroke="none" />
        ))}
      </g>
    </svg>
  );
}

export function Lavande() {
  const buds = [96, 112, 128, 144, 160];
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 90" fill="none" strokeWidth="5" />
        {buds.map((cy, i) => (
          <ellipse key={i} cx="100" cy={cy} rx={13 + i * 0.6} ry="11" fill="#7a5fc4" />
        ))}
      </g>
    </svg>
  );
}

export function Gypsophile() {
  const dots = [
    [100, 96], [78, 112], [122, 108], [92, 130], [112, 134], [100, 150],
  ];
  return (
    <svg {...common}>
      <g stroke="#1a1a1a" strokeWidth="3" fill="none">
        <path d="M100 230 L100 150 M100 130 L78 112 M100 120 L122 108 M100 160 L92 130" />
      </g>
      <g stroke="#1a1a1a" strokeWidth="3">
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="8" fill="#fff6e8" />
        ))}
      </g>
    </svg>
  );
}

export function Immortelle() {
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 148" fill="#4a7a30" />
        <path
          d="M100 60 L112 96 L150 96 L120 118 L132 154 L100 132 L68 154 L80 118 L50 96 L88 96 Z"
          fill="#f2b705"
        />
        <circle cx="100" cy="104" r="15" fill="#e8901a" />
      </g>
    </svg>
  );
}

export function Statice() {
  const clusters = [
    [100, 100], [118, 92], [82, 92], [70, 106], [130, 106], [100, 82],
  ];
  return (
    <svg {...common}>
      <g stroke="#1a1a1a" strokeWidth="3" fill="none">
        <path d="M100 230 L100 110 M100 130 L70 106 M100 120 L130 106" />
      </g>
      <g stroke="#1a1a1a" strokeWidth="3">
        {clusters.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="9" fill="#8a5fc4" />
        ))}
      </g>
    </svg>
  );
}

export function Pampa() {
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 130" fill="none" strokeWidth="5" />
        <path d="M100 140 C70 128 58 78 76 48 C86 78 92 110 100 140 Z" fill="#E9DCC0" />
        <path d="M100 140 C130 128 142 78 124 48 C114 78 108 110 100 140 Z" fill="#DCCBA3" />
        <path d="M100 140 C90 105 90 65 100 32 C110 65 110 105 100 140 Z" fill="#F0E6D0" />
      </g>
    </svg>
  );
}

export function Lagurus() {
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 158" fill="none" strokeWidth="5" />
        <ellipse cx="100" cy="112" rx="26" ry="42" fill="#EFE6D2" />
      </g>
      <path
        d="M100 74 L100 150 M84 82 L84 142 M116 82 L116 142"
        stroke="#c9b98a"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export function Protea() {
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 168" fill="#4a7a30" />
        <path d="M100 92 L114 148 L86 148 Z" fill="#e8447a" />
        <path d="M74 100 L98 152 L72 148 Z" transform="rotate(-14 82 126)" fill="#e8447a" />
        <path d="M126 100 L102 152 L128 148 Z" transform="rotate(14 118 126)" fill="#e8447a" />
        <path d="M62 118 L88 158 L60 162 Z" transform="rotate(-26 74 140)" fill="#f472a4" />
        <path d="M138 118 L112 158 L140 162 Z" transform="rotate(26 126 140)" fill="#f472a4" />
        <circle cx="100" cy="140" r="20" fill="#fff6e8" />
      </g>
    </svg>
  );
}

export function Anemone() {
  const petals = [0, 72, 144, 216, 288];
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 168" fill="none" />
        <g transform="translate(100,128)">
          {petals.map((a) => (
            <ellipse key={a} cx="0" cy="-32" rx="18" ry="26" transform={`rotate(${a})`} fill="#fdfaf3" />
          ))}
        </g>
        <circle cx="100" cy="128" r="16" fill="#1a1a1a" />
      </g>
    </svg>
  );
}

export function Coquelicot() {
  const petals = [0, 90, 180, 270];
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 168" fill="none" />
        <g transform="translate(100,128)">
          {petals.map((a) => (
            <ellipse key={a} cx="0" cy="-34" rx="20" ry="28" transform={`rotate(${a})`} fill="#e11c1c" />
          ))}
        </g>
        <circle cx="100" cy="128" r="14" fill="#1a1a1a" />
      </g>
    </svg>
  );
}

export function Bleuet() {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 160" fill="none" />
        <g transform="translate(100,120)">
          {petals.map((a) => (
            <path key={a} d="M0,0 L8,-32 L-8,-32 Z" transform={`rotate(${a})`} fill="#3d5fc4" />
          ))}
        </g>
        <circle cx="100" cy="120" r="11" fill="#1a3d7a" />
      </g>
    </svg>
  );
}

export function Amarante() {
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 90" fill="none" strokeWidth="5" />
        <path
          d="M100 90 Q80 115 100 140 Q120 155 100 175 Q86 188 100 205"
          fill="none"
          stroke="#7a1030"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <path
          d="M100 90 Q80 115 100 140 Q120 155 100 175 Q86 188 100 205"
          fill="none"
        />
      </g>
    </svg>
  );
}

export function Celosie() {
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 150" fill="#4a7a30" />
        <path
          d="M60 145 Q68 110 52 82 Q84 94 100 60 Q116 94 148 82 Q132 110 140 145 Q100 158 60 145 Z"
          fill="#e8447a"
        />
      </g>
    </svg>
  );
}

export function Achillee() {
  const dots = [
    [100, 92], [80, 88], [120, 88], [66, 100], [134, 100],
    [88, 76], [112, 76], [100, 68], [74, 112], [126, 112],
  ];
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 118" fill="none" />
      </g>
      <g stroke="#1a1a1a" strokeWidth="2.2">
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="7" fill="#f2b705" />
        ))}
      </g>
    </svg>
  );
}

export function Tournesol() {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 168" fill="none" />
        <g transform="translate(100,120)">
          {petals.map((a) => (
            <path key={a} d="M0,0 L8,-40 L-8,-40 Z" transform={`rotate(${a})`} fill="#f2b705" />
          ))}
        </g>
        <circle cx="100" cy="120" r="20" fill="#6b4a1a" />
      </g>
    </svg>
  );
}

export function Camomille() {
  const petals = [0, 72, 144, 216, 288];
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 168" fill="none" />
        <g transform="translate(100,128)">
          {petals.map((a) => (
            <ellipse key={a} cx="0" cy="-24" rx="10" ry="24" transform={`rotate(${a})`} fill="#fdfaf3" />
          ))}
        </g>
        <circle cx="100" cy="128" r="14" fill="#f2b705" />
      </g>
    </svg>
  );
}

export function Coton() {
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 158" fill="none" strokeWidth="5" />
        <path d="M84 148 L80 128 L92 136 L96 116 L100 140 L104 116 L108 136 L120 128 L116 148 Z" fill="#8a6a42" />
        <circle cx="86" cy="122" r="20" fill="#fdfaf3" />
        <circle cx="114" cy="122" r="20" fill="#fdfaf3" />
        <circle cx="100" cy="104" r="20" fill="#fff8ee" />
      </g>
    </svg>
  );
}

export function Chardon() {
  const spikes = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 156" fill="none" />
        <circle cx="100" cy="120" r="32" fill="#5a7fc4" />
      </g>
      <g stroke="#1a1a1a" strokeWidth="3">
        {spikes.map((a) => (
          <line
            key={a}
            x1="100"
            y1="120"
            x2={100 + 46 * Math.cos((a * Math.PI) / 180)}
            y2={120 + 46 * Math.sin((a * Math.PI) / 180)}
          />
        ))}
      </g>
    </svg>
  );
}

export function Banksia() {
  return (
    <svg {...common}>
      <g {...OUTLINE}>
        <path d="M100 230 L100 168" fill="none" strokeWidth="5" />
        <ellipse cx="100" cy="112" rx="28" ry="48" fill="#e8901a" />
      </g>
      <path
        d="M100 66 L100 158 M80 72 L80 152 M120 72 L120 152"
        stroke="#a85c0a"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export const FLOWER_ICONS = {
  peony: Peony,
  ranunculus: Ranunculus,
  eucalyptus: Eucalyptus,
  craspedia: Craspedia,
  delphinium: Delphinium,
  rose: Rose,
  hydrangea: Hydrangea,
  lavande: Lavande,
  gypsophile: Gypsophile,
  immortelle: Immortelle,
  statice: Statice,
  pampa: Pampa,
  lagurus: Lagurus,
  protea: Protea,
  anemone: Anemone,
  coquelicot: Coquelicot,
  bleuet: Bleuet,
  amarante: Amarante,
  celosie: Celosie,
  achillee: Achillee,
  tournesol: Tournesol,
  camomille: Camomille,
  coton: Coton,
  chardon: Chardon,
  banksia: Banksia,
};

export function FlowerIcon({ name, ...props }) {
  const Icon = FLOWER_ICONS[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
