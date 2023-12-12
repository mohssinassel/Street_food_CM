// Date: 07/12/2023
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/Apropos";
import BecomeVendor from "./pages/BecomeVendor";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/becomeVendor" element={<BecomeVendor />} />
        </Routes>
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
