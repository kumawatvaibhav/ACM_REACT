import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components:
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Pages:
import Home from './pages/Home.jsx';
import Inaugral from './pages/event_pages/Inaugral.jsx';
import Event from './pages/Event.jsx';
import Officer from './pages/Officer.jsx';
import Team from './pages/Team.jsx';
import About from './pages/About.jsx';
import CodeWars from './pages/event_pages/CodeWars.jsx';
import Gallery from './pages/Gallery.jsx';
import Darkside from './pages/event_pages/Darkside.jsx';
import Blog from './pages/Blog.jsx';
import AdminDashboard from './pages/admin.jsx';
import BlogDetails from './pages/BlogDetail.jsx';
import Login from './pages/Login.jsx';

// Wrapper Component to handle Navbar
function Layout({ children }) {
  const location = useLocation();

  // Debug: Log the current path
  console.log('Current Path:', location.pathname);

  // Define paths where Navbar should not be shown
  const hideNavbarPaths = ['/blog','/admin','dashboard']; 

  // Normalize path for comparison
  const isNavbarHidden = hideNavbarPaths.includes(location.pathname.toLowerCase());

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!isNavbarHidden && <Navbar />}
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Event' Component={Event} />
          <Route path='/event/Inaugural' Component={Inaugral} />
          <Route path='/Leaders' Component={Officer} />
          <Route path='/Team' Component={Team} />
          <Route path='/about' Component={About} />
          <Route path='/event/CodeWars' Component={CodeWars} />
          <Route path='/Gallery' Component={Gallery} />
          <Route path='/event/Darkside' Component={Darkside} />
          <Route path='/Blog' Component={Blog} />
          <Route path="/Blog/:id" element={<BlogDetails />} />
          <Route path='/admin' Component={AdminDashboard} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
