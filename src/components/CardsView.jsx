import ShopCard from './ShopCard.jsx'

export default function CardsView({ cards, layout }) {
  return (
    <div className="row">
      {cards.map((product, index) => (
        <div
          key={index}
          className={'col-' + layout.xs + ' col-sm-' + layout.sm + ' col-md-' + layout.md + ' col-lg-' + layout.lg}>
          <ShopCard {...product} />
        </div>
      ))}
    </div>
  )
}