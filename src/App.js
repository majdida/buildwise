import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Concrete from "./pages/Concrete";
import Paint from "./pages/Paint";
import Area from "./pages/Area";
import Materials from "./pages/Materials";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concrete" element={<Concrete />} />
        <Route path="/paint" element={<Paint />} />
        <Route path="/area" element={<Area />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}