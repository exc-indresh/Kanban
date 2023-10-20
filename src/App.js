import './App.css';
import Dashboard from './Component/Dashboard';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './Component/User';
import Priority from './Component/Priority';

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/user" element={<User/>} />
          <Route exact path="/priority" element={<Priority />} />

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
