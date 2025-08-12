import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import NavbarComponent from "./component/Navbar.jsx";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Projects from "./component/Projects.jsx";
import Contact from "./component/Contact.jsx"; // Contact import kiya
import Footer from "./component/Footer.jsx";   // Footer import kiya
import ProtectedRoute from "./component/ProtectedRoute.jsx";

// Pages
import LoginPage from "./pages/LoginPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

const MainLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Home />
      <About />
      <Projects />
      <Contact /> {/* Contact yahan add kiya */}
      <Footer />  {/* Footer yahan add kiya */}
    </>
  );
};

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
