import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" exact element={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
