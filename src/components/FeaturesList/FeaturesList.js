import React from 'react';
import Feature from './Feature/Feature'

function FeaturesList(props){
  const features = Object.keys(props.features)
          .map(key => {
            const options = props.features[key].map((item, index) => {
              const selectedClass = item.name === props.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <Feature key={index} item={item} featureClass={featureClass} updateFeature={props.updateFeature} />
            });

            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
          });      
  
  
  return (
    <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {features}
          </section>
         
  )
}

export default FeaturesList;