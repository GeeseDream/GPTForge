
import React, { useState } from 'react';
import '../App.css';

const Demo = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ToDo: Implement the logic to send the input to the GPT model and display the results
  };

  return (
    <div className="demo">
      <h1>GPT Demo Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Input your question:
          <input type="text" value={input} onChange={e => setInput(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Demo;
