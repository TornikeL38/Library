import { Routes, Route, Link } from 'react-router-dom';
import "./Components/css/style.css"
import Home from "./Components/home/Home.jsx"
import About from "./Components/about/About.jsx"
import Contact from './Components/contact/Contact';

function App() {
  return (
    <div>
      <div className="headerWrapper">
        <ul>
          <li className="navStyle">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>



      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact type="name"/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
