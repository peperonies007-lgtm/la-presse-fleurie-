export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span className="rule" />
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M20 36 L20 14" />
        <circle cx="20" cy="9" r="5" />
        <path d="M20 22 Q10 22 8 14" />
        <path d="M20 22 Q30 22 32 14" />
      </svg>
      <span className="rule" />
    </div>
  );
}
