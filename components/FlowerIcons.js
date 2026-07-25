const common = {
  viewBox: "0 0 200 240",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Peony() {
  return (
    <svg {...common}>
      <path d="M100 230 L100 120" />
      <path d="M100 150 Q70 160 55 145 Q45 130 60 120 Q75 112 90 128" />
      <path d="M100 150 Q130 160 145 145 Q155 130 140 120 Q125 112 110 128" />
      <path d="M100 120 Q80 100 85 78 Q90 58 108 55 Q126 58 122 80 Q118 100 100 118" />
      <path d="M100 118 Q118 108 132 90" />
      <path d="M100 118 Q84 108 74 92" />
      <circle cx="132" cy="90" r="9" />
      <circle cx="74" cy="92" r="9" />
      <path d="M100 200 Q78 205 70 190 Q64 178 78 172 Q92 168 100 182" />
      <path d="M100 200 Q122 205 130 190 Q136 178 122 172 Q108 168 100 182" />
    </svg>
  );
}

export function Ranunculus() {
  return (
    <svg {...common}>
      <path d="M100 230 L100 110" />
      <path d="M100 140 Q75 150 62 132 Q54 116 70 108" />
      <path d="M100 140 Q125 150 138 132 Q146 116 130 108" />
      <circle cx="100" cy="90" r="26" />
      <path d="M100 64 L100 116 M76 90 L124 90 M84 72 L116 108 M116 72 L84 108" />
      <path d="M100 190 Q80 196 72 180" />
      <path d="M100 190 Q120 196 128 180" />
    </svg>
  );
}

export function Eucalyptus() {
  return (
    <svg {...common}>
      <path d="M100 225 L100 60" />
      <ellipse cx="82" cy="90" rx="14" ry="9" transform="rotate(-30 82 90)" />
      <ellipse cx="118" cy="115" rx="14" ry="9" transform="rotate(30 118 115)" />
      <ellipse cx="82" cy="140" rx="14" ry="9" transform="rotate(-30 82 140)" />
      <ellipse cx="118" cy="165" rx="14" ry="9" transform="rotate(30 118 165)" />
      <ellipse cx="82" cy="190" rx="14" ry="9" transform="rotate(-30 82 190)" />
    </svg>
  );
}

export function Craspedia({ faded = false }) {
  return (
    <svg {...common}>
      <path d="M100 230 L100 120" />
      <path d="M100 160 Q75 168 66 150" />
      <path d="M100 160 Q125 168 134 150" />
      <circle cx="100" cy="95" r="34" />
      <path
        d="M100 61 L100 129 M66 95 L134 95 M76 71 L124 119 M124 71 L76 119"
        opacity={faded ? 0.3 : 0.5}
      />
    </svg>
  );
}

export function Delphinium() {
  return (
    <svg {...common}>
      <path d="M100 230 L100 55" />
      <ellipse cx="100" cy="70" rx="15" ry="12" />
      <ellipse cx="83" cy="100" rx="14" ry="11" transform="rotate(-18 83 100)" />
      <ellipse cx="117" cy="100" rx="14" ry="11" transform="rotate(18 117 100)" />
      <ellipse cx="80" cy="132" rx="15" ry="12" transform="rotate(-15 80 132)" />
      <ellipse cx="120" cy="132" rx="15" ry="12" transform="rotate(15 120 132)" />
      <ellipse cx="76" cy="164" rx="16" ry="13" transform="rotate(-12 76 164)" />
      <ellipse cx="124" cy="164" rx="16" ry="13" transform="rotate(12 124 164)" />
      <path d="M100 190 Q80 196 72 180" />
      <path d="M100 190 Q120 196 128 180" />
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
