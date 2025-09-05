export default function PlaceholderImage({ ratio = '16/9', label = 'Image Placeholder' }) {
  return (
    <div
      className="ph"
      style={{ aspectRatio: ratio }}
      aria-label={label}
      role="img"
    >
      <div className="ph__grid" />
      <span className="ph__label">{label}</span>
    </div>
  )
}
