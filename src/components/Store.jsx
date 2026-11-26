import React from 'react'
import IconSwitch from './IconSwitch.jsx'
import CardsView from './CardsView.jsx'
import ListView from './ListView.jsx'
import '../Store.css'

class Store extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'view_module'
    }
    this.onSwitch = this.onSwitch.bind(this)
  }

  onSwitch() {
    this.setState((prevState) => ({
      view: prevState.view === 'view_module' ? 'view_list' : 'view_module'
    }))
  }

  render() {
    const { products, layout } = this.props
    const isCards = this.state.view === 'view_module'

    return (
      <div className="store">
        <div className="store-toolbar">
          <IconSwitch
            icon={isCards ? 'view_list' : 'view_module'}
            onSwitch={this.onSwitch}
          />
        </div>
        {isCards
          ? <CardsView cards={products} layout={layout} />
          : <ListView items={products} />}
      </div>
    )
  }
}

export default Store