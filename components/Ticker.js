export default function Ticker({ items }) {
  const doubled = [...items, ...items];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((name, i) => (
          <span key={i}>
            Vendue récemment — <em>{name}</em>
          </span>
        ))}
      </div>
    </div>
  );
}
