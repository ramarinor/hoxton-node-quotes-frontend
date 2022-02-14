import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componets/Header";
import Quotes from "./pages/Quotes";
import RandomQuote from "./pages/RandomQuote";
import SingleQuote from "./pages/SingleQuote";

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:id" element={<SingleQuote />} />
        <Route path="/random" element={<RandomQuote />} />
      </Routes>
    </main>
  );
}

export default App;
