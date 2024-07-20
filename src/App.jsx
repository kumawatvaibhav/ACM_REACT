import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <iframe
        src='https://my.spline.design/visualicons-4120e9c86553fc08853f314d8c8bc94d/'
        frameBorder='0'
        width='100%'
        height='500'
        className='fixed top-0 left-0 w-full h-full -z-10'
      ></iframe>
      <Routes>
        <Route exact path='/admin' Component={Navbar} />
      </Routes>
    </Router>
  );
}

export default App;
