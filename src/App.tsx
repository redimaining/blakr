import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Wallet from "./views/Wallet/Wallet";
import Overview from "./views/Overview/Overview";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Wallet />} path="/wallet/:id" />
        <Route element={<Overview />} path="/overview" />
      </Routes>
    </Router>
  );
}

export default App;
