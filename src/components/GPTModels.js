
import React, { useEffect, useState } from 'react';

const GPTModels = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch('./gpts.json')
      .then(response => response.json())
      .then(data => setModels(data))
      .catch(error => console.error('Error fetching GPT models:', error));
  }, []);

  return (
    <div>
      <h1>GPT Models</h1>
      {models.length > 0 ? (
        <ul>
          {models.map(model => (
            <li key={model.id}>
              <h2>{model.name}</h2>
              <p>{model.description}</p>
              <ul>
                {model.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No models found.</p>
      )}
    </div>
  );
};

export default GPTModels;
