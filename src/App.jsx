import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
import Card from "./Components/Card";
import Section2 from "./Components/Section2";
import Form from "./Components/Form";
import Register from "./Components/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex h-100 w-100 text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />
        <Main />
        <hr />
        <Card />
        <hr />
        <Section />
        <Section2 />
        <Form />
        <Register />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
