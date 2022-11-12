import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CCTV } from "../pages/CCTV";
import { Home } from "../pages/Home";
import "../styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cctv" element={<CCTV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
