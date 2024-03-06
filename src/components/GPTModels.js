import React from 'react';
import './GPTModels.css';

const GPTModels = (props) => {
    return (
      <div className='gpt-models-container'>
      {props.data.map(model => (
          <a href={model.link} target="_blank" rel="noreferrer noopener" className="gpt-model-card">
          <h1>{model.name}</h1>
          <p>{model.description}</p>
        </a>
      ))}
    </div>
  );
};

export default GPTModels;