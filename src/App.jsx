import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import EventInfo from './pages/EventInfo.jsx';
import Event from './pages/Event.jsx'
import Footer from './components/Footer.jsx';
import Officer from './pages/Officer.jsx';
import Team from './pages/Team.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/event' Component={Event} />
        <Route path='/eventInfo' Component={EventInfo} />
        <Route path='/Leaders' Component={Officer} />
        <Route path='/Team' Component={Team} />
        <Route path='/about' Component={About} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
