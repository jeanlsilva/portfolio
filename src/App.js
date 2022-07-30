import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import ContactUs from "./pages/contact";
import Modal from "react-modal";

Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
