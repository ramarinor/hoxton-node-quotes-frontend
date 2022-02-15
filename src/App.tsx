import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componets/Header";
import AddQuote from "./pages/AddQuote";
import EditQuote from "./pages/EditQuote";
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
        <Route path="/quotes/:id/edit" element={<EditQuote />} />
        <Route path="/random" element={<RandomQuote />} />
        <Route path="/addQuote" element={<AddQuote />} />
      </Routes>
    </main>
  );
}

export default App;
