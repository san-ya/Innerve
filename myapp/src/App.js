import Footer from './Components/Footer.js'
import './App.css';
import Home from './Components/Home.js';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
