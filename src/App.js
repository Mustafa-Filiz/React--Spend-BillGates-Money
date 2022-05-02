import "./App.css";
import Header from "./components/Header";
import MoneyContainer from "./components/MoneyContainer";
import { data } from "./utils/data";
import ProductCard from "./components/ProductCard";
import Receipt from "./components/Receipt";

function App() {
  return (
    <div className="App">
      <Header />
      <MoneyContainer />
      <div className="product-container">
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <Receipt />
    </div>
  );
}

export default App;
