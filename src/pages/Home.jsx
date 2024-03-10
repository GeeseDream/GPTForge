
import React from 'react';
import GPTModels from '../components/GPTModels';

const Home = ({ data }) => (
  <div className="home">
    <h1>Welcome to GoForge</h1>
    <p>Explore the capabilities of GPT models and how they can transform your project.</p>
    <GPTModels data={data} />
  </div>
);

export default Home;
