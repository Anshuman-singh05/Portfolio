import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';

// Components
import NavbarComponent from "./component/Navbar.jsx";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Projects from "./component/Projects.jsx";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer.jsx";
import ProtectedRoute from "./component/ProtectedRoute.jsx";

// Pages
import LoginPage from "./pages/LoginPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

const MainLayout = () => {
  return (
    <>
      <NavbarComponent/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="main-content"> 
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
