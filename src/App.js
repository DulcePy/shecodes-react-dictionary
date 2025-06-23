import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main id="home">
          <Dictionary />
        </main>

        <footer className="app-footer">
          <small>
            Coded by <strong>Dulce Figueredo</strong> and is opened sourced on{" "}
            <a href="https://github.com/DulcePy/shecodes-react-dictionary">
              GitHub
            </a>
          </small>
        </footer>
        <a className="btn-float" href="#home">
          <i className="lni lni-angle-double-up"></i>
        </a>
      </div>
    </div>
  );
}
