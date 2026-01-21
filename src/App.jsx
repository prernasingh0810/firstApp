
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './home.jsx';
import Contact from './contact.jsx';
import Login from './login.jsx'
import Dashboard from './dashboard.jsx'

export default function App() {
  return (
    <>
    <BrowserRouter>

        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>


    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
