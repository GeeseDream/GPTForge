
import React from 'react';
import './GPTModels.css';

const GPTModels = (props) => {
  return (
    <div className='gpt-models-container'>
      {props.data.map(model => (
        <div className="gpt-model-card" onClick={() => window.open(model.link, "_blank", "noreferrer,noopener")}>
          <img src={model.icon} alt="Model Icon" style={{width: '100px', height: '100px'}}/>
          <h1 style={{ fontSize: '18px' }}>{model.name}</h1>
          <p>{model.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GPTModels;
