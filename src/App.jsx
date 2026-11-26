import Store from './components/Store.jsx'
import { products, cardsLayout } from './data/data.jsx'

function App() {
  return <Store products={products} layout={cardsLayout} />
}

export default App