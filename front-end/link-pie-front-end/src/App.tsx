/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";  // Import the SignInPage
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
