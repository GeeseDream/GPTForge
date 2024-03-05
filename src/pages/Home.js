import React from 'react';
import '../App.css';
import gptsData from '../gpts.json'; // Iünó gpts.json úndaten

const Home = () => (
  <div className="home">
    <h1>Welcome to our GPT Website</h1>
    <p>Explore the capabilities of GPT models and how they can transform your business or project.</p>
    {gptsData.map((item) => (
      <div key={item.id}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <ul>
          {item.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Home;