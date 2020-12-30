import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BarNav from './components/BarNav';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Error404 from './pages/Error404';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <BarNav />

      <Switch>
        <Route exact path="/">
          <Home />
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

        <Route path="*">
          <Error404 />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>    
  );
}

export default App;
