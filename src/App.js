import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Memo from "./page/Memo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </div>
  );
}

export default App;