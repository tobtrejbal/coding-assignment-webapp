import React from 'react';
import ProductDetail from './components/ProductDetail';
import './App.css';
import ProductStore from './model/ProductStore';

function App() {

  const params = new URLSearchParams(window.location.search);
  var id = params.get('id');
  if (id == null) {
    id = "1";
  }

  return (
    <div className="mainDiv">
      <div className="contentContainer">
        <ProductDetail productId={Number(id)}
                      productStore={new ProductStore()} />
      </div>
    </div>
  );
}

export default App;
