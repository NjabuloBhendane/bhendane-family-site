import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sage from "./pages/Sage";
import Bakery from "./pages/Bakery";
import Market from "./pages/Market";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/13thsage" element={<Sage />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/market" element={<Market />} />
      </Routes>
    </>
  );
}

export default App;
