export default function ShopCard({ name, price, color, img }) {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="card-body">
        <h3>{name}</h3>
        <p>{price} $</p>
        <span>{color}</span>
      </div>
    </div>
  )
}