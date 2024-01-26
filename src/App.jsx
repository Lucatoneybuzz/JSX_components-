// App.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import productData from './product'; // Assuming you named your file product.js

const App = () => {
const firstName = 'Anthony'; 
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Name name={productData.name} />
        <Price price={productData.price} />
        <Description description={productData.description} />
        <Image imageUrl={productData.imageUrl} />
      </Card.Body>

      <Card.Footer>
        <div style={{ marginTop: '20px' }}>
          <p>Hello, {firstName ? firstName : 'there'}!</p>
          {firstName && <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/36/1952972/1.jpg?6258" alt="Your Alt Text" />}
        </div>
      </Card.Footer>
    </Card>
    </>
  );
};

export default App;
