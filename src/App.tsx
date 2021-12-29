import React from 'react';
import ProductDetail from './components/ProductDetail';

function App() {

  return (
    <div className="mainDiv">
      <div className="contentContainer">
        <ProductDetail productId={1} />
      </div>
    </div>
  );
}

export default App;
