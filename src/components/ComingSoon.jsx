// ComingSoon component - Display for categories without inventory
export default function ComingSoon({ categoryName, availableDate }) {
  return (
    <div className="coming-soon">
      <h2>{categoryName}</h2>
      <p>Inventory coming soon — {availableDate}</p>
      <p className="text-muted">We're building inventory now. Check back soon.</p>
    </div>
  );
}
