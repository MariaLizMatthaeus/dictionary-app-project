import logo from "./logo_mm.png";

import Dictionary from "./Dictionary";
import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="moon" />
        </main>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
