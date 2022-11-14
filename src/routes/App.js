import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "../context/Context";
import { CCTV } from "../pages/CCTV";
import { Home } from "../pages/Home";
import { Laptop } from "../pages/Laptop";
import { Printer } from "../pages/Printer";
import "../styles/App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Context.Provider value={background}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cctv" element={<CCTV />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/printer" element={<Printer />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
