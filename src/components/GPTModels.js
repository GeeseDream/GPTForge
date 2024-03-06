import React from 'react';
import './GPTModels.css';

const GPTModels = (props) => {
    return (
      <div className='gpt-models-container'>
      {props.data.map(model => (
          <div className="gpt-model-card" onClick={() => window.open(model.link, "_blank", "noreferrer,noopener")}>
          <h1>{model.name}</h1>
          <p>{model.description}</p>
        </a>
      ))}
    </div>
  );
};

export default GPTModels;