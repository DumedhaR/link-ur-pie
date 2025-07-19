import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

function App() {

   useEffect(() => {
    const lenis = new Lenis({
      duration: 0.33,
      easing: (t) => t
    })

    function raf(time : number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

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
