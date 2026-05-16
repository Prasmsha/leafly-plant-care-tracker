import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/contact"; // Ensure this matches your lowercase filename
import Home from "./pages/Home";
import ErrorFound from "./pages/ErrorFound";
import Navbar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar placed outside Routes so it appears on every page */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;