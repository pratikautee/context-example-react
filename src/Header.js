import { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
  let { theme, setTheme } = useContext(ThemeContext);
  let light = { text: "black", bg: "light" };
  let dark = { text: "white", bg: "dark" };

  const toggleTheme = () => {
    let newTheme = theme.isLightTheme ? dark : light;
    setTheme({
      ...newTheme,
      accent: theme.accent,
      isLightTheme: !theme.isLightTheme,
    });
  };

  return (
    <>
      <Navbar sticky="top" bg={theme.accent} variant="dark">
        <Container>
          <Navbar.Brand className="mx-auto" href="#home">
            <h1>react-bootstrap + Context API example</h1>
          </Navbar.Brand>
          <button className="btn border text-white mx-2" onClick={toggleTheme}>
            <h5>Change to {theme.isLightTheme ? "dark" : "light"} Theme</h5>
          </button>
        </Container>
      </Navbar>
    </>
  );
}
