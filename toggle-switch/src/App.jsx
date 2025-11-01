import { useState } from "react";
import ThemeToggle from "./Components/toggle";
import "./index.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "app dark" : "app light"}>
      <h1>React Toggle App</h1>
      <ThemeToggle isDarkMode={isDarkMode} onToggle={handleToggle} />
      <p>
        Current theme: <strong>{isDarkMode ? "Dark" : "Light"}</strong>
      </p>
    </div>
  );
}

export default App;
