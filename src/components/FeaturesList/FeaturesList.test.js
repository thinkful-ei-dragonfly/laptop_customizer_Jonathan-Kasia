import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import FeaturesList from './FeaturesList'

describe('Features List component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FeaturesList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders the UI as expected', () =>{
    const tree = renderer
    .create(<FeaturesList />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
})