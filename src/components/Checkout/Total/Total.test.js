import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Total from './Total'

const selected = {
  Processor: {
      name: 'MacBookPro',
      cost: 30
    },
  "Operating System": {
      name: 'Ubuntu Linux 16.04',
      cost: 45
    },
  "Video Card":{
      name: 'NVidia',
      cost: 500
    },
  Display: {
      name: 'Sony',
      cost: 750
    }
}

describe('Total component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Total selected={selected} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders the UI as expected', () =>{
    const tree = renderer
    .create(<Total selected={selected}  />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
})