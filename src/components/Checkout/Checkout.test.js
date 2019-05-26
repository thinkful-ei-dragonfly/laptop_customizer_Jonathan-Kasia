import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Checkout from './Checkout'

const selected = {
  Processor: {
      name: 'MacBookPro',
      cost: 700
    },
  "Operating System": {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
  "Video Card":{
      name: 'NVidia',
      cost: 1150.98
    },
  Display: {
      name: 'Sony',
      cost: 1500
    }
}

describe('Checkout component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Checkout selected={selected} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders the UI as expected', () =>{
    const tree = renderer
    .create(<Checkout selected={selected}  />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
})