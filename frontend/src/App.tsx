import Header from 'components/Header';
import ProductList from 'components/ProductsList';
import { ContextProvider } from 'context/AppContext';

const App = () => {
  return (
    <ContextProvider>
      <Header />
      <main>
        <ProductList />
      </main>
    </ContextProvider>
  );
};

export default App;
