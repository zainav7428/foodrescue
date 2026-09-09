import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import DonateFood from "./pages/dashboard/DonateFood";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/donate-food" element={<DonateFood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;