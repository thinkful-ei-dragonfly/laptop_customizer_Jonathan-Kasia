import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Feature from './Feature'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import { isMainThread } from 'worker_threads';

describe('Feature Component', () => {
  it("Renders without crashing", () =>{
    const div = document.createElement('div')
    ReactDOM.render(<Feature />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it("Renders the UI as expected", () =>{
    const tree = renderer
    .create(<Feature />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })

})