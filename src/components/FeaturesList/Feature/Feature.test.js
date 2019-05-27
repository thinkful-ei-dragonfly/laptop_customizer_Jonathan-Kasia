import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Feature from './Feature'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

const updateFeature = (feature, newValue) => {
  const selected = Object.assign({}, this.state.selected);
  selected[feature] = newValue;
  this.setState({
    selected
  });
}

const item = {
  name: '15.3" HGTV (3840 x 2160) Home makeover edition',
  cost: 1400
}

describe('Feature Component', () => {
  it("Renders without crashing", () =>{
    const div = document.createElement('div')
    ReactDOM.render(<Feature featureHeader='Display' item={item} featureClass={`feature__option ''`} updateFeature={updateFeature} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it("Renders the UI as expected", () =>{
    const tree = renderer
    .create(<Feature featureHeader='Display' item={item} featureClass={`feature__option`} updateFeature={updateFeature} />)
    .toJSON();
    expect(tree).toMatchSnapshot()
  })

  it("Renders UI as expected when feature is selected", () => {
    const wrapper = shallow(<Feature featureHeader='Display' item={item} featureClass={`feature__option feature__selected`} updateFeature={updateFeature} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it("Renders UI as expected when feature is not selected", () => {
    const wrapper = shallow(<Feature featureHeader='Display' item={item} featureClass={`feature__option`} updateFeature={updateFeature} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

})