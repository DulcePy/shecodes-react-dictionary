import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>

        <footer className="app-footer">
          <small>
            Coded by Dulce Figueredo and is opened sourced on{" "}
            <a href="https://github.com/DulcePy/shecodes-react-dictionary">
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
