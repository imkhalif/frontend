import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginForm from "../features/pages/LoginPage";
import TestPage from "../pages/Test";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/overview" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
