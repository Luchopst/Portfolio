import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
import Section2 from "./Components/Section2";
import Contact from "./Components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bienvenidos from "./Components/Bienvenidos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Bienvenidos />} />
        <Route path="/inicio" element={<Main />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/acerca de" element={<Section />} />
        <Route path="/certificaciones" element={<Section2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
