import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [storeId, setStoreId] = useState('');
  const [productId, setProductId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit action here
  };

  return (
    <div className="landing-container">
      <h1 className="landing-heading">Welcome to Walmart Store</h1>
      <form className="landing-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Store ID" 
          value={storeId} 
          onChange={(e) => setStoreId(e.target.value)} 
          className="input-field" 
          required 
        />
        <input 
          type="text" 
          placeholder="Product ID" 
          value={productId} 
          onChange={(e) => setProductId(e.target.value)} 
          className="input-field" 
          required 
        />
        <button type="submit" className="landing-button">Submit</button>
      </form>
    </div>
  );
}

export default LandingPage;
