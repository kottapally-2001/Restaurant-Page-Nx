// src/App.jsx
import { useState } from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import "./styles.css";

export default function App() {
  const [tab, setTab] = useState("home");

  return (
    <>
      <header>
        <div className="logo-container">
          <div className="logo"></div>
          <h1>Qtranz Restaurant</h1>
        </div>

        <nav>
          <button onClick={() => setTab("home")}>Home</button>
          <button onClick={() => setTab("menu")}>Menu</button>
          <button onClick={() => setTab("about")}>About</button>
        </nav>
      </header>

      <div id="content">
        {tab === "home" && <Home />}
        {tab === "menu" && <Menu />}
        {tab === "about" && <About />}
      </div>
    </>
  );
}
