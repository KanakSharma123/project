import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import NewProject from "./pages/NewProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new-project" element={<NewProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;