// Name.jsx
import React from 'react';
import productData from '../product';

const Description = () => {
  return <h6 className='desc'>{productData.description}</h6>;
};

export default Description;
