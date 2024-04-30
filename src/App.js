import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        {" "}
        <Weather />
        <footer>
          {" "}
          This project was coded by{" "}
          <a href="https://phenyorasekedi.netlify.app/">Phenyo Rasekedi </a>
          and is{" "}
          <a
            href="https://github.com/PhenyoEstherRasekedi/weather-app-with-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}
