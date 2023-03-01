import { Route ,Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'

function App() {
  const greeting = "Las Mejores Ofertas";
  return (
    <>
      <Navbar />
      <Routes>
      <Route
              path="/"
              element={<ItemListContainer greeting={greeting} />}
            />

            <Route
              path="/categories/:name"
              element={<ItemListContainer greeting={greeting} />}
            />

            <Route
              path="/product/:id"
              element={<ItemDetailContainer greeting={greeting} />}
            />

            <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;







