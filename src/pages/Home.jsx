
import React from 'react';
import GPTModels from '../components/GPTModels';
import gptsData from '../gpts.json';

const Home = () => (
  <div className="home">
    <h1>Welcome to GoForge</h1>
    <p>Explore the capabilities of GPT models and how they can transform your project.</p>
    <GPTModels data={gptsData} />
  </div>
);

export default Home;
