import React from 'react'

function Feature(props){
  console.log(props)
  return <li className="feature__item">
  <div className={props.featureClass}
    
    onClick={e => props.updateFeature(props.key, props.item)}>
      { props.item.name }
      ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
        .format(props.item.cost) })
  </div>
</li>
}

export default Feature