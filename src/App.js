import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Request, Docs, About } from "./pages/";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Request />} path='/request' />
        <Route element={<Docs />} path='/docs' />
        <Route element={<About />} path='/about' />
      </Routes>
    </Router>
  );
}

export default App;
