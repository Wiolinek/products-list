import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductsList';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="mb-[79px]">
        <ProductList />
      </main>
    </>
  );
};

export default App;
