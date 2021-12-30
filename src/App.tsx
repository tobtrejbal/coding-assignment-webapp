import React from 'react';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {

  const params = new URLSearchParams(window.location.search);
  var id = params.get('id');
  if (id == null) {
    id = "1";
  }

  return (
    <div className="mainDiv">
      <div className="contentContainer">
        <ProductDetail productId={Number(id)} />
      </div>
    </div>
  );
}

export default App;
