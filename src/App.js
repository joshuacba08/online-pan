import { BrowserRouter, Switch, Route } from "react-router-dom";
import BarNav from './components/BarNav';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Error404 from './pages/Error404';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import CartContextProvider from './contexts/CartContext';
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout";

import './App.css';


function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <BarNav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop/result/:query?">
            <Shop />
          </Route>
          <Route path="/shop/:name_category?">
            <Shop />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/producto/:id">
            <ProductDetail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="*">
            <Error404 />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </CartContextProvider>    
  );
}

export default App;
