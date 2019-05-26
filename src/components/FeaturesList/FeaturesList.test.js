import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import FeaturesList from './FeaturesList'

const features = {
  Processor: [
    {
      name: 'MacBook Pro',
      cost: 700
    },
    {
      name: 'Professor X AMD Fire Breather with sidewinder technology',
      cost: 1200
    }
  ],
  "Operating System": [
    {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
    {
      name: 'Bodhi Linux',
      cost: 300
    }
  ],
  "Video Card": [
    {
      name: 'NVidia',
      cost: 1150.98
    },
    {
      name: 'Mind mild breeze 2000',
      cost: 1345
    }
  ],
  Display: [
    {
      name: 'Sony',
      cost: 1500
    },
    {
      name: '15.3" HGTV (3840 x 2160) Home makeover edition',
      cost: 1400
    },
  ]
};

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

const updateFeature = (feature, newValue) => {
  const selected = Object.assign({}, this.selected);
  selected[feature] = newValue;
  this.setState({
    selected
  });
}

describe('Features List component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<FeaturesList features={features} selected={selected} updateFeature={updateFeature} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Renders the UI as expected', () =>{
    const tree = renderer
    .create(<FeaturesList />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
})