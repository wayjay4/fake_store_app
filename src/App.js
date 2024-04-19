import './App.css';
import Header from "./containers/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import CustomerCart from "./containers/CustomerCart";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<ProductListing />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/cart" element={<CustomerCart />} />
                <Route path="*" element="404 Not Found!" />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
