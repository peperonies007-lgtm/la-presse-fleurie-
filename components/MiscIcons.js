const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 };

function Sprout() {
  return (
    <svg {...common}>
      <path d="M12 2v14M8 8l4-4 4 4" />
      <path d="M6 16c0 3 3 5 6 5s6-2 6-5" />
    </svg>
  );
}

function Heart() {
  return (
    <svg {...common}>
      <path d="M12 21c-4-3-7-6-7-10a7 7 0 0 1 14 0c0 4-3 7-7 10z" />
    </svg>
  );
}

function Gift() {
  return (
    <svg {...common}>
      <path d="M4 4h16v16H4z" />
      <path d="M4 9h16" />
    </svg>
  );
}

export const MISC_ICONS = { sprout: Sprout, heart: Heart, gift: Gift };

export function MiscIcon({ name }) {
  const Icon = MISC_ICONS[name];
  return Icon ? <Icon /> : null;
}
