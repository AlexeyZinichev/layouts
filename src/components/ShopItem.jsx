export default function ShopItem({ name, price, color, img }) {
  return (
    <div className="list-item">
      <img src={img} alt={name} />
      <span className="list-name">{name}</span>
      <span className="list-price">{price} $</span>
      <span className="list-color">{color}</span>
    </div>
  )
}