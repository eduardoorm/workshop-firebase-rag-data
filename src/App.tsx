import { Routes, Route } from "react-router-dom";
import LoginPage from "./ui/auth/LoginPage";
import RegisterPage from "./ui/auth/RegisterPage";
import HomePage from "./ui/home/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
