import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/NavBar";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App(){
  return(
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}
export default App;