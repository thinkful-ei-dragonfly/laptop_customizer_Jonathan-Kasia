import React from 'react'
import Total from './Total/Total'



function Checkout(props){
    const summary = Object.keys(props.selected)
        .map(key => (
            <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{props.selected[key].name}</div>
            <div className="summary__option__cost">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(props.selected[key].cost) }
      </div>
  </div>))
     
  return (
    <section className="main__summary">
    <h3>NEW GREENLEAF 2018</h3>
    {summary}
    <Total selected={props.selected} />
  </section>
  )
}
export default Checkout;