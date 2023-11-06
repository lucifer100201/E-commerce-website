import './App.css';
import Navbar from './components/Navbar/Nav.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from './Pages/homePage/Home.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
