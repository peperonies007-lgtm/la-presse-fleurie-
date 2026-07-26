export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span className="rule" />
      <svg viewBox="0 0 40 40" width="26" height="26">
        <g stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 36 L20 22" fill="#6f9f7e" />
          <path
            d="M20 24 C12 22 9 13 15 9 C18 7 22 7 25 9 C31 13 28 22 20 24 Z"
            fill="#e8447a"
          />
          <circle cx="20" cy="15" r="3.5" fill="#f2b705" />
        </g>
      </svg>
      <span className="rule" />
    </div>
  );
}
