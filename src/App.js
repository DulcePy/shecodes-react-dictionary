import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main className="">
          <Dictionary />
        </main>

        <footer className="app-footer">
          <small>
            Coded by Dulce Figueredo and is opened sourced on{" "}
            <a
              className=""
              href="https://github.com/DulcePy/shecodes-react-dictionary"
            >
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
