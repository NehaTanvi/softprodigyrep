import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./Data";

function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="container">
      <h1 className="app-h1">Travel Journal</h1>
      <div className="pageholder">
        <Navbar />
        {cards}
      </div>
    </div>
  );
}

export default App;
