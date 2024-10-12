import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components :
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

//Pages : 
import Home from './pages/Home.jsx';
import Inaugral from './pages/event_pages/Inaugral.jsx';
import Event from './pages/Event.jsx'
import Officer from './pages/Officer.jsx';
import Team from './pages/Team.jsx';
import About from './pages/About.jsx';
import CodeWars from './pages/event_pages/CodeWars.jsx';
import Gallery from './pages/Gallery.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/Event' Component={Event} />
        <Route path='/event/Inaugral' Component={Inaugral} />
        <Route path='/Leaders' Component={Officer} />
        <Route path='/Team' Component={Team} />
        <Route path='/about' Component={About} />
        <Route path='/event/CodeWars' Component={CodeWars}/>
        <Route path='/Gallery' Component={Gallery} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
