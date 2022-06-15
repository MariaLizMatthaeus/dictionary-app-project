import logo from "./logo_mm.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="text-center"> Coded by Maria Matthäus</footer>
    </div>
  );
}
