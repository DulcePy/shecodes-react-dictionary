import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to Dictionary App</p>
        </header>

        <main className="">
          <Dictionary />
        </main>

        <footer className="app-footer">
          <small>Coded by Dulce Figueredo</small>
        </footer>
      </div>
    </div>
  );
}
