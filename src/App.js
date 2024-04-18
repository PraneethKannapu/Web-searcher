import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';

  function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/home'/>
      </Routes>
    </div>
  );
}

export default App;
