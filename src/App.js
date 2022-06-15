import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import MainContent from "./MainContent";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
function App() {
  let [theme, setTheme] = useState({
    text: "white",
    bg: "dark",
    accent: "danger",
    isLightTheme: false,
  });

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header />
        <MainContent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
