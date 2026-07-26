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

export const FLOWER_ICONS = {
  peony: Peony,
  ranunculus: Ranunculus,
  eucalyptus: Eucalyptus,
  craspedia: Craspedia,
  delphinium: Delphinium,
};

export function FlowerIcon({ name, ...props }) {
  const Icon = FLOWER_ICONS[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
